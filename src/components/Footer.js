import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        // max-w-screen-xl
        <div>
            <footer className='  bg-[#353535]  w-full text-white'>
                <div className='flex flex-col  '>
                    <div className='mx-auto w-full  p-4 py-6 lg:py-8 bg-[#222423] '>
                        <div className='md:flex md:justify-between'>
                            <div className='mb-6 md:mb-0 '>
                                <div className='mb-6 '>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap  mb-5'>
                                        HELPARTISTINDIA
                                    </h2>
                                    <p className=' '>
                                        Help artist India was founded in January
                                        <br />
                                        of 2018. It acknowledges and harbour the
                                        veiled,
                                        <br /> unidentified artists, availing
                                        nothing <br />
                                        but facilitating the unrevealed talents
                                        inhabiting our society.
                                    </p>
                                </div>
                                <div>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap  mb-5'>
                                        OPENING HOURS
                                    </h2>
                                </div>
                                <div className='text-sm'>
                                    9:00am-6:00pm (Monday-Friday)
                                </div>
                                <div className='text-sm '>
                                    Saturday & Sunday Half Day
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4'>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase '>
                                        Quick Links
                                    </h2>
                                    <ul className='font-medium'>
                                        <li className='mb-4'>
                                            <Link
                                                href='about'
                                                className='hover:underline'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='#'
                                                className='hover:underline'
                                            >
                                                Classes
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='/hai'
                                                className='hover:underline'
                                            >
                                                H.A.I (HEROS)
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase '>
                                        Our Services
                                    </h2>
                                    <ul className='font-medium '>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.helpartistindia.org/upcoming/'
                                                className='hover:underline '
                                            >
                                                Event
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='https://www.helpartistindia.org/hai/'
                                                className='hover:underline'
                                            >
                                                Campaign
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase '>
                                        Social Media
                                    </h2>
                                    <ul className='font-medium'>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.facebook.com/helpartistindia/'
                                                className='hover:underline'
                                            >
                                                Facebook
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.instagram.com/helpartistindia/'
                                                className='hover:underline'
                                            >
                                                Instagram
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.youtube.com/channel/UCZ5LcJ-ZFCAx_5C6Xk3XXOA'
                                                className='hover:underline'
                                            >
                                                Youtube
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='https://twitter.com/HelpArtistIndia'
                                                className='hover:underline'
                                            >
                                                Twitter
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase '>
                                        CONTACT US
                                    </h2>
                                    <ul className='font-small'>
                                        <li className='mb-4'>
                                            <p>
                                                PLOT-22 Level, Ashirwad
                                                Apartment <br></br>
                                                Block-B, SAI TOWER, 5, <br></br>
                                                Sector 12 Dwarka,<br></br>
                                                Dwarka, New Delhi, <br></br>
                                                Delhi 110078,<br></br>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                helpartistindia@gmail.com
                                                <br></br>
                                                +91 - 97117-13123<br></br>
                                                +91 - 9990913123
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sm:flex sm:items-center  sm:justify-between bg-[#353535] lg:h-16  sm:h-20 p-4 font si'>
                        <span className='text-sm sm:text-center '>
                            Copyright © 2023{" "}
                            <Link
                                href='https://flowbite.com/'
                                className='hover:underline'
                            >
                                By helpartistindia
                                {/* ™ */}
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-m sm:text-center '>
                            <p>Terms of use</p>
                            <div className='flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l-4 md:border-gray-100  '></div>

                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
