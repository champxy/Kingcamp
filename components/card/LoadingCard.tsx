import { Skeleton } from "../ui/skeleton"

const LoadingCard = () => {
    return (
        <>
            <SkeletonCardHero />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </>
    )
}

export const SkeletonCard = () => {
    return <div>
        <Skeleton
            className="h-[300px] rounded-xl mb-2"
        />
        <div className="flex justify-between mt-6">
            <Skeleton
                className="h-4 w-3/4 mb-2 rounded-xl"
            />
            <Skeleton
                className="h-4 w-1/12 mb-2 rounded-xl"
            />
        </div>
        <Skeleton
            className="h-4 w-1/2 rounded-xl mb-2"
        />
        <div className="flex justify-between">
            <Skeleton
                className="h-4 w-1/4 rounded-xl "
            />
            <Skeleton
                className="h-4 w-1/3 rounded-xl "
            />
        </div>
    </div>
}

export const SkeletonCardHero = () => {
    return <div>
        <Skeleton
            className="h-[600px] w-full rounded-xl mb-2"
        />
        <div className="flex justify-between mt-5">
            <Skeleton
                className="h-1 w-full  rounded-xl"
            />
        </div>
        <div className="flex justify-center items-center mt-5">
        <Skeleton
            className="h-10 w-full lg:w-1/3 rounded-xl "
        />
        </div>
    </div>
}

export default LoadingCard