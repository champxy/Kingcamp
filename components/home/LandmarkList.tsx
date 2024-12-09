import LandmarkCard from "../card/LandmarkCard"
import { LankmarkCardProps } from "@/utils/types"
import LoadingCard from "../card/LoadingCard"



const LandmarkList = ({landmarks } : {landmarks:LankmarkCardProps[]}) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {
            landmarks.map((landmark) =>
            {
                return <LandmarkCard key={landmark.id} landmark={landmark} />
            }   
            )
        }
    </section>
  )
}
export default LandmarkList