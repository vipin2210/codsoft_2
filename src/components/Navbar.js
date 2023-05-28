import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-lg  w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/home">
                  <img
                    src="https://www.helpartistindia.org/image/5179logo2.png"
                    className="w-[80px]"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/home"
                    className="cursor-pointer hover:underline  decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 "
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 "
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 "
                  >
                    Services
                  </Link>
                  <Link
                    href="/mission"
                    className="cursor-pointer hover:underline decoration-red-600 decoration-2 underline-offset-4 font-semibold px-3 py-2 text-md hover:text-red-600 "
                  >
                    Mission
                  </Link>
                  <Link
                    href="/contact"
                    className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                  >
                    Contact Us
                  </Link>
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
                                href='/home'
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
                                href='/services'
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
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar;
