import Breadcrum from "@/components/Breadcrum";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PastEvent from "@/components/PastEvent";
import SimpleCarousal from "@/components/SimpleCarousal";

import React from "react";

const pastEventPage = () => {
  return (
      <div>
          <Navbar />
          <div className='bg-black'>
              <div className=''>
                  <img
                      className='object-fill  h-80 w-full'
                      src='/PastEventBanner.png'
                  />
                  <Breadcrum name='Event' page='Event' />

                  <Button props='bg-red-600' />
              </div>

              <div className='relative container -mt-14 z-20 mx-auto '>
                  <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-5'>
                      <div className='w-72 sm:w-96 md:w-80 sm:ml-0 mx-auto'>
                          <a href='#'>
                              <img
                                  className=''
                                  src='/hariharan.png'
                                  alt='hariharan'
                              />
                          </a>
                          <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                              <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                  11
                              </p>
                              <div className='grid text-white'>
                                  <span>JUNE</span>
                                  <span>2023</span>
                                  <span>SUNDAY</span>
                              </div>
                              <div className=' w-[100%] border-b-2 border-yellow-500 items-center mb-11 mr-10'></div>
                          </div>
                      </div>
                      <div className='text-white mt-10 sm:mt-0 ml-0 md:ml-0 lg:-ml-32'>
                          <h1 className='font-bold text-4xl sm:text-6xl'>
                              LIVE IN CONCERT
                          </h1>
                          <h2 className='text-lg mt-10'>
                              “Chitrahaar” a musical night with Padma Shri
                              Hariharan, witness the mystic performance of
                              living legend at F Bar and Lounge Noida. BOOK YOUR
                              TABLES NOW HURRY !!
                          </h2>
                          <h2 className='text-lg mt-8'>
                              Help Artist India Is All Set For Major Musical
                              Events 2023 With Big Artists Of The Industry, It
                              Will Be All For Fundraising For The NGO Dedicated
                              To Upliftment Of Art And Artists Who Need Help To
                              Live Their Dream Of Being An Artist. Announcement
                              Of These Musical Events Has Been Met With
                              Enthusiasm By Music Fans Across India.
                          </h2>
                          <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4  sm:p-4 sm:px-72 md:px-24 lg:px-72 font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300 '>
                              Book Table
                          </button>
                          <SimpleCarousal />
                      </div>
                      <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>
                  </div>

                  {/* pastevent 2  from right to left*/}
                  <div className='mt-10 grid grid-cols-1 sm:grid-cols-2'>
                      <div className='text-white mr-0 sm:-mr-10 md:mr-0'>
                          <h1 className='font-bold text-4xl sm:text-6xl'>
                              Shaam-e-Ghazal
                          </h1>
                          <h2 className='text-lg mt-10'>
                              Rumaniyat a musical night with Padma Shri
                              Hariharan ,witness the mystic performance of
                              living legend at F Bar and Lounge Noida BOOK YOUR
                              TABLES NOW HURRY !!
                          </h2>
                          <h2 className='text-lg mt-8'>
                              Help Artist India Is All Set For Major Musical
                              Events 2023 With... Big Artists Of The Industry
                              ,It Will Be All For Fundraising For The NGO
                              Dedicated To Upliftment Of Art And Artists Who
                              Need Help To Live Their Dream Of Being An Artist
                              Announcement Of These Musical Events Has Been Met
                              With Enthusiasm By Music Fans Across India.
                          </h2>
                          <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4 sm:px-56 md:px-28 lg:px-56 font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300'>
                              Book Table
                          </button>
                          <SimpleCarousal />
                      </div>
                      <div className='ml-0 sm:ml-36 md:ml-10 lg:ml-56'>
                          <div className='w-72 sm:w-96 md:w-80 mx-auto'>
                              <a href='#'>
                                  <img
                                      className='object-cover'
                                      src='/ghazal.png'
                                      alt='ghazal'
                                  />
                              </a>
                              <div className='flex flex-row gap-5 mt-4 '>
                                  <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                      14
                                  </p>
                                  <div className='grid text-white'>
                                      <span>JULY</span>
                                      <span>2023</span>
                                      <span>FRIDAY</span>
                                  </div>
                                  <div className=' w-[100%]   border-b-2 border-yellow-500 items-center mb-11'></div>
                              </div>
                          </div>
                      </div>
                      <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>
                  </div>

                  <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-5'>
                      <div className='w-72 sm:w-96 md:w-80 sm:ml-0 mx-auto'>
                          <a href='#'>
                              <img
                                  className=''
                                  src='/funkaar3.png'
                                  alt='hariharan'
                              />
                          </a>
                          <div className='flex flex-row gap-5 mt-4 max-w-sm'>
                              <p className='text-yellow-500 mb-4 text-7xl font-serif'>
                                  11
                              </p>
                              <div className='grid text-white'>
                                  <span>JUNE</span>
                                  <span>2023</span>
                                  <span>SUNDAY</span>
                              </div>
                              <div className=' w-[100%] border-b-2 border-yellow-500 items-center mb-11 mr-10'></div>
                          </div>
                      </div>
                      <div className='text-white mt-10 sm:mt-0 ml-0 md:ml-0 lg:-ml-32'>
                          <h1 className='font-bold text-4xl sm:text-6xl'>
                              LIVE IN CONCERT
                          </h1>
                          <h2 className='text-lg mt-10'></h2>
                          <h2 className='text-lg mt-8'></h2>
                          <div className="flex flex-row gap-5 ">
                              <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4  sm:p-4 sm:px-72 md:px-24  font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300 '>
                                  Audition
                              </button>
                              <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4  sm:p-4 sm:px-72 md:px-24  font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300 '>
                                 Volunteer
                              </button>
                          </div>

                          <SimpleCarousal />
                      </div>
                      <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default pastEventPage;
