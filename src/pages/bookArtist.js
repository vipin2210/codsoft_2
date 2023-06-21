import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FilterArtist from "@/components/FilterArtist";
import { FaSearch } from "react-icons/fa";
import BookArtistCard from "@/components/BookArtistCard";

const bookArtist = () => {
    const teams = [
        {
            photo: "/b1hariharan.png",
            name: "Padman Shri Hariharan",
            proffesion: "Legendary Singer",
        },

        {
            photo: "/b2kamal.png",
            name: "Kamal Khan",
            proffesion: "Punjabi Singer",
        },

        {
            photo: "/b3master.png",
            name: "Master Saleem",
            proffesion: "Punjabi Singer",
        },
        {
            photo: "/b4jasbir.png",
            name: "Jasbir Jassi",
            proffesion: "Punjabi Singer",
        },
        {
            photo: "/b5khan.png",
            name: "Khan Saab",
            proffesion: "Punjabi Singer",
        },
        {
            photo: "/b6mcsq.png",
            name: "MC Square",
            proffesion: "Rapper",
        },
        {
            photo: "/b7king.png",
            name: "Jasbir Jassi",
            proffesion: "Punjabi Singer",
        },
        {
            photo: "/b8gurdas.png",
            name: "KING",
            proffesion: "Rapper",
        },
        {
            photo: "/b9neeraj.png",
            name: "Gurdas Maan",
            proffesion: "Indian Playback Singer",
        },
        {
            photo: "/b10ashu.png",
            name: "Neeraj Dhall",
            proffesion: "Singer & Performer",
        },
        {
            photo: "/b11indian.png",
            name: "Indian Ocean Band",
            proffesion: "Musical Band",
        },
        {
            photo: "/b12jyoti.png",
            name: "Jyoti Nooran",
            proffesion: "Punjabi Singer",
        },
        {
            photo: "/b13astitva.png",
            name: "Astitva The Band",
            proffesion: "Musical Band",
        },
        {
            photo: "/b14salman.png",
            name: "Salman Ali",
            proffesion: "Singer & Performer",
        },
        {
            photo: "/b15mohit.png",
            name: "Mohit Chopra",
            proffesion: "Singer & Performer",
        },
        {
            photo: "/b16sonu.png",
            name: "Sonu Gill",
            proffesion: "Singer & Performer",
        },
        {
            photo: "/b17sonu.png",
            name: "Sonu Kakkar",
            proffesion: "Singer",
        },
        {
            photo: "/b18bismil.png",
            name: "Bismil",
            proffesion: "Singer & Performer",
        },
    ];
    return (
        // min-[320px]:
        <div>
            <Navbar />

            <section className=''>
                <Header
                    image='/banner/bookArtistBanner.jpg'
                    img='/BookArtist.png'
                    page='Book Artist'
                />

                <div className=' relative bottom-48  min-[412px]:bottom-36  flex justify-center items-center px-4 sm:px-6 lg:px-8'>
                    <div className='relative border-4 rounded-full w-full sm:w-1/2   '>
                        <input
                            type='text'
                            className='rounded-full h-14 w-full pr-8 pl-5 z-0 focus:shadow focus:outline-none'
                            placeholder='Search anything...'
                        />

                        <div className='absolute top-5 right-3'>
                            <FaSearch
                                fa-2x
                                className=' text-gray-400 z-20 hover:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className='md:flex '>
                <div className='hidden md:block'>
                    <FilterArtist />
                </div>
                <div className='flex flex-col items-center md:items-start md:p-2 gap-3'>
                    <div className='flex flex-col text-2xl  md:text-4xl font-bold'>
                        <h1>BOOK YOUR FAVORITE</h1>
                        <h1 className='text-center md:text-start'>
                            ARTIST NOW!
                        </h1>
                    </div>
                    <div className='text-gray-400 text-xs sm:text-md md:text-lg p-2'>
                        <p>
                            Simple Tap the Book Artist Button and fill up the
                            form
                        </p>
                    </div>
                    <div className=' grid w-full   gap-10  min-[412px]:grid-cols-2  lg:grid-cols-4 sm:grid-cols-3  '>
                        {teams.map((item, i) => (
                            <BookArtistCard key={i} props={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* <ScrollTop /> */}
        </div>
    );
};

export default bookArtist;
