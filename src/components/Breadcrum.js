import React from "react";

const Breadcrum = ({ name, page }) => {
    return (
        <div className='relative bottom-64 text-center'>
            <h1 className='  text-6xl font-bold text-white '>{name}</h1>
            <div className='flex items-center justify-center gap-2 text-white'>
                <div>
                    <p className='text-red-600 text-2xl'>Home</p>
                </div>
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='14'
                        id='arrow'
                    >
                        <path
                            fill='none'
                            fill-rule='evenodd'
                            stroke='#fff'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1'
                            d='M1 7h16M11 1l6 6-6 6'
                        ></path>
                    </svg>
                </div>
                <div>
                    <p>
                        <a href='#'>{page}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrum;
