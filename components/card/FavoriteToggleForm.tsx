'use client'
import { toggleFavorite } from "@/actions/actions"
import FormContainer from "../Form/FormContainer"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { CardSubmitButton } from "../Form/Buttons"
const FavoriteToggleForm = ({ favoriteId, landmarkId }: {
    favoriteId: string| null,
    landmarkId: string
}) => {
    const pathname = usePathname()
    console.log("id ",favoriteId)

    const toggleAction = toggleFavorite.bind(null, { favoriteId, landmarkId, pathname })

    return (
        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavorite={favoriteId ? true : false} />
        </FormContainer>
    )
}
export default FavoriteToggleForm