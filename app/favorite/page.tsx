import { fetchFavorits } from "@/actions/actions"
import EmtryList from "@/components/home/EmtryList"
import LandmarkList from "@/components/home/LandmarkList"

const favoritePage = async () => {
  const favorite = await fetchFavorits()
  // console.log(favorite)
  if (favorite.length === 0) {
    return <EmtryList heading="Favorite" message="No favorite landmark found" btnText="Go to Home" />
  }
  return <LandmarkList landmarks={favorite} />
}

export default favoritePage
