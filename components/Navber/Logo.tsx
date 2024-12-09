import Link from "next/link"
import { Button } from "../ui/button"
import logo from "../../public/logo/logo.png"
import Image from "next/image"


const Logo = () => {
  return (

    <Link
      href={"/"}
      className="w-full relative">
      <Image src={logo} alt="logo"  priority 
        width={60}
        className="rounded-lg object-cover"
      />
    </Link>

  )
}
export default Logo