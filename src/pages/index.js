import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
import EventCard from "@/components/EventCard";
import PastEvent from "@/components/PastEvent";
import FilterArtist from "@/components/FilterArtist";
import SelectArtist from "@/components/SelectArtist";

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
                                        <source src='/HeroVideo.mp4' type='video/mp4' />
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

                                <div className='relative  inset-0 py-8 px-4 mx-auto bg-black opacity-80 text-center lg:py-16 lg:px-12 '>
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
                                    <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none uppercase text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                                        Small{" "}
                                        <span className='text-red-600'>Donation</span>{" "}
                                        Can <br /> Change Artist Life
                                    </h1>
                                    <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
                                        Lorem ipsum dolor sit amet consectetur. Duis at{" "}
                                        <br />
                                        consectetur pellentesque euismod. Pulvinar.
                                    </p>
                                    <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
                                        <a
                                            href='#'
                                            className='inline-flex justify-center items-center py-2 px-7 text-base font-medium text-center bg-red-600 text-white rounded-lg border  hover:bg-black focus:ring-2 focus:ring-gray-100  '
                                        >
                                            Donate
                                        </a>
                                    </div>
                                    <div className=' flex flex-row justify-center '>
                                        <Subscribe />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className=''>
                            <div className='bg-white  relative min-w-full'>
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

                                        <h2 className='text-left text-gray-500 xl:text-xl mt-4 '>
                                            Help artist India was founded in January of
                                            2018. It acknowledges and harbour the
                                            veiled, unidentified artists, availing
                                            nothing but facilitating the unrevealed
                                            talents inhabiting our society. This NGO
                                            dreams of re- establishing the sphere of
                                            talents and proclaiming the worth of any
                                            artist who behold the talent and brew it for
                                            the audience. Artists can find this
                                            organization extremely helpful and
                                            facilitating. Above all saving the Heritage
                                            of the India, what makes someone inspiring,
                                            is the ability to keep preserving keeping
                                            the zeal alive even when the circumstances
                                            are not favourable. The reason can be
                                            health, old age, finance, or being out of
                                            the main stream. Talent Based Events Fund
                                            Raising Events Compaigns / Social Work
                                        </h2>
                                    </div>

                                    <div>
                                        <img
                                            src='/Section2.png'
                                            className='w-full mx-auto mt-6 sm:w-10/12 lg:w-full'
                                        />
                                    </div>
                                </section>
                            </div>
                        </section>

                        {/* Section  */}

                        {/* Featured Events */}

                        <section className='bg-gray-800 py-8 px-4 '>
                            <h1 className=' text-3xl md:text-6xl flex flex-col font-bold text-left text-white py-8 md:ml-10'>
                                Featured Events
                            </h1>
                            <div className='flex flex-wrap  justify-center  gap-3'>
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </div>

                        </section>

                        {/* Past Event Section  */}
                        <section className='bg-gray-800 py-8 px-4 '>
                            <h1 className='text-3xl md:text-6xl flex flex-col font-bold text-left text-white py-8 md:ml-10'>
                                Past Events
                            </h1>
                            <div className='flex flex-wrap justify-center overflow-hidden gap-5'>
                                <PastEvent />
                                <PastEvent />
                                <PastEvent />
                            </div>
                            <div className='border-4 border-yellow-600 mt-4'></div>
                        </section>
                        {/* Subscribe  */}
                        <section>
                            <Subscribe1 />
                        </section>
            </div>
        </main>
        // <div>
        //     {/* <FilterArtist /> */}
        //     <SelectArtist />

        // </div>
    );


}
