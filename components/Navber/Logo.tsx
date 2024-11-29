import Link from "next/link"
import { Button } from "../ui/button"


const Logo = () => {
  return (
    <Button size={"sm"}>
        <Link 
        href={"/"}
        className="text-2xl font-bold text-black">Logo</Link>
    </Button>
  )
}
export default Logo