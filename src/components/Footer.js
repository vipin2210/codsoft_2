import React from "react";

const Footer = () => {
    return (
        // max-w-screen-xl
        <div>
            <footer className='  bg-[#353535]  w-full'>
                <div className='flex flex-col  '>
                    <div className='mx-auto w-full  p-4 py-6 lg:py-8 bg-[#222423] '>
                        <div className='md:flex md:justify-between'>
                            <div className='mb-6 md:mb-0 '>
                                <div className='mb-6 '>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap  mb-5'>
                                        HELPARTISTINDIA
                                    </h2>
                                    <p className=' '>
                                        Credible Synthesize Visionary Systems
                                        <br></br> Before Functionalized
                                        Channels.
                                    </p>
                                    <p className=' '>
                                        Credible Synthesize Visionary Systems
                                        <br></br> Before Functionalized
                                        Channels.
                                    </p>
                                </div>
                                <div>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap  mb-5'>
                                        OPENING HOURS
                                    </h2>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4'>
                                <div>
                                    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                        Quick Links
                                    </h2>
                                    <ul className='text-gray-600  font-medium'>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.helpartistindia.org/'
                                                className='hover:underline'
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className='mb-4'>
                                            <a
                                                href='#'
                                                className='hover:underline'
                                            >
                                                Classes
                                            </a>
                                        </li>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.helpartistindia.org/'
                                                className='hover:underline'
                                            >
                                                H.A.I (HEROS)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                        Our Services
                                    </h2>
                                    <ul className='text-gray-600  font-medium'>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.helpartistindia.org/upcoming/'
                                                className='hover:underline '
                                            >
                                                Event
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='https://www.helpartistindia.org/hai/'
                                                className='hover:underline'
                                            >
                                                Campaign
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                        Social Media
                                    </h2>
                                    <ul className='text-gray-600  font-medium'>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.facebook.com/helpartistindia/'
                                                className='hover:underline'
                                            >
                                                Facebook
                                            </a>
                                        </li>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.instagram.com/helpartistindia/'
                                                className='hover:underline'
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                        <li className='mb-4'>
                                            <a
                                                href='https://www.youtube.com/channel/UCZ5LcJ-ZFCAx_5C6Xk3XXOA'
                                                className='hover:underline'
                                            >
                                                Youtube
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='https://twitter.com/HelpArtistIndia'
                                                className='hover:underline'
                                            >
                                                Twitter
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                                        CONTACT US
                                    </h2>
                                    <ul className='text-gray-600  font-small'>
                                        <li className='mb-4'>
                                            <p>
                                                Credible Synthesize Visionary
                                                <br></br>Systems Before
                                                Functionalized<br></br>Channels.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Credible Synthesize Visionary
                                                <br></br>Systems Before
                                                Functionalized<br></br>Channels.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sm:flex sm:items-center  sm:justify-between bg-[#353535] lg:h-16  sm:h-20 p-4 font si'>
                        <span className='text-sm text-gray-500 sm:text-center '>
                            Copyright © 2023{" "}
                            <a
                                href='https://flowbite.com/'
                                className='hover:underline'
                            >
                                By helpartistindia
                                {/* ™ */}
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-m text-gray-500 sm:text-center '>
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
