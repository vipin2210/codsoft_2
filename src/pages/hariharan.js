import Breadcrum from "@/components/Breadcrum";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const hariharan = () => {
    const teams = [
        {
            photo: "/hariprofile.png",
            name: "Hari Haran",
            profession: "Indian Playback Singer",
        },
    ];
    return (
        <div>
            <Navbar />
            <div>
                <Header
                    image='/Frame.png'
                    name='Profile view'
                    page='Our Heroes'
                />

                <section className='container sm:absolute  lg:bottom-4  sm:left-11 md:top-72  mx-auto '>
                    <section className=' mx-auto'>
                        <div className=' mr-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3'>
                            <ProfileCard props={teams[0]} />
                        </div>
                    </section>
                </section>
                <div className='p-4 sm:mx-16   sm:mt-60  '>
                    <div className='  '>
                        <h1 className='text-4xl font-bold  text-start'>BIO</h1>
                        <p className='text-lg mt-1 mb-16'>
                            Padam Shri Hariharan Anantha Subramani is an Indian
                            playback bollywood singer he is bhajan and ghazal
                            singer who predominantly sings in Tamil, Hindi, and
                            Telugu. He has also sung over 15,000 notable songs
                            in 10 languages, including Malayalam, Kannada,
                            Marathi, Sinhala, and Bhojpuri. He is an established
                            ghazal singer and one of the pioneers of Indian
                            fusion music.<br></br>
                            In 2004, he was honoured with the Padma Shri by the
                            Government of India and is a two-time National Award
                            winner. Hariharan and the late Gulshan Kumar&apos;s
                            Hanuman Chalisa, recorded under the label T-Series,
                            crossed the 3-billion-view mark on YouTube making it
                            the first devotional bhajan to create such a record.
                            We are honoured and grateful that he agreed to serve
                            as our mentor for Help Artist India. his kind
                            guidelines will be followed. for the upliftment of
                            the artist.
                        </p>
                        <Link
                            href='https://en.wikipedia.org/wiki/Hariharan_(singer)'
                            className='text-blue-600 hover:underline rounded-2xl mt-5 border-2 p-2 px-8 w-fit flex gap-2 font-bold text-lg border-blue-500'
                        >
                            Go to Website <BsBoxArrowUpRight />{" "}
                        </Link>
                    </div>
                </div>
            </div>

            <div className=' '>
                <div className='text-4xl sm:mx-16 font-bold p-4  text-start '>
                    IMAGES
                </div>
                <div className='bg-[#FFD12F]'>
                    <div className='flex md:flex-row flex-col  p-4 m-5 justify-evenly '>
                        <div>
                            <img src='/profileHaiharn1.jpg' />
                        </div>
                        <div>
                            <img src='/profileHaiharn2.jpg' />
                        </div>
                        <div>
                            <img src='/profileHaiharn3.jpg' />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div h1 className='text-4xl font-bold mb-8 text-center'>
                        Hits Songs
                    </div>
                    <div className='flex flex-wrap  mb-20 gap-2  justify-evenly '>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]'
                                src='https://www.youtube.com/embed/o0ntND9OZ6I'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]'
                                src='https://www.youtube.com/embed/eFO3y_Q7i_Q'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px] '
                                src='https://www.youtube.com/embed/JZM4isXnZjQ'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hariharan;
