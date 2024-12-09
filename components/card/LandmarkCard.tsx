import Image from "next/image"
import { LankmarkCardProps } from "@/utils/types"
import FavoriteToggleButton from "./FavoriteToggleButton"
import Link from "next/link"

const LandmarkCard = ({ landmark }: { landmark: LankmarkCardProps }) => {
    const { image, name, id, province, lat, lng, category, description, price } = landmark
    return (
        <article className="group relative">
            <Link href={`/landmarks/${id}`}>
                <div className="relative h-[300px] rounded-xl">
                    <Image
                        src={image}
                        sizes=" (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        alt={name}
                        className="object-cover rounded-md group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        fill
                    />
                </div>
                <div className="flex  justify-between mt-3 items-center">
                    <h2 className="text-2xl font-bold">{name.substring(0, 20)}</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                    {
                        description && description.length > 35 ? description.substring(0, 35) + "..." : description
                    }
                </p>

                <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-muted-foreground">THB {price} </p>
                    <p className="text-sm text-muted-foreground">{province}</p>
                </div>

            </Link>
            {/* <div className="absolute bottom-10 right-0 ">
            <LandmarkRating landmarkId={id} />
            </div> */}
            <div className="absolute top-3 right-3">
                <FavoriteToggleButton landmarkId={id} />
            </div>
        </article>
    )
}
export default LandmarkCard