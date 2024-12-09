import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LankmarkCardProps } from "@/utils/types"
import Hero from "../hero/Hero"
import CategoriesList from "./CategoriesList"
import EmtryList from "./EmtryList"

const LandmarkContainer = async ({ search,category }: { search?: string, category?: string }) => {
  const landmarks: LankmarkCardProps[] = await fetchLandmarks({ search, category })
  const landmarksHero: LankmarkCardProps[] = await fetchLandmarksHero()
  // console.log(landmarks)

  // if(landmarks.length === 0){
  //   return <EmtryList heading="No Landmarks Found" message="No Landmarks found, please try again" btnText="Try Again" />
  // }

  return (
    <div className="mb-10">
      <Hero landmarks={landmarksHero} />
      <hr className="my-5 border-gray-400 shadow-md" />
      <CategoriesList search={search} category={category}/>
      {
        landmarks.length === 0 
        ? <EmtryList heading="No Landmarks Found" message="No Landmarks found, please try again" btnText="Try Again" />
        : <LandmarkList landmarks={landmarks} />
      }
      
    </div>
  )
}
export default LandmarkContainer