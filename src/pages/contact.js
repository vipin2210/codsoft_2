import React from "react";
import Navbar from "@/components/Navbar";
// import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Breadcrum from "@/components/Breadcrum";
// import img from "next/image";

function contact() {
    return (
        <main>
            <Navbar />
            <div>
                <section>
                    <div className=''>
                        <img
                            className='object-fill  h-80 w-full'
                            src='/contactus.png'
                        />
                        <Breadcrum name={"Contact Us"} page={"Contact us"} />
                    </div>
                    <div className='m-8'>
                        <CallToAction />
                    </div>
                    {/* Form Section */}
                    <section>
                        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                            <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
                                <div className='lg:col-span-2 '>
                                    <img
                                        src='/contactusform.png'
                                        alt='contact img'
                                    />
                                </div>

                                <div class='rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12'>
                                    <div className='flex flex-row gap-1 '>
                                        <p className='text-red-500 md:text-2x; lg:text-3xl font-[sans] '>
                                            Get In Touch
                                        </p>

                                        <div className='md:w-[50%] lg:w-[72%] border-b-2 mb-4 border-rose-500  '>
                                            {/* <hr className="h-4px  bg-red-900 border-0 dark:bg-red-700"></hr> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='lg:text-5xl lg:font-extrabold font-serif'>
                                            Let&apos;s Talk To An Expert
                                        </h1>
                                    </div>
                                    <div>
                                        <p className='lg:text-lg md:text-lg'>
                                            Efficiently intergrate wirelss value
                                            whereas <br></br> cross-platform
                                            e-trailers.
                                        </p>
                                    </div>
                                    <form action='' className='space-y-4'>
                                        <div className='grid grid-cols-1 gap-4  sm:grid-cols-2 '>
                                            <div>
                                                <input
                                                    className='w-full rounded-lg p-3 text-md border border-gray-900'
                                                    placeholder='Name'
                                                    type='text'
                                                    id='name'
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className='w-full rounded-lg p-3 text-md border border-gray-900'
                                                    placeholder='Email address'
                                                    type='email'
                                                    id='email'
                                                />
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                            <div>
                                                <input
                                                    className='w-full rounded-lg border  border-gray-900 p-3 text-md'
                                                    placeholder='Phone Number'
                                                    type='tel'
                                                    id='phone'
                                                />
                                            </div>
                                            <div>
                                                <select
                                                    id='countries'
                                                    className=' border border-gray-900 text-md p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                >
                                                    <option
                                                        disabled='true'
                                                        selected='Select Subject'
                                                    >
                                                        Select Subject
                                                    </option>
                                                    <option value='US'>
                                                        Writer
                                                    </option>
                                                    <option value='CA'>
                                                        Actor
                                                    </option>
                                                    <option value='FR'>
                                                        Director
                                                    </option>
                                                    <option value='DE'>
                                                        Screen
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <textarea
                                                className='w-full rounded-lg border border-gray-900 p-3 text-md'
                                                placeholder='Message.....'
                                                rows='8'
                                                id='message'
                                            ></textarea>
                                        </div>

                                        <div className='mt-4'>
                                            <button
                                                type='submit'
                                                // class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10  border-slate-400 border-4    hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                // transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
                                                className='inline-block w-full rounded-lg bg-red-800 px-5 py-3 font-medium text-gray-100 sm:w-auto transition duration-150 ease-in-out  border-success  dark:hover hover:-translate-y-1 hover:scale-110 hover:bg-red-700 shadow-md shadow-gray-500 '
                                            >
                                                Send Messages
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Location Section */}
                    <section>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.183776651522!2d77.03904717326004!3d28.594263085821556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2c70913131%3A0x8c7d5315d160bd24!2sHELP%20ARTIST%20INDIA%2C!5e0!3m2!1sen!2sin!4v1685272795573!5m2!1sen!2sin'
                            width='600'
                            height='450'
                            className='w-full'
                            style={{ border: 0 }}
                            allowfullscreen=''
                            loading='lazy'
                            referrerpolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </section>
                </section>
            </div>
        </main>
    );
}

export default contact;
