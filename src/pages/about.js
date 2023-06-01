import Breadcrum from "@/components/Breadcrum";
import CoreTeamCard from "@/components/CoreTeamCard";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
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
                <div className=''>
                    <img
                        className='object-fill  h-96 w-full'
                        src='/Frame.png'
                    />
                    <Breadcrum name='About us' page='About Us' />
                </div>
                <div className='p-4 relative xl:h-auto lg:h-auto mg:h-80 sm:h-60 text-center justify-center'>
                    <h1 className='text-4xl font-bold -mt-20 '>About Us</h1>
                    <p className='text-lg mt-1 p-4'>
                        Help artist India was founded in January of 2018. It
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
                    <div className='flex justify-center'>
                        <div className='w-48 text-start'>
                            <ul className='list-disc'>
                                <li>Talent Based Events</li>
                                <li>Fund Raising Events</li>
                                <li>Compaigns / Social Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full md:mt-20 bg-[#5C5959]'>
                <div className='flex md:flex-row flex-col gap-9 p-12 m-5 '>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className='transition duration-300 ease-in-out hover:scale-110'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className=' transition duration-300 ease-in-out hover:scale-110'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className=' transition duration-300 ease-in-out hover:scale-110'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className=' transition duration-300 ease-in-out hover:scale-110'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className=' transition duration-300 ease-in-out hover:scale-110'
                        />
                    </div>
                </div>
            </div>

            <div className='mx-auto mt-20 border-2 bg-[#A17EBE] rounded-xl md:w-2/6  py-2 w-64'>
                <h1 className='text-4xl text-center font-bold'>CORE TEAM</h1>
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
        </div>
    );
};

export default about;
