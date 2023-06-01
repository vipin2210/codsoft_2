import React from "react";

const SelectArtist = () => {
    return (
        <div>
            <div className='sm:h-72 m-9 rounded-xl border border-zinc-950 bg-gray-50 bg-gradient-to-br from-neutral-50 to-rose-50'>
                <div className='sm:flex sm:flex-row grid grid-rows-2  gap-12'>
                    <div className='flex flex-col md:basis-1/3'>
                        <h1 className='font-extrabold p-2 text-3xl text-center md:text-2xl'>
                            Select Artist
                        </h1>
                        <div className=''>
                            <img
                                class='sm:h-56 sm:w-56 w-48 h-48 sm:mx-12 my-2 rounded-full  border-black border-2 '
                                src='/Artist.jpeg'
                                alt='user image'
                            />
                        </div>
                    </div>
                    <div className='basis-2/3'>
                        <div>
                            <div className='flex flex-col p-3 text-left'>
                                <div>
                                    <h1 className='font-extrabold text-3xl'>
                                        Anshu Bajaj
                                    </h1>
                                </div>
                                <div className='my-2 text-sm'>
                                    Singer Punjabi
                                </div>
                                <div className='grid grid-flow-row'>
                                    <div
                                        style={{
                                            marginRight: 20,
                                        }}
                                    >
                                        <label
                                            for='default-input'
                                            className='block mb-2 text-sm '
                                        />
                                        <textarea
                                            type='text'
                                            id='default-input'
                                            placeholder='write your message'
                                            className='w-full h-40 border border-black rounded-lg p-2  mx-3'
                                        />
                                    </div>
                                    <div className='w-36 h-8 bg-black rounded-md text-center relative -top-5 md:left-5 left-14'>
                                        <button className='text-white p-1'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectArtist;
