import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        // max-w-screen-xl
        <div>
            <footer className='  bg-[#000215]  w-full text-white font-sans'>
                <div className='  '>
                    <div className=' w-full  p-4 py-6 lg:py-8 bg-[#0D0E19] '>
                        <div className='md:flex md:justify-between'>
                            <div className='mb-6 md:mb-0 '>
                                <div className='mb-6 '>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap text-[#FFD12F] mb-5'>
                                        HELPARTISTINDIA
                                    </h2>
                                    <p className=' '>
                                        Help Artist India - &quot;HAI&quot; is
                                        an effort <br />
                                        For the Artist & their Benefits with{" "}
                                        <br /> in India & worldwide.
                                    </p>
                                </div>
                                <div>
                                    <h2 className='self-center text-2xl font-semibold whitespace-nowrap text-[#FFD12F] mb-5'>
                                        OPENING HOURS
                                    </h2>
                                </div>
                                <div className='text-sm'>
                                    Monday-Sunday <br /> 10 Am to 7Pm
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 '>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase text-[#FFD12F] '>
                                        Quick Links
                                    </h2>
                                    <ul className='font-medium'>
                                        <li className='mb-4'>
                                            <Link
                                                href='/about'
                                                className='hover:underline hover:text-blue-400  '
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='/mission'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Mission
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='ourHeros'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                H.A.I Heroes
                                            </Link>
                                        </li>
                                       
                                        <li className='mb-4'>
                                            <Link
                                                href='hai'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                H.A.I Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase text-[#FFD12F]'>
                                        Our Services
                                    </h2>
                                    <ul className='font-medium '>
                                        <li className='mb-4'>
                                            <Link
                                                href='/services'
                                                className='hover:underline hover:text-blue-400  '
                                            >
                                                Event
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='/campaign'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Campaign
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase text-[#FFD12F] '>
                                        Social Media
                                    </h2>
                                    <ul className='font-medium'>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.facebook.com/helpartistindia/'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Facebook
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.instagram.com/helpartistindia/'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Instagram
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link
                                                href='https://www.youtube.com/channel/UCZ5LcJ-ZFCAx_5C6Xk3XXOA'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Youtube
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='https://twitter.com/HelpArtistIndia'
                                                className='hover:underline hover:text-blue-400 '
                                            >
                                                Twitter
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='mb-6 text-lg font-bold uppercase text-[#FFD12F] '>
                                        CONTACT US
                                    </h2>
                                    <ul className='font-small'>
                                        <li className='mb-4'>
                                            <p>
                                                Help Artist India, Sai Tower,
                                                Plot <br /> No.22, Level #5,
                                                Sector 12B, <br /> Dwarka, New
                                                Delhi 110078
                                            </p>
                                        </li>
                                        <li>
                                            <p className='-ml-12  md:-ml-16 lg:ml-0'>
                                                helpartistindia@gmail.com
                                                <br />
                                                info@helpartistindia.com
                                            </p>
                                            <p>
                                                +91 - 97117-13123
                                                <br />
                                                +91 - 9990913123
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center  bg-[#000215]   p-4 '>
                        <span className='text-md text-center '>
                            Copyright © 2023 By{" "}
                            <Link
                                href='/'
                                className='hover:underline hover:text-blue-400 '
                            >
                                helpartistindia{" "}
                            </Link>{" "}
                            <br className=' sm:hidden flex' />
                            All Rights Reserved.
                            {/* ™ */}
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
