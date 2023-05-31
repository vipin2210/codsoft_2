import Breadcrum from "@/components/Breadcrum";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className=''>
                    <img
                        className='object-fill  h-80 w-full'
                        src='/Frame.png'
                    />
                    <Breadcrum name={"About Us"} page={"About us"} />
                </div>
                <div className=' container mx-auto  flex flex-row grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <img
                        className='xl:-mt-40 lg:mt-0  md:mt-0 sm:-mt-60 sm:mx-auto lg:h-full md:h-11/12  sm:h-96 sm:w-11/12'
                        src='/AboutImage1.png'
                    />
                    <div className='p-4 relative xl:h-auto lg:h-auto mg:h-80 sm:h-60'>
                        <h1 className='text-4xl font-bold '>About Us</h1>
                        <p className='text-lg mt-2'>
                            We are aiming at the art and artists of India. We
                            are trying to uplift and save the heritage of all
                            art forms in the nation; we are dedicated to the new
                            art forms and provide them with a stage to showcase
                            their talent. We are going places, across India, to
                            find out the artists of all performing arts to be
                            shown to the world.
                        </p>
                        <ul className='text-lg absolute xl:bottom-40 lg:bottom-20 md:-bottom-28 sm:bottom-0'>
                            <li className='inline-block '>
                                Instrument distribution
                            </li>
                            <li className='inline-block ml-20 '>
                                Gurus/ coach
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-20 border-2 rounded-xl w-4/6  py-2 border-neutral-950'>
                <h1 className='text-4xl text-center font-bold'>CORE TEAM</h1>
            </div>

            <section className='container  mx-auto '>
                <section class='relative mx-auto py-20 overflow-hidden bg-white'>
                    <div class='relative px-16 mx-auto max-w-7xl'>
                        <div class='grid w-full grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3'>
                            <div class='flex flex-col items-center justify-center col-span-1'>
                                <div class='relative p-5'>
                                    <div class='absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-gray-300'></div>
                                    <img
                                        class='relative z-20 w-full rounded-full'
                                        src='/ashok.png'
                                    />
                                </div>

                                <div class='z-50 space-y-2 text-center -mt-4'>
                                    <div class='space-y-1 text-lg font-medium leading-6'>
                                        <h3 className='rounded-full bg-violet-900 text-lg text-white px-14 py-1 '>
                                            Ashok Rajput
                                        </h3>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>

                            <div class='flex flex-col items-center justify-center col-span-1'>
                                <div class='relative p-5'>
                                    <div class='absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full  bg-gray-300'></div>
                                    <img
                                        class='relative z-20 w-44 rounded-full'
                                        src='/taruna.png'
                                    />
                                </div>
                                <div class=' z-50 space-y-2 text-center -mt-4'>
                                    <div class='space-y-1 text-lg font-medium leading-6'>
                                        <h3 className='rounded-full bg-violet-900 text-lg text-white px-14 py-1 '>
                                            Taruna Salhan
                                        </h3>
                                        <p>Director</p>
                                    </div>
                                </div>
                            </div>

                            <div class='flex flex-col items-center justify-center col-span-1'>
                                <div class='relative p-5'>
                                    <div class='absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-gray-300'></div>
                                    <img
                                        class='relative z-20 rounded-full '
                                        src='/Saira.png'
                                    />
                                </div>
                                <div class='z-50 space-y-2 text-center -mt-4'>
                                    <div class='space-y-1 text-lg font-medium leading-6'>
                                        <h3 className='rounded-full bg-violet-900 text-lg text-white px-14 py-1'>
                                            Saira Qureshi
                                        </h3>
                                        <p>Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default about;
