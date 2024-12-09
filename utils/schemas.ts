import { z, ZodSchema } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }).max(50),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }).max(50),
    username: z.string().min(2, { message: "Username must be at least 2 characters long" }).max(50)
})


const validateImg = () => {
    const maxFileSize = 1024 * 1024 
    return z.instanceof(File).refine((file)=>{
      return  file.size <= maxFileSize
    },'Image size must be less than 1MB')
}
export const imageSchema = z.object({
    image: validateImg()
})


export const LandmarkSchema = z.object({
    name: z.string().min(2, { message: "Landmark name must be at least 2 characters long" }).max(30, { message: "Landmark name must be at most 30 characters long" }),
    category : z.string(),
    description: z.string().min(10, { message: "Description must be at least 10 characters long" }).max(200, { message: "Description must be at most 200 characters long" }),
    price: z.coerce.number().int().min(0, { message: "Price must be at least 0" }),
    province: z.string(),
    lat : z.coerce.number(),
    lng : z.coerce.number(),
})

export const validatWithZod = <T>(
    schema: ZodSchema<T>,
    data: unknown
):T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join("\n"))
    }
    return result.data
}