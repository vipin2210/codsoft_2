import React from "react";
import SubscribeButton from "./SubscribeButton";
import Image from "next/image";
import someImage from "../../public/subsLogo.png";

const Subscribe1 = () => {
    return (
        <div className='  py-4 items-center text-white   bg-[#000215]'>
            <div className='mt-8 md:flex md:flex-row justify-center  mx-4 gap-5'>
                <div className='flex  flex-row justify-center mb-4 '>
                    <Image
                        src={someImage}
                        className='hidden sm:flex'
                        alt='logo'
                    />

                    <div className='  pl-8 ml-8 border-l-4 border-red-500 hidden sm:flex '></div>
                    <div className='text-2xl text-center sm:text-start font-bold '>
                        <p>Subscribe To Get Updates </p>
                        <p>& News About Us..</p>
                    </div>
                </div>

                <div className=' flex flex-col items-center  text-black hover:text-white '>
                    <div className='flex sm:flex-row flex-col items-center  gap-5  mb-5'>
                        <input
                            type='text'
                            className=' px-3 py-4 w-full  text-xl placeholder-gray-600 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50'
                            placeholder='Enter Your Email'
                        />

                        <button className='btn gap-2 p-4 w-[80%]   bg-[#FF0000]  text-white hover:bg-neutral-800  rounded-md md:h-full flex flex-row justify-center '>
                            <svg
                                viewBox='0 0 448 512'
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6'
                            >
                                <path
                                    d='M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 0 1 5.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z'
                                    fill='#000000'
                                    className='fill-white '
                                ></path>
                            </svg>
                            Subscribe
                        </button>
                    </div>
                    <div>
                        {/* Term */}
                        <div className='flex '>
                            <div className='flex items-center h-5 '>
                                <input
                                    id='helper-checkbox'
                                    aria-describedby='helper-checkbox-text'
                                    type='checkbox'
                                    value=''
                                    className='w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                />
                            </div>

                            <div className='ml-2 text-sm font-medium text-gray-200 '>
                                <p>
                                    I agree that my submitted data is being
                                    collected and stored.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe1;
