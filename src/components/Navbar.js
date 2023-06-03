import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=' shadow-lg  sticky w-full z-10 '>
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    <div className='flex items-center  mx-5 md:mx-16  justify-between w-full'>
                        <div className='   '>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    className=''
                                    alt='logo'
                                    width={80}
                                />
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <Link
                                    href='/'
                                    className='cursor-pointer hover:underline  decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 '
                                >
                                    Home
                                </Link>
                                <Link
                                    href='/about'
                                    className='cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 '
                                >
                                    About Us
                                </Link>
                                {/* <Link
                                    href='/services'
                                    className='cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 '
                                >
                                    Services
                                </Link> */}

                                <Menu>
                                    <MenuHandler>
                                        <Button className=' bg-white hover:bg-neutral-200 text-black '>
                                            Our Services
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem>
                                            <Link href='/campaign'>
                                                Compaign
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href='/event'>Event</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href='/pastevents'>
                                                Past Event
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>

                                <Link
                                    href='/mission'
                                    className='cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 '
                                >
                                    Mission
                                </Link>
                                <Menu>
                                    <MenuHandler>
                                        <Button className=' bg-white hover:bg-neutral-200 text-black '>
                                            More
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        {/* <MenuItem>
                                            <Link href='/hai'>HAI Heros</Link>
                                        </MenuItem> */}
                                        <MenuItem>
                                            <Link href='/hai'>H.A.I Team</Link>
                                        </MenuItem>
                                        {/* <MenuItem>
                                            <Link href='/bookartist'>
                                                Book Artist
                                            </Link>
                                        </MenuItem> */}
                                        <MenuItem>
                                            <Link href='/donation'>
                                                Donation
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>

                                <Link
                                    href='/contact'
                                    className='cursor-pointer bg-[#FF0000] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black'
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 flex md:hidden '>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                {(ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div
                            ref={ref}
                            className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'
                        >
                            <Link
                                href='/'
                                activeClass='home'
                                to='home'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Home
                            </Link>
                            <Link
                                href='/about'
                                activeClass='about'
                                to='about'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                About
                            </Link>

                            <Link
                                href=''
                                activeClass='services'
                                to='services'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Services
                            </Link>
                            <Link
                                href='/event'
                                activeClass='services'
                                to='services'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 ml-4 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Event
                            </Link>
                            <Link
                                href='/pastevents'
                                activeClass='services'
                                to='services'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 ml-4 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Past Events
                            </Link>
                            <Link
                                href='/campaign'
                                activeClass='services'
                                to='services'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black ml-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Campaign
                            </Link>

                            <Link
                                href='/mission'
                                activeClass='mission'
                                to='mission'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Mission
                            </Link>

                            <Link
                                href='/contact'
                                activeClass='contact'
                                to='contact'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                Contact
                            </Link>
                            <Menu>
                                <MenuHandler>
                                    <Button className=' bg-white  hover:bg-neutral-200 text-black '>
                                        More
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {/* <MenuItem>
                                        <Link href='/hai'>HAI Heros</Link>
                                    </MenuItem> */}
                                    <MenuItem>
                                        <Link href='/hai'>H.A.I Team</Link>
                                    </MenuItem>
                                    {/* <MenuItem>
                                        <Link href='/bookartist'>
                                            Book Artist
                                        </Link>
                                    </MenuItem> */}
                                    <MenuItem>
                                        <Link href='/donation'>Donation</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar;
