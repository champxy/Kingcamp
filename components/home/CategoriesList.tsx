import { categories } from "@/utils/categories"
import Link from "next/link"

const CategoriesList = ({ search, category }: { search?: string, category?: string }) => {
    const searchTerm = search ? `&search=${search}` : ''
    return (
        <div className="flex gap-5 justify-start lg:justify-center md:justify-center font-bold items-center overflow-x-auto">
            {categories.map((item) => {
                const isActive = category === item.label;
                const href = isActive ? '/' : `/?category=${item.label}${searchTerm}`;

                return (
                    <Link key={item.label} href={href}>
                        <article
                            className={`flex flex-col items-center cursor-pointer ${isActive ? 'text-blue-500' : 'text-gray-500'
                                }`}
                        >
                            <item.icon />
                            <p>{item.label}</p>
                        </article>
                    </Link>
                );
            })}
        </div>
    )
}
export default CategoriesList