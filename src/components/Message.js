import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const Message = () => {
    return (
        <div>
            

            <div className='bg-[#0D0F27] w-full h-5/6 p-8'>
                <h1 className='font-bold text-white text-center text-4xl'>
                    <div>Legends Message For</div>
                    <div>Help Artist India</div>
                </h1>
                <section>
                    <Glider
                        draggable
                        hasArrows
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {/* Slide 1 */}
                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96 bg-[#D9D9D9] rounded-md'>
                                <video controls className='  '>
                                    <source
                                        src='/bites.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Hariharan Anantha Subramani, the living legend,
                                is the winner of the national award "Padma Shri"
                                given by the government of India. We are proud
                                and honored, as is our mentor and guide for
                                "Help Artist India". We appreciate his
                                contribution to the organization.
                                <div className='text-white font-bold text-3xl pt-8'>
                                    PADMA SHRI HARIHARAN{" "}
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Singer{" "}
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}

                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60  bg-[#D9D9D9] rounded-md'>
                                <video controls className='  '>
                                    <source
                                        src='/bites4.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Hariharan Anantha Subramani, the living legend,
                                is the winner of the national award "Padma Shri"
                                given by the government of India. We are proud
                                and honored, as is our mentor and guide for
                                "Help Artist India". We appreciate his
                                contribution to the organization.
                                <div className='text-white font-bold text-3xl pt-8'>
                                    PADMA SHRI HARIHARAN{" "}
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Singer{" "}
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96 bg-[#D9D9D9] rounded-md'>
                                <video controls className='  '>
                                    <source
                                        src='/bites2.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Hariharan Anantha Subramani, the living legend,
                                is the winner of the national award "Padma Shri"
                                given by the government of India. We are proud
                                and honored, as is our mentor and guide for
                                "Help Artist India". We appreciate his
                                contribution to the organization.
                                <div className='text-white font-bold text-3xl pt-8'>
                                    PADMA SHRI HARIHARAN{" "}
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Singer{" "}
                                </div>
                            </div>
                        </div>
                        {/* Slide 4 */}
                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96 bg-[#D9D9D9] rounded-md'>
                                <video controls className='  '>
                                    <source
                                        src='/bites3.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Hariharan Anantha Subramani, the living legend,
                                is the winner of the national award "Padma Shri"
                                given by the government of India. We are proud
                                and honored, as is our mentor and guide for
                                "Help Artist India". We appreciate his
                                contribution to the organization.
                                <div className='text-white font-bold text-3xl pt-8'>
                                    PADMA SHRI HARIHARAN{" "}
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Singer{" "}
                                </div>
                            </div>
                        </div>
                    </Glider>
                </section>
                <hr className='w-11/12 h-1.5 my-9 border-0 rounded bg-yellow-600 mx-auto'></hr>
            </div>
        </div>
    );
};

export default Message;
