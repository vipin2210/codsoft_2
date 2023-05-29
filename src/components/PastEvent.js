import React from "react";
import PastImg from "../../public/PastEvent.png";
import Image from "next/image";

const PastEvent = () => {
    return (
        <div className='mb-5 lg:max-w-sm sm:max-w-[30%]'>
            <Image src={PastImg} alt='pastimg' />
            <div className='bg-neutral-800        p-3 '>
                <h1 className='lg:text-3xl md:text-2xl  font-bold text-white'>FUNKAAR 2</h1>
                <h1 className='md:text-xl  text-amber-500'>FUNKAAR 2</h1>
                <div className='flex mt-2 text-sm gap-3'>
                    <button className=' text-xs  bg-amber-300 hover:bg-yellow-500  h-8'>
                        READ MORE
                    </button>

                    <div className='font-bold  text-white'>
                        <h3>JULY 2017</h3>
                        <h3>SUNDAY 9</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastEvent;
