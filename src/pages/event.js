<<<<<<< HEAD:src/pages/pastEventPage.js
=======
import Breadcrum from "@/components/Breadcrum";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PastEvent from "@/components/PastEvent";
import SimpleCarousal from "@/components/SimpleCarousal";

import React from "react";

const pastevent = [
    {
        name: "LIVE IN CONCERT",
        desc: "“Chitrahaar” a musical night with Padma Shri Hariharan, witness the mystic performance of living legend at F Bar and Lounge Noida. BOOK YOUR TABLES NOW HURRY !! Help Artist India Is All Set For Major Musical Events 2023 With Big Artists Of The Industry, It Will Be All For Fundraising For The NGO Dedicated To Upliftment Of Art And Artists Who Need Help To Live Their Dream Of Being An Artist.  Announcement Of These Musical Events Has Been Met With Enthusiasm By Music Fans Across India.",
        link: "",
        poster: "",
        image1: "",
        image2: "",
        date: "11",
        year: "2023",
        day: "sunday",
        month: "June",
    },
    {
        name: "",
        desc: "",
        link: "",
        poster: "",
        image1: "",
        image2: "",
        date: "",
        year: "",
        day: "",
    },
    {
        name: "",
        desc: "",
        link: "",
        poster: "",
        image1: "",
        image2: "",
        date: "",
        year: "",
        day: "",
    },
    {
        name: "",
        desc: "",
        link: "",
        poster: "",
        image1: "",
        image2: "",
        date: "",
        year: "",
        day: "",
    },
];

const pastEventPage = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-black'>
                <Header
                    image='/Frame.png'
                    name='Event'
                    page='Past event'
                />

                <div className='relative container -mt-14 z-20 mx-auto p-16 '>
                    <div className='grid grid-cols-2  gap-x-5'>
                        <div className=''>
                            <a href='#'>
                                <img
                                    className=''
                                    src='/hariharan.png'
                                    alt='hariharan'
                                />
                            </a>
                            <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                                <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                    11
                                </p>
                                <div className='grid text-white'>
                                    <span>JUNE</span>
                                    <span>2023</span>
                                    <span>SUNDAY</span>
                                </div>
                                {/* <div className=' w-[100%]   border-b-2 border-yellow-500 items-center mb-11'></div> */}
                            </div>
                        </div>
                        <div className='text-white -ml-32'>
                            <h1 className='text-6xl font-bold '>
                                LIVE IN CONCERT
                            </h1>
                            <h2 className='text-lg mt-10'>
                                Rumaniyat a musical night with Padma Shri
                                Hariharan ,witness the mystic performance of
                                living legend at F Bar and Lounge Noida BOOK
                                YOUR TABLES NOW HURRY !!
                            </h2>
                            <h2 className='text-lg mt-8'>
                                Help Artist India Is All Set For Major Musical
                                Events 2023 With... Big Artists Of The Industry
                                ,It Will Be All For Fundraising For The NGO
                                Dedicated To Upliftment Of Art And Artists Who
                                Need Help To Live Their Dream Of Being An Artist
                                Announcement Of These Musical Events Has Been
                                Met With Enthusiasm By Music Fans Across India.
                            </h2>
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-72  font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                            <SimpleCarousal
                                image1='/comingsoon.png'
                                image2='/comingsoon.png'
                            />
                        </div>{" "}
                        <div className='w-full border-4  border-yellow-500  mb-11 ml-96'></div>
                    </div>




                    {/*  */}





                    {/*  */}

                    {/* pastevent 2  from right to left*/}
                    <div className='mt-10 grid grid-cols-2 '>
                        <div className='text-white '>
                            <h1 className='text-6xl font-bold'>
                                Shaam-e-Ghazal
                            </h1>
                            <h2 className='text-lg mt-10'>
                                Rumaniyat a musical night with Padma Shri
                                Hariharan ,witness the mystic performance of
                                living legend at F Bar and Lounge Noida BOOK
                                YOUR TABLES NOW HURRY !!
                            </h2>
                            <h2 className='text-lg mt-8'>
                                Help Artist India Is All Set For Major Musical
                                Events 2023 With... Big Artists Of The Industry
                                ,It Will Be All For Fundraising For The NGO
                                Dedicated To Upliftment Of Art And Artists Who
                                Need Help To Live Their Dream Of Being An Artist
                                Announcement Of These Musical Events Has Been
                                Met With Enthusiasm By Music Fans Across India.
                            </h2>
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-60  font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                            <SimpleCarousal
                                image1='/comingsoon.png'
                                image2='/comingsoon.png'
                            />
                        </div>
                        <div className='ml-36'>
                            <div className=''>
                                <a href='#'>
                                    <img
                                        className=''
                                        src='/ghazal.png'
                                        alt='ghazal'
                                    />
                                </a>
                                <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                                    <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                        14
                                    </p>
                                    <div className='grid text-white'>
                                        <span>JULY</span>
                                        <span>2023</span>
                                        <span>FRIDAY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full border-4  border-yellow-500  mb-11 ml-96'></div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-5'>
                        <div className=''>
                            <a href='#'>
                                <img
                                    className=''
                                    src='/funkaar3.png'
                                    alt='funkaar3'
                                />
                            </a>
                            <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                                <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                    11
                                </p>
                                <div className='grid text-white'>
                                    <span>JUNE</span>
                                    <span>2023</span>
                                    <span>SUNDAY</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white -ml-32'>
                            <h1 className='text-6xl font-bold '>
                                LIVE IN CONCERT
                            </h1>
                            <h2 className='text-lg mt-10'>
                                Rumaniyat a musical night with Padma Shri
                                Hariharan ,witness the mystic performance of
                                living legend at F Bar and Lounge Noida BOOK
                                YOUR TABLES NOW HURRY !!
                            </h2>
                            <h2 className='text-lg mt-8'>
                                Help Artist India Is All Set For Major Musical
                                Events 2023 With... Big Artists Of The Industry
                                ,It Will Be All For Fundraising For The NGO
                                Dedicated To Upliftment Of Art And Artists Who
                                Need Help To Live Their Dream Of Being An Artist
                                Announcement Of These Musical Events Has Been
                                Met With Enthusiasm By Music Fans Across India.
                            </h2>
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-72  font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                            <SimpleCarousal
                                image1='/comingsoon.png'
                                image2='/comingsoon.png'
                            />
                        </div>{" "}
                        <div className='w-full border-4  border-yellow-500  mb-11 ml-96'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pastEventPage;
>>>>>>> 03cb61295e499ee7c94617bee260b6ca8cd2e485:src/pages/event.js
