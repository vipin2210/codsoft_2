import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArtistCard = ({ props }) => {
    const { photo, name, profession, twitter, insta, facebook, link, profile } =
        props;
    return (
        // card-body items-center text-center

        <div class='flex flex-col  justify-center items-center space-y-3 card  max-w-sm  bg-base-100  '>
            <div class='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <img
                    src={photo}
                    className='rounded-xl bg-gray-500  fill h-[262] w-[244]'
                    alt={photo}
                />
                <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#C58E00] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70'>
                    <div className='flex flex-row justify-around absolute inset-x-0 bottom-0 p-4 '>
                        <Link href={twitter} target='_blank'>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 3 31 31'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M15.2374 11.7257C15.2374 9.79422 16.8615 8.1876 18.793 8.21394C19.4694 8.22175 20.1291 8.42475 20.6929 8.79853C21.2567 9.17232 21.7005 9.70098 21.9711 10.321H25.0702L22.2345 13.1567C22.0515 16.0052 20.7905 18.6771 18.708 20.6292C16.6255 22.5812 13.8777 23.6669 11.0233 23.6655C8.21392 23.6655 7.51158 22.612 7.51158 22.612C7.51158 22.612 10.321 21.5585 11.7256 19.4514C11.7256 19.4514 6.10689 16.6421 7.51158 8.91629C7.51158 8.91629 11.0233 12.428 15.2374 13.1303V11.7257Z'
                                    stroke='white'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </Link>
                        <Link href={insta} target='_blank'>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 0 31 31'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M11 14.4375C12.8985 14.4375 14.4375 12.8985 14.4375 11C14.4375 9.10152 12.8985 7.5625 11 7.5625C9.10152 7.5625 7.5625 9.10152 7.5625 11C7.5625 12.8985 9.10152 14.4375 11 14.4375Z'
                                    stroke='white'
                                    stroke-width='1.5'
                                    stroke-miterlimit='10'
                                />
                                <path
                                    d='M14.7812 3.09375H7.21875C4.94058 3.09375 3.09375 4.94058 3.09375 7.21875V14.7812C3.09375 17.0594 4.94058 18.9062 7.21875 18.9062H14.7812C17.0594 18.9062 18.9062 17.0594 18.9062 14.7812V7.21875C18.9062 4.94058 17.0594 3.09375 14.7812 3.09375Z'
                                    stroke='white'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M15.4688 7.5625C16.0383 7.5625 16.5 7.10079 16.5 6.53125C16.5 5.96171 16.0383 5.5 15.4688 5.5C14.8992 5.5 14.4375 5.96171 14.4375 6.53125C14.4375 7.10079 14.8992 7.5625 15.4688 7.5625Z'
                                    fill='black'
                                />
                            </svg>
                        </Link>
                        <Link href={facebook} target='_blank'>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 0 31 31'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z'
                                    stroke='white'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M14.4375 7.56252H13.0625C12.7913 7.56138 12.5226 7.61395 12.2719 7.7172C12.0211 7.82045 11.7933 7.97233 11.6016 8.16408C11.4098 8.35582 11.2579 8.58364 11.1547 8.83439C11.0515 9.08514 10.9989 9.35385 11 9.62502V19.25'
                                    stroke='white'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M8.25 12.375H13.75'
                                    stroke='white'
                                    stroke-width='1.4'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </Link>
                        <Link href={link} target='_blank'>
                            <svg
                                width='44'
                                height='44'
                                viewBox='0 -5 31 31'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M11.488 0.632H13.168L9.648 9H8.144L6.64 5.224L5.136 9H3.632L0.096 0.632H1.776L4.464 7.288L5.648 4.2L4.208 0.648H5.696L6.64 3.256L7.568 0.648H9.056L7.632 4.2L8.816 7.288L11.488 0.632Z'
                                    fill='white'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 class='card-title text-xl sm:text-lg lg:text-xl text-center font-bold'>
                    {name}
                </h1>
            </div>
            <div class='card-title text-xl'>
                <p>{profession}</p>
            </div>

            <div class='m-4 pb-3'>
                <Link
                    target='_blank'
                    href={profile}
                    class='bg-transparent hover:bg-gray-900 text-black-700 font-semibold hover:text-white py-2 px-6 border border-gray-900 hover:border-transparent rounded'
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default ArtistCard;
