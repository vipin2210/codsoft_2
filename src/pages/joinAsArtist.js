import Navbar from "@/components/Navbar";
import React from "react";
import { useForm } from "react-hook-form";
export const JoinAsArtist = () => {
    const form = useForm();
    const { register } = form;
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center bg-[#0e101c]'>
                <div className=' font-bold text-[#FFD12F]  p-10 border-b-2 border-[hsl(223,30%,45%)] text-center'>
                    <h1 className='text-4xl md:text-center'>Join as Artist</h1>
                    {/* <p className='text-white mt-2 '>
                        This free lorem ipsum generator lets you choose how many
                        sentences, paragraphs or list items you want. You can
                        also select to include HTML markup and specify how big
                        the text should be. It currently supports standard Lorem
                        Ipsum, Marvel Ipsum, Batman Ipsum and Pokemon Ipsum.
                    </p> */}
                </div>
                <div className='flex flex-row justify-center p-7 pb-4 '>
                    <img src='/logo.png' className='w-64' />
                </div>

                <form className='flex flex-col gap-5 items-center m-10  text-white'>
                    <div className='flex flex-col md:flex-row gap-9'>
                        <div className='flex flex-col gap-5 md:w-1/2 '>
                            <div className='flex flex-col justify-start md:hidden'>
                                <div className='font-extrabold'>Event Name<span className="text-red-500 text-[18px]"> *</span></div>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    FUNKAR 3
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    ASHAAR
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    BOTH
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    Other...
                                    <input
                                        className='w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        type='text'
                                        id='other'
                                        {...register("other")}
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='namec'
                                >
                                    Name<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                    type='text'
                                    id='namec'
                                    required
                                    {...register("namec")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='age'
                                >
                                    Age<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                    type='number'
                                    id='age'
                                    required
                                    {...register("age")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='contact'
                                >
                                    Contact No.<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black text-[14px]'
                                    type='number'
                                    id='contact'
                                    required
                                    {...register("contact")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='address'
                                >
                                    Address<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black text-[14px]'
                                    type='text'
                                    id='adress'
                                    required
                                    {...register("address")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='username'
                                >
                                    Artist Category<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1 text-black text-[14px]'
                                    type='text'
                                    id='artist'
                                    {...register("artist")}
                                />
                            </div>
                            <div className='sm:flex flex-col justify-start hidden'>
                                <div className='font-extrabold'>Event Name<span className="text-red-500 text-[18px]"> *</span></div>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    FUNKAR 3
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    ASHAAR
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    BOTH
                                </label>
                                <label htmlFor='event'>
                                    <input
                                        {...register("fu", { required: true })}
                                        type='radio'
                                        name='fu'
                                        value='event'
                                        className='form-check-input text-[14px]'
                                        id='event'
                                    />{" "}
                                    Other...
                                    <input
                                        className='w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        type='text'
                                        id='other'
                                        {...register("other")}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='location'
                                >
                                    Father&apos;s Name<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black text-[14px]'
                                    type='text'
                                    id='father'
                                    {...register("father")}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='mother'
                                >
                                    Mother&apos;s Name<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black text-[14px]'
                                    type='text'
                                    id='mother'
                                    required
                                    {...register("mother")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='occu'
                                >
                                    Occupation<span className="text-red-500 text-[18px]"> *</span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black text-[14px]'
                                    type='text'
                                    id='occu'
                                    required
                                    {...register("occu")}
                                />
                            </div>

                            <div className=''>
                                <div className=''>
                                    <label
                                        className=' font-extrabold'
                                        htmlFor='instagram'
                                    >
                                        Instagram Profile Link<span className="text-red-500 text-[18px]"> *</span>
                                    </label>
                                    <input
                                        className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        type='varchar'
                                        id='instagram'
                                        required
                                        {...register("instagram")}
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label
                                        className=' font-extrabold '
                                        htmlFor='date'
                                    >
                                        Date<span className="text-red-500 text-[18px]"> *</span>
                                    </label>
                                    <input
                                        className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        type='date'
                                        id='date'
                                        required
                                        {...register("date")}
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label
                                        className=' font-extrabold'
                                        htmlFor='date'
                                    >
                                        Brief Intro (min 100 words)<span className="text-red-500 text-[18px]"> *</span>
                                    </label>
                                    <textarea
                                        className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        minLength='100'
                                        rows='6'
                                        required
                                        id='bref'
                                        {...register("bref")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='border  uppercase px-[50px] py-[15px] rounded-lg mt-5 hover:bg-neutral-800 bg-[#ff0000]'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default JoinAsArtist;
