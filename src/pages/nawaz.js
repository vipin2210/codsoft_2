import Breadcrum from "@/components/Breadcrum";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const nawaz = () => {
    const teams = [
        {
            photo: "/nawaz.png",
            name: "Nawazuddin Siddiqui",
            profession: "Indian Actor",
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
                            Nawazuddin Siddiqui is an acclaimed Indian actor who
                            has gained widespread recognition for his versatile
                            and powerful performances in both mainstream and
                            independent films. He was born on May 19, 1974, in
                            Budhana, a small town in the Muzaffarnagar district
                            of Uttar Pradesh, India. Siddiqui was born into a
                            modest family and grew up in a farming community. He
                            faced financial difficulties during his childhood
                            and pursued various odd jobs to support himself. His
                            interest in acting developed during his college
                            years, and he went on to graduate with a Bachelor of
                            Science degree in Chemistry from Gurukul Kangri
                            Vishwavidyalaya in Haridwar. His remarkable
                            contribution to the arts has to be written in golden
                            words. We are proud and blessed that he is one of
                            our guides and mentors at the Foundation, He is
                            appointed as the institution's guardian and mentor.
                            Mr. Siddiqui appreciates the concept of the
                            organisation and also supports the organisation for
                            its initiative to help needy artists .
                        </p>
                        <Link
                            href='https://en.wikipedia.org/wiki/Nawazuddin_Siddiqui'
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
                            <img src='/nawaz1.jpg' />
                        </div>
                        <div>
                            <img src='/nawaz2.jpg' />
                        </div>
                        <div>
                            <img src='/nawaz3.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nawaz;
