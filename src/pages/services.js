import Breadcrum from "@/components/Breadcrum";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PastEvent from "@/components/PastEvent";
import SimpleCarousal from "@/components/SimpleCarousal";
import SimpleCarousalComing from "@/components/SimpleCarousalComing";
import { useState } from "react";

const images = [
    { img: "/Dharohar1.png" },
    { img: "/Dharohar2.png" },
    { img: "/Dharohar3.png" },
    { img: "/Dharohar4.png" },
    { img: "/Dharohar5.png" },
    { img: "/Dharohar6.png" },
    { img: "/Dharohar7.png" },
    { img: "/Dharohar8.png" },
];

const pastevent = [
    {
        name: "LIVE IN CONCERT",
        desc: "“Chitrahaar” a musical night with Padma Shri Hariharan, witness the mystic performance of living legend at F Bar and Lounge Noida. BOOK YOUR TABLES NOW HURRY !! Help Artist India Is All Set For Major Musical Events 2023 With Big Artists Of The Industry, It Will Be All For Fundraising For The NGO Dedicated To Upliftment Of Art And Artists Who Need Help To Live Their Dream Of Being An Artist.  Announcement Of These Musical Events Has Been Met With Enthusiasm By Music Fans Across India.",
        link: "",
        poster: "",
        image1: "",
        image2: "",
        date: "11",
        year: "2023",
        day: "sunday",
        month: "June ",
    },
];

