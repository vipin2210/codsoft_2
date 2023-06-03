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
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";

const service = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#000215]'>
                <Header
                    image='/Frame.png'
                    name='Campaign'
                    page='Services/Campaign'
                />

                <div className='lg:w-4/5 lg:grid lg:mx-36 items-center'>
                    <CampaignCard />
                    <CampaignCard />
                </div>
            </div>
            <ScrollTop />
        </div>
    );
};

export default service;
