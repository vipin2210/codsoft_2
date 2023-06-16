import Breadcrum from "@/components/Breadcrum";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const rakeshBedi = () => {
    const teams = [
        {
            photo: "/rakeshBedi.png",
            name: "Rakesh Bedi",
            profession: "Indian Actor",
        },
    ];
    return (
        <div>
            <Navbar />
            <div>
                <Header
                    image='/banner/profilebanner.jpg'
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
                            Respected Rakesh Bedi Ji, a veteran actor of stage
                            and television, spreads his charm in TV and Indian
                            cinema. In almost 150 films and several TV serials
                            in which he has acted, he has made the audience
                            laugh and cry with his acting and dramatic delivery.
                            He is a school of acting himself, and he is a great
                            writer and poet too. He is a great inspiration for
                            budding actors. His remarkable contribution to the
                            arts has to be written in golden words. We are proud
                            and blessed that he is one of our guides and mentors
                            at the Foundation, He is appointed as the
                            institution&apos;s guardian and mentor. Mr. Bedi
                            appreciates the concept of the organisation and also
                            supports the organisation for its initiative to help
                            needy artists .
                        </p>
                        <Link
                            href='https://en.wikipedia.org/wiki/Rakesh_Bedi'
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
                            <img src='/rakeshBedi1.jpg' />
                        </div>
                        <div>
                            <img src='/rakeshBedi2.jpg' />
                        </div>
                        <div>
                            <img src='/rakeshBedi3.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default rakeshBedi;
