'use server'

import { rendererror } from "@/utils/errors";
import { imageSchema, LandmarkSchema, profileSchema, validatWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";


const getAuthUser = async () => {
   const user = await currentUser();

   if (!user) {
      throw new Error("You must be logged in !.");
   }

   if (!user.privateMetadata.hasProfile) {
      redirect("/profile/create")
   }

   return user;
}


export const createProfileAction = async (prevState: any, formData: FormData) => {
   try {
      const user = await currentUser();
      if (!user) {
         throw new Error("You must be logged in !.");
      }
      const rawData = Object.fromEntries(formData)
      const validatefield = validatWithZod(profileSchema, rawData)
      console.log(validatefield)
      await db.profile.create({
         data: {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            profileImage: user.imageUrl ?? "",
            ...validatefield
         }
      })

      const client = await clerkClient();
      await client.users.updateUserMetadata(
         user.id,
         {
            privateMetadata: {
               hasProfile: true
            }
         }
      );

      // return { message: "Profile created successfully" }
      // return { message: "Profile created successfully" }
   } catch (error) {
      // console.log(error)
      return rendererror(error)
   }
   redirect("/")
};



export const createLandmarkAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
   try {
      const user = await getAuthUser();
      const rawData = Object.fromEntries(formData)
      const file = formData.get("image") as File
      //1 validate the form data
      const validatedfile = validatWithZod(imageSchema, { image: file })
      // console.log('validating', validatedfile)
      const validatefield = validatWithZod(LandmarkSchema, rawData)
      // console.log('validating',validatefield)

      //2 upload the image to supabase storage
      const fullpath = await uploadFile(validatedfile.image)
      console.log('fullpath', fullpath)
      //3 insert the data to the database
      await db.landmark.create({
         data: {
            ...validatefield,
            image: fullpath,
            profileId: user.id,
         }
      })

      // return { message: "Landmark created successfully" }
   } catch (error) {
      // console.log(error)
      return rendererror(error)
   }
   redirect("/")
};

export const fetchLandmarks = async ({ search = '',category='' }: { search?: string,category?:string }) => {
   const landmarks = await db.landmark.findMany({
      where: {
         ...(category && { category }),
         OR: [
            {
               name: {
                  contains: search,
                  mode: 'insensitive'
               }
            },
            {
               description: {
                  contains: search,
                  mode: 'insensitive'
               }
            }
         ]
      },
      orderBy: {
         createdAt: 'desc'
      }
   })
   return landmarks
}
export const fetchLandmarksHero = async () => {
   const landmarks = await db.landmark.findMany({
      orderBy: {
         createdAt: 'desc'
      },
      take: 5
   })
   return landmarks
}


export const fetchFavoriteID = async ({ landmarkId }: { landmarkId: string }) => {
   const user = await getAuthUser();
   const favorite = await db.favorite.findFirst({
      where: {
         landmarkId: landmarkId,
         profileId: user.id
      },
      select: {
         id: true
      }
   })
   return favorite?.id || null
}


export const toggleFavorite = async (prevState: {
   favoriteId: string | null,
   landmarkId: string
   pathname: string
}) => {
   const { favoriteId, landmarkId, pathname } = prevState;
   try {
      const user = await getAuthUser();
      //1 check if liked then delete
      if (favoriteId) {
         await db.favorite.delete({
            where: {
               id: favoriteId
            }
         })
      } else {
         //2 if not liked then add
         await db.favorite.create({
            data: {
               landmarkId: landmarkId,
               profileId: user.id
            }
         })
      }
      revalidatePath(pathname)
      return {
         message: favoriteId ? "unfavorite TT" : "favorite ^^"
      }
   } catch (error) {
      return rendererror(error)
   }
}



export const fetchFavorits = async () => {
   const user = await getAuthUser();
   const favorits = await db.favorite.findMany({
      where: {
         profileId: user.id
      },
      select: {
         landmark: {
            select: {
               id: true,
               name: true,
               image: true,
               description: true,
               price: true,
               province: true,
               lat: true,
               lng: true,
               category: true
            }
         }
      }
   })
   return favorits.map((favorite) => favorite.landmark)
}


export const fetchlandmarkdetail = async ({ id }: { id: string }) => {
   return await db.landmark.findUnique({
      where:{
         id,
      },
      include:{
         profile:true,
      }
   })
}


export const fetchRating = async ({ landmarkId }: { landmarkId: string }) => {
   const user = await getAuthUser();
   const rating = await db.rating.findFirst({
      where: {
         landmarkId: landmarkId,
         profileId: user.id
      },
      select: {
         id: true,
         rating: true
      }
   })
   return rating?.rating || 0
}


export const ToggleRating = async (prevState: {
   index: number,
   landmarkId: string,
   pathname: string
}) => {
   const { index, landmarkId, pathname } = prevState;
   try {
      const user = await getAuthUser();
      //1 check if liked then delete
      if (index) {
         await db.rating.delete({
            where: {
               id: landmarkId
            }
         })
      } else {
         //2 if not liked then add
         await db.rating.create({
            data:{
               rating:index,
               landmarkId,
               profileId:user.id,          
            }
         })
      }
      revalidatePath(pathname)
      return {
         message: index ? "unrate TT" : "rate ^^"
      }
   } catch (error) {
      return rendererror(error)
   }
}
