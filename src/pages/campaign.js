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

const campaigns = [
    {
        name: "Singing Competition By Help Artist India",
        desc: "Help Artist India is dedicated to music, art, and culture. So as to save the heritage of Indian music and various art forms, we took a survey and went on a hunt through the country to find some unique talent under the series Funkaar. It's a project to showcase talent on a defined stage.We donate musical instruments to needy artists. With our mentors, we go the extra mile to raise funds for this activity. We arrange workshops in some schools and hostels for physically challenged students. to teach music, Getting a platform for the artist is another project that we target because getting work for the artist is the major concern.",
        link: "/donation",
        image1: "/mis4.png",
        image2: "/mis5.png",
        image3: "/mis6.png",
    },
    {
        name: "Donation By Help Artist India",
        desc: "Help Artist India is dedicated to music, art, and culture. So as to save the heritage of Indian music and various art forms, we took a survey and went on a hunt through the country to find some unique talent under the series Funkaar. It's a project to showcase talent on a defined stage. We donate musical instruments to needy artists. With our mentors, we go the extra mile to raise funds for this activity. We arrange workshops in some schools and hostels for physically challenged students. to teach music, Getting a platform for the artist is another project that we target because getting work for the artist is the major concern.",
        link: "/donation",
        image1: "/mis1.png",
        image2: "/mis2.png",
        image3: "/mis3.png",
    },
];
const service = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#000215]'>
                <Header
                    image='/banner/campaignbanner.jpg'
                    name='Campaign'
                    page='Services/Campaign'
                />

                <div className='lg:w-4/5 lg:grid lg:mx-36 items-center'>
                    <CampaignCard props={campaigns[0]} />
                    <CampaignCard props={campaigns[1]} />
                </div>
            </div>
            <ScrollTop />
        </div>
    );
};

export default service;