const events = () => {
    const [selectedOption, setSelectedOption] = useState("upcomingEvent");

    function handleChange(event) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <Navbar />

            <div className='bg-black'>
                <div className='mb-16'>
                    <img
                        className='object-fill  h-80 w-full'
                        src='/PastEventBanner.png'
                    />
                    <Breadcrum name='Events' page='Services/Events' />
                    {/* Button */}
                    <div>
                        <div class='containerTab '>
                            <div class='tabsButton  rounded-full p-1 '>
                                <input
                                    type='radio'
                                    id='radio-1'
                                    name='tabs'
                                    checked={
                                        selectedOption == "upcomingEvent"
                                            ? true
                                            : false
                                    }
                                    value='upcomingEvent'
                                    onChange={handleChange}
                                />
                                <label
                                    class='tabButton w-[150px] min-[360px]:w-[180px] text-lg min-[360px]:text-xl sm:w-[200px]
                   
                    text-center '
                                    for='radio-1'
                                >
                                    Upcoming Events
                                </label>
                                <input
                                    type='radio'
                                    id='radio-2'
                                    name='tabs'
                                    value='pastEvent'
                                    onChange={handleChange}
                                />
                                <label
                                    class='tabButton w-[150px] min-[360px]:w-[180px] text-lg min-[360px]:text-xl sm:w-[200px] text-center'
                                    for='radio-2'
                                >
                                    Past Events
                                </label>
                                <span class='gliderTabButton w-[150px] min-[360px]:w-[180px] rounded-full sm:w-[200px]'></span>
                            </div>
                        </div>
                    </div>

                    {/* Button end */}
                </div>

                {selectedOption === "upcomingEvent" ? (
                    <div className='relative container -mt-14 z-20 mx-auto p-16'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-5'>
                            <div className='w-72 sm:w-96 md:w-72 min-[640px]:w-60 max-[768px]:w-60 sm:ml-0 mx-auto'>
                                <a href='#'>
                                    <img
                                        className=''
                                        src='/EventUpcoming1.png'
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
                                    Rumaniyat a musical night with Padma Shri
                                    Hariharan ,witness the mystic performance of
                                    living legend at F Bar and Lounge Noida BOOK
                                    YOUR TABLES NOW HURRY !!
                                </h2>
                                <h2 className='text-lg mt-8'>
                                    Help Artist India Is All Set For Major
                                    Musical Events 2023 With... Big Artists Of
                                    The Industry ,It Will Be All For Fundraising
                                    For The NGO Dedicated To Upliftment Of Art
                                    And Artists Who Need Help To Live Their
                                    Dream Of Being An Artist Announcement Of
                                    These Musical Events Has Been Met With
                                    Enthusiasm By Music Fans Across India.
                                </h2>
                                <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4  sm:p-4 sm:px-72 min-[640px]:px-16 max-[768px]:px-16  min-[1024px]:px-52 max-[1279px]:px-72 md:px-24 lg:px-72 font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300 '>
                                    Book Table
                                </button>
                                <SimpleCarousalComing />
                            </div>
                            <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>
                        </div>

                        {/* pastevent 2  from right to left*/}
                        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2'>
                            <div className='text-white mr-0 sm:-mr-10 md:mr-0 lg:-mr-24'>
                                <h1 className='font-bold text-4xl sm:text-6xl'>
                                    Shaam-e-Ghazal
                                </h1>
                                <h2 className='text-lg mt-10'>
                                    Rumaniyat a musical night with Padma Shri
                                    Hariharan ,witness the mystic performance of
                                    living legend at F Bar and Lounge Noida BOOK
                                    YOUR TABLES NOW HURRY !!
                                </h2>
                                <h2 className='text-lg mt-8'>
                                    Help Artist India Is All Set For Major
                                    Musical Events 2023 With... Big Artists Of
                                    The Industry ,It Will Be All For Fundraising
                                    For The NGO Dedicated To Upliftment Of Art
                                    And Artists Who Need Help To Live Their
                                    Dream Of Being An Artist Announcement Of
                                    These Musical Events Has Been Met With
                                    Enthusiasm By Music Fans Across India.
                                </h2>
                                <button className='my-8 text-lg sm:text-xl lg:text-2xl px-6 py-4  sm:p-4 sm:px-72 min-[640px]:px-16 max-[768px]:px-16  min-[1024px]:px-48 max-[1279px]:px-48 md:px-24 lg:px-72 font-bold border-4 rounded-xl border-w   border-blue-400 text-blue-300 '>
                                    Book Table
                                </button>
                                <SimpleCarousalComing />
                            </div>
                            <div className='ml-0 sm:ml-36 md:ml-10 lg:ml-56 min-[350px]:mx-auto max-[639px]:mx-auto min-[640px]:ml-14 max-[768px]:ml-14 min-[1024px]:ml-40 max-[1279px]:ml-40 mx-auto'>
                                <div className='w-72 sm:w-96 md:w-80  min-[640px]:w-60 max-[768px]:w-60 mx-auto'>
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
                            <div className='w-72 sm:w-96 md:w-72 sm:ml-0 min-[640px]:w-60 max-[768px]:w-60 mx-auto'>
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
                                    FUNKAAR 3 & ASH’AAR
                                </h1>
                                <h2 className='text-lg mt-10'>
                                    We all love music; some listen to it, and
                                    some sing. If You Have A Singing Talent In
                                    You, Help Artist India is Giving You A
                                    Platform To Perform. Ashok Rajput, Director
                                    and Founder at Help Artist India, has a
                                    vision of giving a chance to artists of all
                                    forms to perform on a stage called Funkaar.
                                    It is a series of events where all the
                                    artists like singers, Writers, Poets,
                                    Dancers, Storytellers, Players, Musicians
                                    and Rural Musicians can showcase their
                                    talents on stage across India. We organize
                                    these events all over the country. under the
                                    impression of senior artists and our
                                    Patrons.
                                </h2>
                                <h2 className='text-lg mt-8'>
                                    Help Artist India Is All Set For Major
                                    Musical Events 2023 With... Big Artists Of
                                    The Industry ,It Will Be All For Fundraising
                                    For The NGO Dedicated To Upliftment Of Art
                                    And Artists Who Need Help To Live Their
                                    Dream Of Being An Artist Announcement Of
                                    These Musical Events Has Been Met With
                                    Enthusiasm By Music Fans Across India.
                                </h2>

                                <button className='my-8  mx-2 text-lg  px-6 py-4 min-[640px]:mx-1 max-[640px]:mx-1 font-bold border-4 rounded-xl border-w '>
                                    Audition
                                </button>
                                <button className='my-8 mx-2 text-lg  px-6 py-4 min-[640px]:mx-1 max-[640px]:mx-1 font-bold border-4 rounded-xl border-w  '>
                                    Volunteer
                                </button>
                                <SimpleCarousalComing />
                            </div>
                            <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>
                        </div>
                    </div>
                ) : (
                    <div className='relative container -mt-14 z-20 mx-auto p-16 '>
                        <div className='grid sm:grid-cols-2 grid-cols-1  gap-x-5'>
                            <div className='w-72 sm:w-96 md:w-72 min-[640px]:w-60 max-[768px]:w-60 sm:ml-0 mx-auto'>
                                <a href='#'>
                                    <img
                                        className=''
                                        src='/dharoverustav.png'
                                        alt='hariharan'
                                    />
                                </a>
                            </div>
                            <div className='text-white mt-10 sm:mt-0 ml-0 md:ml-0 lg:-ml-32'>
                                <h1 className='font-bold text-4xl sm:text-6xl '>
                                    Dharohar Utsav
                                </h1>
                                <h2 className='text-md mt-10'>
                                    The Ministry of Culture, Government of
                                    India, in collaboration with the "Swar
                                    Dharohar Foundation," inaugurated the
                                    three-day "Swar Dharohar Festival" under
                                    Kalanjali. "Swar Dharohar Festival" is a
                                    music, art, and literature festival to
                                    showcase the iconic art and culture of India
                                    and the rich literary art and heritage of
                                    Indian states. The Swar Dharohar festival
                                    was inaugurated today by Chief Guest Sh.
                                    Mehtab Ali (sitar player) and Pt. Lalit
                                    Prasad (classical vocal). On the first day,
                                    classical performances, ghazals, Kavi
                                    Sammelan, Mushaira, and Sufi performances
                                    were organised. Ghazal was performed by Sh.
                                    Diwakar Meena; Sh. Hamsar Hayat and Athar
                                    Hayat performed Sufi music.
                                </h2>
                                <h2 className='text-md my-8'>
                                    on December 3rd and 4th, 2022, at the
                                    Central Vista, India Gate, New Delhi, Delhi.
                                    Swar Dharohar Utsav started in the morning
                                    with Ragaas, and many celebrities performed.
                                    In this programme, upcoming local artists
                                    will perform with legends on the same
                                    platform to showcase their talents. National
                                    as well as local poets will exhibit their
                                    artistry through Kavi Sammelan.
                                </h2>
                                <div className='flex flex-row gap-5 mt-2 max-w-sm'>
                                    <span className='text-yellow-500 mb-4 text-6xl font-serif -mt-4'>
                                        12
                                    </span>
                                    <div className='text-white font-bold text-xl'>
                                        <span>DECEMBER </span>
                                        <span>2019 </span>
                                        <span>THRUSDAY</span>
                                    </div>
                                </div>

                                <SimpleCarousal images={images} />
                            </div>
                            <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>{" "}
                        </div>

                        {/* pastevent 2  from right to left*/}
                        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2'>
                            <div className='text-white mr-0 sm:-mr-10 md:mr-0 '>
                                <h1 className='font-bold text-4xl sm:text-6xl'>
                                    FUNKAAR EVENT
                                </h1>
                                <h2 className='text-md mt-10'>
                                    We all love music; some listen to it, and
                                    some sing. If You Have A Singing Talent In
                                    You, Help Artist India is Giving You A
                                    Platform To Perform. Ashok Rajput, Director
                                    and Founder at Help Artist India, has a
                                    vision of giving a chance to artists of all
                                    forms to perform on a stage called Funkaar.
                                    It is a series of events where all the
                                    artists like singers, Writers, Poets,
                                    Dancers, Storytellers, Players, Musicians
                                    and Rural Musicians can showcase their
                                    talents on stage across India. We organize
                                    these events all over the country. under the
                                    impression of senior artists and our
                                    Patrons.
                                </h2>

                                <div className='flex flex-row gap-5 mt-2 max-w-sm'>
                                    <span className='text-yellow-500 mb-4 text-6xl font-serif -mt-4'>
                                        14
                                    </span>
                                    <div className='text-white font-bold text-xl'>
                                        <span>JANUARY </span>
                                        <span>2023 </span>
                                        <span>SATURDAY</span>
                                    </div>
                                </div>
                                <SimpleCarousal
                                    images={[
                                        { img: "pastevent.png" },
                                        { img: "pastevent4.png" },
                                    ]}
                                />
                            </div>
                            <div className='ml-0 sm:ml-36 md:ml-10 lg:ml-56 min-[350px]:mx-auto max-[639px]:mx-auto min-[640px]:ml-14 max-[768px]:ml-14 min-[1024px]:ml-40 max-[1279px]:ml-40 mx-auto'>
                                <div className='w-72 sm:w-96 md:w-72 min-[640px]:w-60 max-[768px]:w-60 sm:ml-0 mx-auto'>
                                    <a href='#'>
                                        <img
                                            className=''
                                            src='/fUNKAAR.png'
                                            alt='ghazal'
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>{" "}
                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-5'>
                            <div className='w-72 sm:w-96 md:w-72 sm:ml-0 min-[640px]:w-60 max-[768px]:w-60 mx-auto'>
                                <a href='#'>
                                    <img
                                        className=''
                                        src='/bANNER1.png'
                                        alt='funkaar3'
                                    />
                                </a>
                            </div>
                            <div className='text-white mt-10 sm:mt-0 ml-0 md:ml-0 lg:-ml-32'>
                                <h1 className='font-bold text-4xl sm:text-6xl '>
                                    FUNKAAR - II EVENT
                                </h1>
                                <h2 className='text-md mt-10'>
                                    We all love music; some listen to it, and
                                    some sing. If You Have A Singing Talent In
                                    You, Help Artist India is Giving You A
                                    Platform To Perform. Ashok Rajput, Director
                                    and Founder at Help Artist India, has a
                                    vision of giving a chance to artists of all
                                    forms to perform on a stage called Funkaar.
                                    It is a series of events where all the
                                    artists like singers, Writers, Poets,
                                    Dancers, Storytellers, Players, Musicians
                                    and Rural Musicians can showcase their
                                    talents on stage across India. We organize
                                    these events all over the country. under the
                                    impression of senior artists and our
                                    Patrons.
                                </h2>

                                <div className='flex flex-row gap-5 mt-2 max-w-sm'>
                                    <span className='text-yellow-500 mb-4 text-6xl font-serif -mt-4'>
                                        26
                                    </span>
                                    <div className='text-white font-bold text-xl'>
                                        <span>FEBRUARY </span>
                                        <span>2023 </span>
                                        <span>SUNDAY</span>
                                    </div>
                                </div>
                                <SimpleCarousal
                                    images={[
                                        { img: "serviceImg1.png" },
                                        { img: "serviceImg1.png" },
                                    ]}
                                />
                            </div>{" "}
                            <div className='w-[100%] border-b-2 border-yellow-500  mb-11  ml-0 sm:ml-80'></div>{" "}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default events;
