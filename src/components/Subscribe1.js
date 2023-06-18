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
                            className=' px-3 py-4 w-full  text-xl placeholder-gray-600 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50'
                            placeholder='Enter Your Email'
                        />

                        <button className='btn gap-2 p-4 w-[80%]   bg-[#FF0000]  text-white hover:bg-neutral-800  rounded-md md:h-full flex flex-row justify-center '>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M20.7936 16.4944C20.2733 15.5981 19.4999 13.0622 19.4999 9.75C19.4999 7.76088 18.7097 5.85322 17.3032 4.4467C15.8967 3.04018 13.989 2.25 11.9999 2.25C10.0108 2.25 8.10311 3.04018 6.69659 4.4467C5.29007 5.85322 4.49989 7.76088 4.49989 9.75C4.49989 13.0631 3.72551 15.5981 3.2052 16.4944C3.07233 16.7222 3.00189 16.9811 3.00099 17.2449C3.00008 17.5086 3.06874 17.768 3.20005 17.9967C3.33135 18.2255 3.52065 18.4156 3.74886 18.5478C3.97708 18.6801 4.23613 18.7498 4.49989 18.75H8.32583C8.49886 19.5967 8.95904 20.3577 9.62852 20.9042C10.298 21.4507 11.1357 21.7492 11.9999 21.7492C12.8641 21.7492 13.7018 21.4507 14.3713 20.9042C15.0407 20.3577 15.5009 19.5967 15.674 18.75H19.4999C19.7636 18.7496 20.0225 18.6798 20.2506 18.5475C20.4787 18.4151 20.6678 18.225 20.799 17.9963C20.9302 17.7676 20.9988 17.5083 20.9979 17.2446C20.9969 16.9809 20.9265 16.7222 20.7936 16.4944ZM11.9999 20.25C11.5347 20.2499 11.081 20.1055 10.7013 19.8369C10.3215 19.5683 10.0343 19.1886 9.87927 18.75H14.1205C13.9655 19.1886 13.6783 19.5683 13.2985 19.8369C12.9188 20.1055 12.4651 20.2499 11.9999 20.25ZM4.49989 17.25C5.22177 16.0087 5.99989 13.1325 5.99989 9.75C5.99989 8.1587 6.63203 6.63258 7.75725 5.50736C8.88247 4.38214 10.4086 3.75 11.9999 3.75C13.5912 3.75 15.1173 4.38214 16.2425 5.50736C17.3678 6.63258 17.9999 8.1587 17.9999 9.75C17.9999 13.1297 18.7761 16.0059 19.4999 17.25H4.49989Z'
                                    fill='white'
                                />
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
                                    className='w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 '
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
