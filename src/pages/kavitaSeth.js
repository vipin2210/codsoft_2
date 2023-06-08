import Breadcrum from "@/components/Breadcrum";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const kavitaSeth = () => {
    const teams = [
        {
            photo: "/kavitaa.png",
            name: "Kavita Seth",
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
                            Kavita Seth is an Indian singer. She is most known
                            as a playback singer in Hindi cinema as well as a
                            performer of ghazals and Sufi Her journey towards
                            music is very soulful and beautiful; her mystic
                            melodies are treats to the body, mind, and soul,
                            just as her Sufi singing is just a class apart. She
                            leads a Sufi musical group, Karwaan Group. She was
                            born in Bareilly, Uttar Pradesh, a middle class
                            family of a bank officer.She won awards for her
                            contributions to music, and above all, she is a very
                            honest and kind human being who is very supportive.
                            During the lockdown in the country, she helped the
                            artists working as musicians. By all means, we are
                            proud and feel blessed that she is with us as our
                            mentor for Help Artist India. We is thankful to the
                            legend.
                        </p>
                        <Link
                            href='https://en.wikipedia.org/wiki/Kavita_Seth'
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
                            <img src='/kavita1.jpg' />
                        </div>
                        <div>
                            <img src='/kavita2.jpg' />
                        </div>
                        <div>
                            <img src='/kavita3.jpg' />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div h1 className='text-4xl font-bold mb-8 text-center'>
                        Hits Songs
                    </div>
                    {/*           className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]' */}
                    <div className='flex flex-wrap  mb-20 gap-2  justify-evenly '>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]'
                                src='https://www.youtube.com/embed/jY8mAWdQFOA'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]'
                                src='https://www.youtube.com/embed/fSS_R91Nimw'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div>
                            <iframe
                                className='w-[386px] h-[224px] sm:w-[286] sm:h-[186] lg:w-[386px] lg:h-[224px]'
                                src='https://www.youtube.com/embed/w74c6Wnsz8g'
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

export default kavitaSeth;
