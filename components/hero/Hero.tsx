'use client'
import { LankmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import Otherinfo from "./Otherinfo";

const Hero = ({ landmarks }: { landmarks: LankmarkCardProps[] }) => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {landmarks.map((landmark) => (
                    <SwiperSlide key={landmark.id} className="group">
                        <div className="relative rounded-lg overflow-hidden">
                            <img src={landmark.image} alt={landmark.name} className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 z-50">
                                <div className="col-span-4 mb-3 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                    <Otherinfo landmarks={landmark} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}
export default Hero