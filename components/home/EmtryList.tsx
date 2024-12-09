import Link from "next/link"
import { Button } from "../ui/button"
const EmtryList = ({heading="Not Found",message="No data found",btnText="Try Again"}: {heading?:string,message?:string,btnText?:string}) => {
  return (
    <div className="mt-10">
        <h1 className="text-2xl text-center font-bold">{heading}</h1>
        <p className="text-center">{message}</p>
        <div className="flex justify-center mt-5">
            <Button asChild>
              <Link href="/">{btnText}</Link>
            </Button>
        </div>
    </div>
  )
}
export default EmtryList