import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
import EventCard from "@/components/EventCard";

import PastEvent from "@/components/PastEvent";
import Link from "next/link";

import ScrollTop from "@/components/ScrollTop";
import Message from "@/components/Message";

const events = [
    {
        poster: "/EventUpcoming1.png",
        date: 11,
        month: "june",
        year: 2023,
        day: "Sunday",
        name: "Live in Concert",
        desc: "Rumaniyat a musical night with Padma Shri Hariharan ,witness the mystic performance of living legend at F Bar and Lounge Noida BOOK YOUR TABLES NOW HURRY !!",
        link: "https://in.bookmyshow.com/events/rumaniyat-hariharan/ET00360262?webview=true",
    },
    {
        poster: "/EventUpcoming2.png",
        date: 14,
        month: "july",
        year: 2023,
        day: "Friday",
        name: "Shaam-e-Ghazal",
        desc: " ",
        link: "/",
    },
    {
        poster: "/Funkaar3banner.png",
        date: "00",
        month: "July",
        year: 2017,
        day: "Sunday",
        name: "FUNKAAR 3 & ASH'AAR",
        desc: "We all love music; some listen to it, and some sing. If You Have A Singing Talent In You, Help Artist India by Giving You A Platform To Perform.",
        link: "/",
    },
];

const pastevents = [
    {
        poster: "/pastevent1.png",
        name: "RUMANIYAT",
        title: "FEAT. ASHU BAJAJ",
        month: "May",
        year: "2023",
        day: "Thrusday",
        date: "18",
        link: "/",
    },
    {
        poster: "/FUNKAAR2.png",
        name: "FUNKAAR 2",
        title: "FUNKAAR 2",
        month: "Feb ",
        year: "2023",
        day: "Sunday",
        date: "26",
        link: "/",
    },
    {
        poster: "/fUNKAAR1.png",
        name: "FUNKAAR 1",
        title: "FUNKAAR 1",
        month: "Jan",
        year: "2023",
        day: "Saturday",
        date: "14",
        link: "/",
    },
];
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <main>
            <Navbar />
            <div>
                {/* Hero Section */}
                <section className='relative bg-cover'>
                    <div className='bg-hero-section bg-no-repeat   '>
                        <div className=''>
                            <video
                                autoPlay
                                loop
                                muted
                                className='absolute inset-0 aspect-video   sm:flex hidden  '
                            >
                                <source
                                    src='/HeroVideo1.mp4'
                                    type='video/mp4'
                                />
                            </video>
                            <video
                                autoPlay
                                loop
                                muted
                                className='absolute sm:hidden '
                            >
                                <source
                                    src='/HeroVideoMobile.mp4'
                                    type='video/mp4'
                                />
                            </video>
                        </div>

                        <div className='relative  inset-0 py-8 px-4 mx-auto  backdrop-brightness-50 text-center  lg:py-16 lg:px-12 '>
                            <div className='inline-flex justify-between items-center mb-3     '>
                                <Image
                                    src='/logo.png'
                                    width={150}
                                    height={150}
                                    alt='logo'
                                />
                            </div>
                            <p className='text-white '>
                                Art is India ,Inida is Divine
                            </p>
                            <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none uppercase text-white  md:text-5xl lg:text-6xl '>
                                Small{" "}
                                <span className='text-red-600'>Donation </span>
                                Can <br /> Change Artist Life
                            </h1>
                            <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 '>
                                Help artist India was founded in January of
                                2018. It acknowledges and harbour the veiled,
                                unidentified artists, availing nothing but
                                facilitating the unrevealed talents inhabiting
                                our society.
                            </p>
                            <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
                                <Link
                                    href='/donation'
                                    className='  py-2 px-7 text-base font-medium text-center  text-white rounded-[8px] border  hover:bg-black focus:ring-2 focus:ring-gray-100  '
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #650000 0%, #FF0000 100%)",

                                        border: "2px solid #FFFFFF",
                                    }}
                                >
                                    Donate
                                </Link>
                            </div>
                            <div className=' flex flex-row justify-center '>
                                <Subscribe />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className=''>
                    <div className='bg-white p-4 relative min-w-full'>
                        <section className='container items-center  pb-12 mx-auto mt-20 lg:flex md:px-8'>
                            <div className='flex flex-col lg:w-3/4  '>
                                <div className='flex flex-row gap-2 ml-16'>
                                    <div className='border border-b-4 mb-3 border-black md:w-28 w-20  rounded-full'></div>
                                    <span className='border border-b-4 mb-3  border-black w-2 rounded-full'></span>
                                </div>

                                <h1 className='relative flex flex-col text-2xl   font-extrabold text-left text-black'>
                                    About Us
                                </h1>
                                <div className='border border-b-4 mt-3 border-black md:w-48  w-32 rounded-full'></div>

                                <h1 className='relative flex flex-col  text-4xl md:text-6xl   font-extrabold text-left text-black'>
                                    Help Artist India
                                </h1>

                                <h2 className='text-left text-gray-500 xl:text-xl mt-4 lg:mr-64 '>
                                    Help Artist India was founded in January of
                                    2018. It acknowledges and harbor the veiled,
                                    unidentified artists, availing nothing but
                                    facilitating the unrevealed talents
                                    inhabiting our society. This NGO dreams of
                                    re- establishing the sphere of talents and
                                    proclaiming the worth of any artist who
                                    behold the talent and brew it for the
                                    audience. Artists can find this organization
                                    extremely helpful and facilitating. Above
                                    all saving the Heritage of the India, what
                                    makes someone inspiring, keeping the zeal
                                    alive even when the circumstances are not
                                    favorable. The reason can be health, old
                                    age, finance, or being out of the main
                                    stream.
                                    <ul className='list-disc ml-8'>
                                        <li>Talent Based Events</li>
                                        <li>Fund Raising Events</li>
                                        <li>Compaigns / Social Work</li>
                                    </ul>
                                </h2>

                                <div className=' my-4   '>
                                    <Link
                                        href='/about'
                                        className='items-center py-2 px-7 text-base font-medium text-center bg-red-600 text-white rounded-lg border  hover:bg-black focus:ring-2 focus:ring-gray-100  '
                                    >
                                        MORE INFO
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img
                                    src='/home/aboutSection.png'
                                    className='w-full mx-auto  mt-6 sm:w-10/12 lg:w-full'
                                    alt='Section2'
                                />
                            </div>
                        </section>
                    </div>
                </section>

                {/* Section  */}

                {/* Featured Events */}

                <section className='bg-[#000215] py-8 px-4 '>
                    <h1 className=' text-3xl md:text-6xl flex flex-col font-bold text-left text-white py-8 md:ml-10'>
                        Featured Events
                    </h1>
                    <div className='flex flex-wrap  justify-center  gap-3'>
                        {events.map((item, i) => (
                            <EventCard props={item} key={i} />
                        ))}
                    </div>
                </section>

                {/* Past Event Section  */}
                <section className='bg-[#000215] py-8 px-4 '>
                    <h1 className='text-3xl md:text-6xl flex flex-col font-bold text-left text-white py-8 md:ml-10'>
                        Past Events
                    </h1>
                    <div className='flex flex-wrap justify-center overflow-hidden gap-5'>
                        {pastevents.map((item, i) => (
                            <PastEvent props={item} key={i} />
                        ))}
                    </div>
                    <div className='border-4 border-yellow-600 mt-4'></div>
                </section>

                <section>
                    <Message />
                </section>
                <ScrollTop />
            </div>
        </main>
    );
}
