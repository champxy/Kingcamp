
import { createProfileAction } from "@/actions/actions";
import { Submitbutton } from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import { Button } from "@/components/ui/button"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



const CreateProfile = async () => {
    const user = await currentUser();
    if(user?.privateMetadata.hasProfile) redirect("/")

    return (
        <section>
            <div className="flex flex-col items-center h-screen w-full">
                <h1 className="text-base lg:text-2xl font-semibold mb-8">Welcome to the KingCamp, please create your profile</h1>
                {/* <form action={createProfileAction} className="flex flex-col w-[450px] border p-5 rounded-lg"> */}
                    <div className="flex flex-col w-[450px] border p-5 rounded-lg">
                    <FormContainer action={createProfileAction} >
                    <div className="grid lg:grid-cols-2 gap-4">
                        <FormInput name="firstName" label="First Name" type="text" placeholder="Enter your first name" />
                        <FormInput name="lastName" label="Last Name" type="text" placeholder="Enter your last name" />
                        <FormInput name="username" label="Username" type="text" placeholder="Enter your username" />
                    </div>
                       <Submitbutton classname="mt-5 w-1/4" size="sm" text="Create Profile" />
                    </FormContainer>
                    </div>
                {/* </form> */}
            </div>
        </section>
    )
}
export default CreateProfile