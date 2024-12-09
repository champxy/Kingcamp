
import { fetchlandmarkdetail } from "@/actions/actions"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import Breadcrum from "@/components/landmark/Breadcrum"
import Description from "@/components/landmark/Description"
import Imgcontainer from "@/components/landmark/Imgcontainer"
import ShareButton from "@/components/landmark/ShareButton"
import MapLandmark from "@/components/map/MapLandmark"
import MapLandmarkWrapper from "@/components/map/MapLandmarkWrapper"
import { redirect } from "next/navigation"

type Props = {
    params: {
        landmarks_id: string
    }
}

export const metadata = {
    title: "Landmark Details",
    description: "Landmark Details",
    keywords: "Landmark Details",
}


export default async function page({params}: Props) {
    const { landmarks_id } = await params
    const fetchlandmark_d = await fetchlandmarkdetail({id : landmarks_id})
    if (!fetchlandmark_d) redirect("/")


    metadata.title = fetchlandmark_d.name    
  return (
    <section>
        <Breadcrum name={fetchlandmark_d.name} />
        <header className="flex justify-between items-center mt-6">
            <h1 className="text-4xl font-bold ">{fetchlandmark_d.name}</h1>
            <div className="flex items-center gap-x-4">
                <ShareButton landmarkId={fetchlandmark_d.id} name={fetchlandmark_d.name}/>
                <FavoriteToggleButton landmarkId={fetchlandmark_d.id}/>
            </div>
        </header>
        {/* img */}
        <Imgcontainer mainImg={fetchlandmark_d.image} name={fetchlandmark_d.name}/>
        {/* detail */}
        <section>
            <div>
                <Description Description={fetchlandmark_d.description}/>
            </div>
        </section>
           <div className=" w-full mb-20 mt-10">
               <MapLandmarkWrapper location={{lat: fetchlandmark_d.lat, lon: fetchlandmark_d.lng}} height="50vh"/>
           </div>
    </section>
  )
}