import React from "react";
import SubscribeButton from "./SubscribeButton";
import Image from "next/image";
import someImage from "../../public/logo.png";

const Subscribe1 = () => {
    return (
        <div className=' md:flex md:flex-row  items-center  justify-center py-5 gap-5 '>
            <div className='flex  flex-row justify-center'>
                <Image src={someImage} className='hidden sm:flex ' alt='logo' />

                <div className='  pl-8 ml-8 border-l-4 border-red-500 hidden sm:flex '></div>
                <div className='text-2xl font-bold text-center '>
                    <p>Subscribe To Get Updates </p>
                    <p>& News About Us..</p>
                </div>
            </div>

            <div className=' flex flex-col items-center '>
                <div className='flex sm:flex-row flex-col w-[80%] items-center  gap-5  mb-5'>
                    <input
                        type='text'
                        className=' px-3 py-3 w-full mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50'
                        placeholder='Enter Your Email'
                    />

                    <SubscribeButton />
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

                        <div className='ml-2 text-sm font-medium text-gray-600 '>
                            <p>
                                I agree that my submitted data is being
                                collected and stored.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe1;
