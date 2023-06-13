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
                    name='Past Event'
                    page='Past event'
                />

                <div className='relative container -mt-14 z-20 mx-auto p-16 '>
                    <div className='grid grid-cols-2  gap-x-5'>
                        <div className=''>
                            <a href='#'>
                                <img
                                    className=''
                                    src='/dharoverustav.png'
                                    alt='hariharan'
                                />
                            </a>
                            <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                                <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                    12
                                </p>
                                <div className='grid text-white'>
                                    <span>DECEMBER</span>
                                    <span>2019</span>
                                    <span>THRUSDAY</span>
                                </div>
                                {/* <div className=' w-[100%]   border-b-2 border-yellow-500 items-center mb-11'></div> */}
                            </div>
                        </div>
                        <div className='text-white -ml-32'>
                            <h1 className='text-6xl font-bold '>
                                Dharohar Utsav
                            </h1>
                            <h2 className='text-lg mt-10'>
                                Rumaniyat a musical night with Padma Shri
                                Hariharan ,witness the mystic performance of
                                living legend at F Bar and Lounge Noida BOOK
                                YOUR TABLES NOW HURRY !!
                            </h2>
                            <h2 className='text-lg my-8'>
                                The Ministry of Culture, Government of India, in
                                collaboration with the &quot;Swar Dharohar
                                Foundation,&quot; inaugurated the three-day
                                &quot;Swar Dharohar Festival&quot; under
                                Kalanjali. &quot;Swar Dharohar Festival&quot; is
                                a music, art, and literature festival to
                                showcase the iconic art and culture of India and
                                the rich literary art and heritage of Indian
                                states. The Swar Dharohar festival was
                                inaugurated today by Chief Guest Sh. Mehtab Ali
                                (sitar player) and Pt. Lalit Prasad (classical
                                vocal). On the first day, classical
                                performances, ghazals, Kavi Sammelan, Mushaira,
                                and Sufi performances were organised. Ghazal was
                                performed by Sh. Diwakar Meena; Sh. Hamsar Hayat
                                and Athar Hayat performed Sufi music. on
                                December 3rd and 4th, 2022, at the Central
                                Vista, India Gate, New Delhi, Delhi. Swar
                                Dharohar Utsav started in the morning with
                                Ragaas, and many celebrities performed. In this
                                programme, upcoming local artists will perform
                                with legends on the same platform to showcase
                                their talents. National as well as local poets
                                will exhibit their artistry through Kavi
                                Sammelan.
                            </h2>
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-72 hidden font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                        </div>{" "}
                        <div className='w-full border-4  border-yellow-500  mb-11 ml-96'></div>
                    </div>

                    {/* pastevent 2  from right to left*/}
                    <div className='mt-10 grid grid-cols-2 '>
                        <div className='text-white '>
                            <h1 className='text-6xl font-bold'>
                                FUNKAAR EVENT
                            </h1>
                            <h2 className='text-lg mt-10'>
                                We all love music; some listen to it, and some
                                sing. If You Have A Singing Talent In You, Help
                                Artist India is Giving You A Platform To
                                Perform. Ashok Rajput, Director and Founder at
                                Help Artist India, has a vision of giving a
                                chance to artists of all forms to perform on a
                                stage called Funkaar. It is a series of events
                                where all the artists like singers, Writers,
                                Poets, Dancers, Storytellers, Players, Musicians
                                and Rural Musicians can showcase their talents
                                on stage across India. We organize these events
                                all over the country. under the impression of
                                senior artists and our Patrons.
                            </h2>
                            <h2 className='text-lg my-8'></h2>
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-60  hidden font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                            <SimpleCarousal
                                image1='/pastevent.png'
                                image2='/pastevent4.png'
                            />
                        </div>
                        <div className='ml-36'>
                            <div className=''>
                                <a href='#'>
                                    <img
                                        className=''
                                        src='/fUNKAAR.png'
                                        alt='ghazal'
                                    />
                                </a>
                                <div className='flex flex-row  gap-5 mt-4 max-w-sm'>
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
                                    src='/bANNER1.png'
                                    alt='funkaar3'
                                />
                            </a>
                            <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                                <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                    26
                                </p>
                                <div className='grid text-white'>
                                    <span>February</span>
                                    <span>2023</span>
                                    <span>SUNDAY</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white -ml-32'>
                            <h1 className='text-6xl font-bold '>
                                FUNKAAR - II EVENT
                            </h1>
                            <h2 className='text-lg mt-10'>
                                We all love music; some listen to it, and some
                                sing. If You Have A Singing Talent In You, Help
                                Artist India is Giving You A Platform To
                                Perform. Ashok Rajput, Director and Founder at
                                Help Artist India, has a vision of giving a
                                chance to artists of all forms to perform on a
                                stage called Funkaar. It is a series of events
                                where all the artists like singers, Writers,
                                Poets, Dancers, Storytellers, Players, Musicians
                                and Rural Musicians can showcase their talents
                                on stage across India. We organize these events
                                all over the country. under the impression of
                                senior artists and our Patrons.
                            </h2>
                            {/* <h2 className='text-lg my-8'>
                                Help Artist India Is All Set For Major Musical
                                Events 2023 With... Big Artists Of The Industry
                                ,It Will Be All For Fundraising For The NGO
                                Dedicated To Upliftment Of Art And Artists Who
                                Need Help To Live Their Dream Of Being An Artist
                                Announcement Of These Musical Events Has Been
                                Met With Enthusiasm By Music Fans Across India.
                            </h2> */}
                            <button className=' mt-8 lg:text-2xl sm:text-xl p-4 px-72 hidden font-bold border-4 rounded-xl border-w  mb-8 border-blue-400 text-blue-300 '>
                                Book Table
                            </button>
                            <SimpleCarousal
                                image1='/serviceImg1.png'
                                image2='/serviceImg2.png'
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
