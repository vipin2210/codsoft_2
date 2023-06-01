import ArtistCard from "@/components/ArtistCard";
import Breadcrum from "@/components/Breadcrum";
import Navbar from "@/components/Navbar";
import SelectArtist from "@/components/SelectArtist";
import React from "react";

const donation = () => {
    return (
        <div>
            <Navbar />
            <div className=''>
                <img
                    className='object-fill  h-96 w-full'
                    src='/Frame.png'
                    alt='Frame'
                />

                <Breadcrum name='Donation' page='Donation' />
            </div>

            <div className='relative h-64  border bottom-56 md:mx-48 backdrop-blur-md rounded-2xl text-center'>
                <h1 className='text-center text-3xl font-bold  md:text-white text-black p-4'>
                    DONATION
                </h1>
                <div className='md:text-white text-black'>
                    “We can’t help every Artist we meet, but…Everyone can help
                    at least one Artist”
                </div>
                <SelectArtist />
            </div>

            <div className=' grid  justify-center   md:flex  md:justify-evenly'>
                <div className=' max-w-lg text-center'>
                    <div className='flex gap-5 justify-center'>
                        <h1 className='text-5xl  mb-4'>Donation</h1>
                        <img src='/Donation Icon 2.png' alt='donationIcons' />
                    </div>

                    <p className='text-2xl mx-4 '>
                        “It's not how much we give but how much love we put into
                        giving.” <br /> You’r small contribution can make BIG
                        changes{" "}
                    </p>
                </div>
                <div className=' grid grid-rows-4 '>
                    <div className=' grid grid-cols-3 justify-center m-4 gap-1 md:gap-5'>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900  focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 200
                        </button>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 500
                        </button>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 1000
                        </button>
                    </div>
                    <div className='  grid grid-cols-3 justify-center m-4 gap-1 md:gap-5'>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 3000
                        </button>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 5000
                        </button>
                        <button
                            type='button'
                            class='inline-block rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 focus:bg-green-400 '
                            data-te-ripple-init
                        >
                            ₹ 10000
                        </button>
                    </div>

                    <div>
                        <input
                            type='text'
                            placeholder='₹ Enter other Amount'
                            className='input input-bordered mx-4 p-2 border-2 w-96 bg-neutral-100'
                        />
                    </div>
                    <button
                        type='button'
                        className='text-gray-900 mx-4 bg-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5  text-center items-center mr-2 mb-2'
                    >
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default donation;
