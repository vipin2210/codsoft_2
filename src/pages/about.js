import CoreTeamCard from "@/components/CoreTeamCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Prize from "@/components/Prize.js";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ScrollTop from "@/components/ScrollTop";
const about = () => {
    const prize = [
        {
            image: "/prize1.png",
        },
        {
            image: "/prize2.png",
        },
        {
            image: "/prize3.png",
        },
        {
            image: "/1.jpg",
        },
        {
            image: "/2.jpg",
        },
        {
            image: "/3.jpg",
        },
        {
            image: "/prize3.png",
        },
        {
            image: "/4.jpg",
        },
    ];
    const teams = [
        {
            photo: "/ashok.png",
            name: "Ashok Rajput",
            profession: "Founder",
        },

        {
            photo: "/taruna.png",
            name: "Taruna Salhan ",
            profession: "Director",
        },

        {
            photo: "/Saira.png",
            name: "Saira Qureshi",
            profession: "Creative Director",
        },
    ];
    return (
        <div>
            <Navbar />
            <div>
                <Header image='/Frame.png' name='About Us' page='About us' />
                <div className='p-4 relative xl:h-auto lg:h-auto mg:h-80 sm:h-60 text-left justify-center'>
                    <h1 className='text-4xl font-bold -mt-20 text-center'>
                        About Us
                    </h1>
                    <p className='text-lg mt-1 sm:mx-8  p-4 sm:text-center'>
                        Help Artist India was founded in January of 2018. It
                        acknowledges and harbour the veiled, unidentified
                        artists, availing nothing but facilitating the
                        unrevealed talents inhabiting our society. This NGO
                        dreams of re- establishing the sphere of talents and
                        proclaiming the worth of any artist who behold the
                        talent and brew it for the audience. Artists can find
                        this organization extremely helpful and facilitating.
                        Above all saving the Heritage of the India, what makes
                        someone inspiring, is the ability to keep preserving
                        keeping the zeal alive even when the circumstances are
                        not favourable. The reason can be health, old age,
                        finance, or being out of the main stream.
                    </p>
                    <div className='sm:flex md:flex-row grid justify-start ml-8 text-2xl text-[#F20C36] font-bold mb-16 '>
                        <div className='sm:w-2/6'>
                            <ul>
                                <li className='list-disc sm:ml-24'>
                                    Talent Based Events
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-2/6'>
                            <ul>
                                <li className='list-disc sm:ml-24'>
                                    Fund Raising Events
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-2/6'>
                            <ul>
                                <li className='list-disc sm:ml-24'>
                                    Compaigns /Social Work
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full  bg-[#5C5959] mt-48 lg:mt-36'>
                <div className='flex md:flex-row flex-col gap-9 p-12 m-5 '>
                    <Glider
                        className='glider-container p-5  '
                        // draggable
                        scrollPropagate
                        hasArrows
                        hasDots
                        // itemWidth={6}
                        slidesToShow={1}
                        rewind
                        // exactWidth
                        draggable={true}
                        responsive={[
                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 2,
                                    hasDots: true,
                                },
                            },
                            {
                                breakpoint: 1100,
                                settings: {
                                    slidesToShow: 4,
                                    hasDots: true,
                                },
                            },
                        ]}
                    >
                        {prize.map((item, i) => (
                            <Prize key={i} props={item} />
                        ))}
                    </Glider>
                </div>
            </div>

            <div className='mx-auto mt-20 rounded-2xl md:w-1/3  w-64 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                <h1 className='text-4xl text-center font-bold p-4'>
                    CORE TEAM
                </h1>
            </div>

            <section className='container mx-auto '>
                <section class='relative mx-auto py-20 overflow-hidden bg-white'>
                    <div class='relative px-16 mx-auto max-w-7xl'>
                        <div class='grid w-full grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3'>
                            {teams.map((item, i) => (
                                <CoreTeamCard key={i} props={item} />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <ScrollTop />
        </div>
    );
};

export default about;
