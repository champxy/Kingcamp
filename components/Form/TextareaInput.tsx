import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const TextareaInput = ({ name, labelText, defaultValue,placeholder }: { name: string, labelText: string, defaultValue?: string,placeholder:string }) => {
    return (
        <div>
            <Label htmlFor={name} className="mb-1 capitalize">
                {labelText}
            </Label>
            <Textarea
                className="capitalize"
                id={name}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                rows={5}
                required
            />
        </div>
    )
}
export default TextareaInput