
import { createLandmarkAction } from "@/actions/actions";
import { Submitbutton } from "@/components/Form/Buttons";
import CategoryInput from "@/components/Form/CategoryInput";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import ImageInput from "@/components/Form/ImageInput";
import ProvinceInput from "@/components/Form/Province";
import TextareaInput from "@/components/Form/TextareaInput";
import MapLandmark from "@/components/map/MapLandmark";
import MapLandmarkWrapper from "@/components/map/MapLandmarkWrapper";
import { Button } from "@/components/ui/button"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";





const CreateProfile = async () => {
    return (
        <section>
            <div className="flex flex-col items-center h-screen w-full">
                <h1 className="text-base lg:text-2xl font-semibold mb-8">Create Landmark </h1>
                {/* <form action={createProfileAction} className="flex flex-col w-[450px] border p-5 rounded-lg"> */}
                <div className="flex flex-col w-[450px] border p-5 rounded-lg">
                    <FormContainer action={createLandmarkAction} >
                        <div className="grid lg:grid-cols-2 gap-4">
                            <FormInput name="name" label="Landmark Name" type="text" placeholder="Enter Landmark Name" />
                            <CategoryInput />
                            
                        </div>
                        <TextareaInput name="description" labelText="Description"  placeholder="Enter Description" />
                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                        <FormInput name="price" label="Price" type="number" placeholder="Enter Price" />
                        <ProvinceInput />
                        </div>
                        <ImageInput />
                        <MapLandmarkWrapper location={{ lat: 14, lon: 101 }} height="35vh" />

                        <Submitbutton classname="mt-5 w-1/4" size="sm" text="create" />
                    </FormContainer>
                </div>
                {/* </form> */}
            </div>
        </section>
    )
}
export default CreateProfile