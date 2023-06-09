import React from "react";
import bg from "../../public/ourHerosMain.png";
import ArtistCard from "@/components/ArtistCard";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";

function ourHeros() {
    const teams = [
        {
            photo: "/hariharann.png",
            name: "Padam Shri Hariharan",
            profession: "Singer",
            twitter: "https://twitter.com/singerhariharan?lang=en",
            insta: "https://www.instagram.com/singerhariharana/",
            facebook: "https://www.facebook.com/SingerHariharanA",
            link: "https://en.wikipedia.org/wiki/Hariharan_(singer)",
            profile: "/hariharan",
        },

        {
            photo: "/kavitaa.png",
            name: "Kavita Seth",
            profession: "Singer",
            twitter: "https://twitter.com/kavitaseth?lang=en",
            insta: "https://www.instagram.com/sethkavita/",
            facebook: "https://www.facebook.com/kavita.sufi/",
            link: "https://en.wikipedia.org/wiki/Kavita_Seth",
            profile: "/kavitaSeth",
        },

        {
            photo: "/Rakeshh.png",
            name: "Rakesh Bedi",
            profession: "Actor",
            twitter: "https://twitter.com/bolbedibol?lang=en",
            insta: "https://www.instagram.com/therakeshbedi/",
            facebook: "https://www.facebook.com/rakesh.bedi.980/",
            link: "https://en.wikipedia.org/wiki/Rakesh_Bedi",
            profile: "/rakeshBedi",
        },
        {
            photo: "/Nawazz.png",
            name: "Nawazuddin Siddiqui",
            profession: "Actor",
            twitter:
                "https://twitter.com/Nawazuddin_S?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            insta: "https://www.instagram.com/nawazuddin._siddiqui/",
            facebook: "https://www.facebook.com/NawazuddinSiddiqui/",
            link: "https://en.wikipedia.org/wiki/Nawazuddin_Siddiqui",
            profile: "/nawaz",
        },
        {
            photo: "/LateShriSardoolSikander.webp",
            name: "Late Shri Sardool Sikander",
            profession: "Singer",
            twitter: "https://twitter.com/sardoolsikander?lang=en",
            insta: "https://www.instagram.com/sardoolsikander/?hl=en",
            facebook: "https://www.facebook.com/sardool.sikander.9",
            link: "https://en.wikipedia.org/wiki/Sardool_Sikander",
            profile: "/sikander",
        },
    ];
    return (
        <div>
            <Navbar />
            <div className='p-5 w-full '>
                <section>
                    <div>
                        <img src='/ourHerosPhoto.png' className='w-full' />
                    </div>
                    <div>
                        <div className=' flex flex-row items-center gap-14 '>
                            <div className='skew-x-12 '>
                                <button className='py-1 px-5  text-xs md:py-2.5 md:px-10 md:text-sm font-medium text-gray-50 focus:outline-none bg-red-500  border border-gray-200 hover:bg-red-400  '>
                                    Join Us
                                </button>
                            </div>
                            <div className='flex flex-row '>
                                <a href='https://twitter.com/HelpArtistIndia'>
                                    <svg
                                        className='hover:fill-cyan-500'
                                        width='31'
                                        height='31'
                                        viewBox='0 6 31 31'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M15.2374 11.7257C15.2374 9.79422 16.8615 8.1876 18.793 8.21394C19.4694 8.22175 20.1291 8.42475 20.6929 8.79853C21.2567 9.17232 21.7005 9.70098 21.9711 10.321H25.0702L22.2345 13.1567C22.0515 16.0052 20.7905 18.6771 18.708 20.6292C16.6255 22.5812 13.8777 23.6669 11.0233 23.6655C8.21392 23.6655 7.51158 22.612 7.51158 22.612C7.51158 22.612 10.321 21.5585 11.7256 19.4514C11.7256 19.4514 6.10689 16.6421 7.51158 8.91629C7.51158 8.91629 11.0233 12.428 15.2374 13.1303V11.7257Z'
                                            stroke='black'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </svg>
                                </a>
                                <a href='https://www.instagram.com/helpartistindia/'>
                                    <svg
                                        className='hover:fill-[#a5080895]'
                                        width='31'
                                        height='31'
                                        viewBox='0 0 31 31'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M11 14.4375C12.8985 14.4375 14.4375 12.8985 14.4375 11C14.4375 9.10152 12.8985 7.5625 11 7.5625C9.10152 7.5625 7.5625 9.10152 7.5625 11C7.5625 12.8985 9.10152 14.4375 11 14.4375Z'
                                            stroke='black'
                                            stroke-width='1.5'
                                            stroke-miterlimit='10'
                                        />
                                        <path
                                            d='M14.7812 3.09375H7.21875C4.94058 3.09375 3.09375 4.94058 3.09375 7.21875V14.7812C3.09375 17.0594 4.94058 18.9062 7.21875 18.9062H14.7812C17.0594 18.9062 18.9062 17.0594 18.9062 14.7812V7.21875C18.9062 4.94058 17.0594 3.09375 14.7812 3.09375Z'
                                            stroke='black'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M15.4688 7.5625C16.0383 7.5625 16.5 7.10079 16.5 6.53125C16.5 5.96171 16.0383 5.5 15.4688 5.5C14.8992 5.5 14.4375 5.96171 14.4375 6.53125C14.4375 7.10079 14.8992 7.5625 15.4688 7.5625Z'
                                            fill='black'
                                        />
                                    </svg>
                                </a>
                                <a href='https://www.facebook.com/helpartistindia/'>
                                    <svg
                                        className='hover:fill-[#1139ea95]'
                                        width='31'
                                        height='31'
                                        viewBox='0 0 31 31'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z'
                                            stroke='black'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M14.4375 7.56252H13.0625C12.7913 7.56138 12.5226 7.61395 12.2719 7.7172C12.0211 7.82045 11.7933 7.97233 11.6016 8.16408C11.4098 8.35582 11.2579 8.58364 11.1547 8.83439C11.0515 9.08514 10.9989 9.35385 11 9.62502V19.25'
                                            stroke='black'
                                            stroke-width='1.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M8.25 12.375H13.75'
                                            stroke='black'
                                            stroke-width='1.4'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className=' text-3xl md:text-5xl text-center m-12'>
                            <h1 className=' md:font-extrabold'>Our Heroes</h1>
                        </div>
                        <div>
                            <div className=' grid w-full    gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 '>
                                {teams.map((item, i) => (
                                    <ArtistCard key={i} props={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ScrollTop />
        </div>
    );
}

export default ourHeros;
