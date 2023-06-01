import React from "react";
import Image from "next/image";
import Link from "next/link";

const PastEvent = ({ props }) => {
    const { poster, name, title, month, year, day, date, link } = props;
    return (
        <div className='mb-5 lg:max-w-sm sm:max-w-[30%]'>
            <img src={poster} alt={poster} />
            <div className='bg-neutral-800 p-3 '>
                <h1 className='lg:text-3xl md:text-2xl  font-bold text-white'>
                    {name}
                </h1>
                <h1 className='md:text-xl  text-amber-500'>{title}</h1>
                <div className='flex mt-2 text-sm gap-3'>
                    <Link href={link}>
                        {" "}
                        <button className=' text-xs  bg-amber-300 hover:bg-yellow-500  h-8'>
                            READ MORE
                        </button>
                    </Link>

                    <div className='font-bold  text-white'>
                        <h3>
                            {month} {year}
                        </h3>
                        <h3>
                            {day} {date}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastEvent;
