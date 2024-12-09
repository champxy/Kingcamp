import Image from "next/image"

type Props = {
    mainImg: string
    name: string
}
export default function Imgcontainer({mainImg,name}: Props) {
  return (
    <section className="h-[400px] md:h-[500px] lg:h-[600px] relative  mt-2">
        <Image src={mainImg} alt={name} fill priority
        className="object-cover rounded-lg"
        />
    </section>
  )
}