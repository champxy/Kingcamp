import { LankmarkCardProps } from "@/utils/types"

const Otherinfo = ({ landmarks }: { landmarks: LankmarkCardProps }) => {
    return (
        <div className="text-white">
            <p>{landmarks.province}</p>
            <p className="text-2xl font-semibold md:my-3 md:text-6xl md:leading-[80px]">{landmarks.name}</p>
            <p className="text-lg">
                {
                    landmarks.description.length > 50 ?
                        landmarks.description.substring(0, 50) + "..."
                        : landmarks.description
                }
            </p>
        </div>
    )
}
export default Otherinfo