import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import CampaignCard from "@/components/CampaignCard";
import Navbar from "@/components/Navbar";
import Breadcrum from "@/components/Breadcrum";

const service = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-neutral-800'>
                <div className=''>
                    <img
                        className='object-fill  h-80 w-full'
                        src='/Frame.png'
                    />
                    <Breadcrum name={"Services"} page={"Services"} />
                </div>

                <div className='lg:w-4/5 lg:grid lg:mx-36 items-center'>
                    <CampaignCard />
                    <CampaignCard />
                </div>
            </div>
        </div>
    );
};

export default service;
