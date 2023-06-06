import Link from "next/link";
import React from "react";

function Button({ props }) {
   
    return (
        <div className='mb-36 flex justify-center '>
            <div
                className={` hidden border-2 rounded-xl  p-1 md:rounded-2xl border-gray-300  bg-white sm:w-1/2  sm:flex sm:flex-row  justify-center md:text-sm   `}
            >
                <Link
                    href='/Events'
                    className={` inline-flex items-center transition-all ease-in duration-75 justify-center p-3  mr-4   text-gray-900 rounded-lg md:text-base group bg-gradient-to-br hover:bg-red-600 hover:text-white  focus:bg-red-600  w-full focus:text-white text-lg font-bold ${props}`}
                >
                    UP COMING
                </Link>
                <Link
                    href='/pastevents'
                    className='inline-flex items-center transition-all ease-in
                    duration-75 justify-center p-3 text-lg text-gray-900
                    md:text-base rounded-lg group bg-gradient-to-br
                    hover:text-white hover:bg-red-600 focus:bg-red-600 w-full
                    focus:text-white font-bold '
                >
                    PAST EVENTS
                </Link>
            </div>
            <div className={`sm:hidden bg-white rounded-lg  `}>
                <Link
                    href='/event'
                    className={` inline-flex items-center transition-all ease-in
                    duration-75 justify-center p-3 text-gray-900 rounded-lg 
                    md:text-base group bg-gradient-to-br hover:bg-red-600
                    hover:text-white focus:bg-red-600 w-full focus:text-white
                    text-lg font-bold mb-4 ${props}`}
                >
                    {" "}
                    UP COMING
                </Link>

                <Link
                    href='/pastevents'
                    className='inline-flex items-center transition-all eease-in duration-75  justify-center p-3  text-lg text-gray-900 md:text-base rounded-lg group bg-gradient-to-br  hover:text-white hover:bg-red-600  focus:bg-red-600 w-full  focus:text-white font-bold '
                >
                    PAST EVENTS
                </Link>
            </div>
        </div>
    );
}

export default Button;
