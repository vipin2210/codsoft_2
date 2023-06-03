import React from "react";
import SubscribeButton from "./SubscribeButton";

const Subscribe = () => {
    return (
        <div className='p-8 m-5 py-10  bg-white  max-w-4xl  rounded-2xl shadow-2xl  md:flex md:flex-row md:px-7 md:overflow-hidden grid gap-3 md:drop-shadow-xl md:gap-5 md:justify-evenly md:justify-items-center md:place-items-center md:items-center md:content-center'>
            <input
                type='text'
                name='name'
                id='name'
                className='w-full px-4 py-3 border-2  rounded-lg focus:ring focus:ring-blue-500 focus:outline-none h-full  border-gray-500'
                placeholder='Name'
            />
            <input
                type='text'
                name='email'
                id='email'
                className='w-full px-4 py-3 border-2  rounded-lg focus:ring focus:ring-blue-500 focus:outline-none h-full border-gray-500'
                placeholder='Email address'
            />
            <select className='select select-bordered  w-full px-4 py-3  border-2  rounded-lg focus:ring focus:ring-blue-500 focus:outline-none md:h-full border-gray-900'>
                <option disabled={true} defaultValue='Category'>
                    Category
                </option>
                <option>Singer</option>
                <option>Dancer</option>
            </select>
            <SubscribeButton />
        </div>
    );
};

export default Subscribe;
