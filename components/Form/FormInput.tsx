import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormInputProps = {
    name: string
    type: string
    label: string
    defaultValue?: string
    placeholder?: string
}


const FormInput = (
    props: FormInputProps
) => {
    const { name, type, label, defaultValue, placeholder } = props
    return (
        <div className="mb-2">
           <div className="mb-2">
           <Label htmlFor={name} className="mb-1 ">
                {label}
            </Label>
           </div>
            <Input type={ type || 'text' } name={name} defaultValue={defaultValue} placeholder={placeholder}
            />
        </div>
    )
}
export default FormInput