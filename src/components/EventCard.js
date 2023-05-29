import React from "react";
import EventCards from "../../public/EventCard.png";
import Image from "next/image";

const EventCard = () => {
    return (
        <div className='bg-transparent max-w-sm sm:max-w-[30%]   mb-4'>
            <div className=''>
                <a href='#'>
                    <Image
                        className=''
                        src={EventCards}
                        alt='EventCard'
                      
                    />
                </a>
                <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                    <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                        9
                    </p>
                    <div className='grid text-white'>
                        <span>July</span>
                        <span>2017</span>
                        <span>Sunday</span>
                    </div>
                    <div className=' w-[100%]   border-b-2 border-yellow-500 items-center mb-11'></div>
                </div>
                <a href='#'>
                    <div className=' font-bold text-2xl tracking-tight mb-1 text-white'>
                        FUNKAAR 3 & ASH’AAR
                    </div>
                </a>
                <p className='font-normal text-white mb-3 max-w-sm'>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt mus
                    porttitor tortor quis aliquet. Malesuada pellentesque ipsum
                    egestas 
                </p>
                <a
                    href='#'
                    className='text-gray-700 bg-gray-200   hover:bg-blue-600 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center '
                >
                    Read more
                    <svg
                        className='-mr-1 ml-2 h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default EventCard;
