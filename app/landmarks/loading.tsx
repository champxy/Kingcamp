import { Skeleton } from "@/components/ui/skeleton"

type Props = {}
export default function loading({ }: Props) {
    return (
        <section>
            <Skeleton className="h-4 w-2/12 mt-2" />
            <header className="flex justify-between items-center mt-8">
                <Skeleton className="h-8 w-1/2" />
                <div className="flex items-center gap-x-4">
                    <Skeleton className="h-8 w-12" />
                    <Skeleton className="h-8 w-12" />
                </div>
            </header>
            <Skeleton className="h-[400px] md:h-[500px] lg:h-[600px] relative  mt-2" />
        </section>
    )
}