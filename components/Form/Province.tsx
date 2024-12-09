import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { provinces } from "@/utils/provinces"

const ProvinceInput = ({defaultValue}:{defaultValue?:string}) => {
    const name = 'province'
    return (
        <div className="mb-2">
            <div className="mb-2">
                <Label htmlFor={name} className="mb-1 capitalize">
                    {name}
                </Label>
            </div>
            <Select 
            defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
            name={name}
            required
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue>
                        
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {provinces.map((province) => (
                        <SelectItem key={province.PROVINCE_ID} value={province.PROVINCE_NAME}>

                            <span className="capitalize flex items-center gap-2">
                                {province.PROVINCE_NAME}
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}
export default ProvinceInput