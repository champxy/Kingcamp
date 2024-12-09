import { ThumbsUp } from 'lucide-react';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server'
import { SignInCardButton } from '../Form/Buttons';
import { fetchFavoriteID } from '@/actions/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({landmarkId}:{landmarkId:string}) => {
    const { userId, redirectToSignIn } = await auth()

    if (!userId) {
        return <SignInCardButton />
    }
    const favoriteId = await fetchFavoriteID({landmarkId})
    // console.log(favoriteId)
  return (
   <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId}/>
  )
}
export default FavoriteToggleButton