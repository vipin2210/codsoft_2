import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import CampaignCard from "@/components/CampaignCard";

const service = () => {
  return (
    <div className="bg-neutral-800">
      <div className="">
        <img className="object-fill  h-80 w-full" src="/Frame.png" />
        <h1 className="relative bottom-52 ml-14 text-4xl sm:text-6xl font-bold  text-white ">
          CAMPAIGN
        </h1>
      </div>

      <div>
        <CampaignCard />
        <CampaignCard />
      </div>
    </div>
  );
};

export default service;
