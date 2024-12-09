import { Label } from "../ui/label"
import { Input } from "../ui/input"

const ImageInput = () => {
    const name = "image"
    return (
        <div>
            <Label className="capitalize" htmlFor={name}>

                {name}
            </Label>
            <Input type="file" name={name} id={name} required accept="image/*" />
        </div>
    )
}
export default ImageInput