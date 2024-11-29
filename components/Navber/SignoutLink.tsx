'use client'
import {SignOutButton} from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"

const SignoutLink = () => {
    const { toast } = useToast()
    
    const handleSignOut = async () => {
        toast({
            title: "Signed out",
            description: "You have been signed out",
          })
    }


  return (
    <div>
       <SignOutButton redirectUrl='/'> 
       <button
       className='w-full text-left px-2 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-gray-900'
       onClick={handleSignOut}
       >Logout</button>
       </SignOutButton>
    </div>
  )
}
export default SignoutLink