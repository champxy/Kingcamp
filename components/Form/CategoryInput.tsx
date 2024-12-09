import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "@/utils/categories"

const CategoryInput = ({defaultValue}:{defaultValue?:string}) => {
    const name = 'category'
    return (
        <div className="mb-2">
            <div className="mb-2">
                <Label htmlFor={name} className="mb-1 capitalize">
                    {name}
                </Label>
            </div>
            <Select 
            defaultValue={defaultValue || categories[0].label}
            name={name}
            required
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue>
                        
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {categories.map((category, index) => (
                        <SelectItem key={index} value={category.label}>

                            <span className="capitalize flex items-center gap-2">
                                <category.icon />
                                {category.label}
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}
export default CategoryInput