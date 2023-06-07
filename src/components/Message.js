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
                            <div className='w-60 h-96 '>
                                <video controls className=' rounded-lg '>
                                    <source
                                        src='/bites.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Rakesh Bedi jiis our mentor n guide for the
                                organisation He is Happy to see us working for
                                the art n artists his guidance is playing an
                                amazing role for us we are thankful and blessed
                                to have him as our senior Patron Rakesh ji is an
                                Indian film, stage and television actor. He is
                                known for his comic roles in films such as Mera
                                Damaad and Chashme Buddoor (1981). He has also
                                appeared in television shows like Yeh Jo Hai
                                Zindagi (1984), Shrimaan Shrimati (1994-1997),
                                Yes Boss (1999–2009) and Bechara Big B (2005).
                                Currently he is active in stage plays ,as a
                                writer,actor and director as well he is acting
                                in a tv serial &quot;Bhabhi ji Ghar pe
                                Hain&quot;nd many of the films are coming soon.
                                <div className='text-white font-bold text-3xl pt-8 uppercase'>
                                    Rakesh Bedi
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Actor
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}

                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96  '>
                                <video controls className='rounded-lg '>
                                    <source
                                        src='/bites4.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Hariharan Anantha Subramani, the living legend,
                                is the winner of the national award &quot;Padma
                                Shri&quot; given by the government of India. We
                                are proud and honored, as is our mentor and
                                guide for &quot;Help Artist India&quot;. We
                                appreciate his contribution to the organization.
                                <div className='text-white font-bold text-3xl pt-8 uppercase'>
                                    PADMA SHRI HARIHARAN
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary Singer
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96 '>
                                <video controls className=' rounded-lg '>
                                    <source
                                        src='/bites2.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Salim merchant is a youth icon in the industry
                                of Indian cinema He with Help Artist India as
                                our mentor, we are proud and happy to have him
                                as our mentor.Salim–Sulaiman is an Indian score
                                composer duo consisting of siblings salim
                                Merchants and Sulaiman Merchant. The duo compose
                                music for Hindi films they have done some great
                                projects like Bhumi and also worked with
                                international star lady Gaga,also worked on
                                I&apos;m A Freak By Enrique
                                <div className='text-white font-bold text-3xl pt-8 uppercase'>
                                    Salim Sulaiman
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary composer
                                </div>
                            </div>
                        </div>
                        {/* Slide 4 */}
                        <div className='flex flex-row justify-center pl-56 mt-16'>
                            <div className='w-60 h-96 '>
                                <video controls className=' rounded-lg '>
                                    <source
                                        src='/bites3.webm'
                                        type='video/webm'
                                    />
                                </video>
                            </div>
                            <div className='w-3/4 text-white p-14 pr-28 flex flex-col text-xl'>
                                Turaz ,Aas Mohammed Chaudhary is a Young talent
                                in the world of cinema Writing Turaz is an
                                Indian poet, lyricist, and script writer. He has
                                worked in television too,Turaz wrote more than
                                200 songs till date He is also very much famous
                                in &quot;Mushayras&quot; all over India n
                                abroad. Turaz believes that young talent should
                                come in limelight and they should be given
                                opportunity to showcase their talent, youth
                                should be knowing the literature and
                                culture.that&apos;s what brings us working
                                together for HAI we are grateful and honord to
                                Have his as our Mentor.
                                <div className='text-white font-bold text-3xl pt-8 uppercase'>
                                    A.M Turaz{" "}
                                </div>
                                <div className='font-moon-dance text-white'>
                                    Legendary writer{" "}
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
