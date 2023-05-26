import React from "react";
import SubscribeButton from "./SubscribeButton";

const Subscribe = () => {
    return(
    <div
        className='relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7 xl:w-max xl:h-fit xl:rounded-2xl xl:border-b-2 xl:shadow-2xl xl:relative xl:flex xl:flex-row xl:px-7 xl:overflow-hidden xl:drop-shadow-xl xl:gap-5 xl:justify-evenly xl:justify-items-center xl:place-items-center xl:items-center xl:content-center tails-selected-element'
        data-rounded='rounded-lg'
        data-rounded-max='rounded-full'
        contenteditable='true'
    >
        <input
            type='text'
            name='name'
            id='name'
            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none xl:h-full xl:border-gray-500'
            data-rounded='rounded-lg'
            data-primary='blue-500'
            placeholder='Name'
        />
        <input
            type='text'
            name='email'
            id='email'
            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none xl:h-full xl:border-gray-500'
            data-rounded='rounded-lg'
            data-primary='blue-500'
            placeholder='Email address'
        />
        <select className='select select-bordered w-full max-w-xs px-4 py-3  border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none xl:h-full xl:border-gray-500'>
            <option disabled='true' selected=''>
                Category
            </option>
            <option>Singer</option>
            <option>Dancer</option>
        </select>
        <SubscribeButton />
    </div>);
};

export default Subscribe;
