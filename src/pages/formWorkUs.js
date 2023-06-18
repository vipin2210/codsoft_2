import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Navbar from "@/components/Navbar";

export const FormWorkUs = () => {
    const form = useForm();
    const { register, control } = form;
    return (
        // bg-[#0e101c]
        <div>
            <Navbar />
            <div className='flex flex-col justify-center  bg-[#0e101c]'>
                <div className=' text-center  font-bold text-[#FFD12F]  p-10 border-b-2 border-[rgb(79,98,148)]'>
                    <h1 className='text-4xl'>HelpArtistIndia work with US</h1>
                    <p className='text-white mt-2'>
                        This free lorem ipsum generator lets you choose how many
                        sentences, paragraphs or list items you want. You can
                        also select to include HTML markup and specify how big
                        the text should be. It currently supports standard Lorem
                        Ipsum, Marvel Ipsum, Batman Ipsum and Pokemon Ipsum.
                    </p>
                </div>

                <form className='flex flex-col gap-5 items-center m-10  text-white'>
                    <div className='flex flex-col md:flex-row gap-10 '>
                        <div className='flex flex-col gap-5 '>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='name '
                                >
                                    Name
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                    type='text'
                                    id='name'
                                    required
                                    {...register("name")}
                                />
                            </div>

                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='dob'
                                >
                                    Date of birth
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                    type='text'
                                    id='dob'
                                    required
                                    {...register("dob")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='contact'
                                >
                                    Contact No.
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white '
                                    type='text'
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
                                    Address
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white '
                                    type='text'
                                    id='address'
                                    required
                                    {...register("address")}
                                />
                            </div>
                            <div className=' '>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='email'
                                >
                                    Email
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white '
                                    type='text'
                                    id='email'
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='username'
                                >
                                    Applying for
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4   bg-white rounded-md p-1 text-black text-[14px]'
                                    type='file'
                                    id='applying'
                                    required
                                    {...register("applyingFor")}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div className=' '>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='higherEdu'
                                >
                                    Higher Education
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white '
                                    type='text'
                                    id='higherEdu'
                                    required
                                    {...register("higherEdu")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='experience'
                                >
                                    Experience
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-2 rounded-md p-1  bg-white  text-black text-[14px]'
                                    type='file'
                                    id='experience'
                                    required
                                    {...register("experience")}
                                />
                            </div>
                            <div className=''>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='industry'
                                >
                                    Industry
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1 text-black   text-[14px] bg-white '
                                    type='text'
                                    id='industry'
                                    required
                                    {...register("industry")}
                                />
                            </div>
                            <div className=''>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='aadhaar'
                                >
                                    Aadhaar no.
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                    type='text'
                                    id='aadhaar'
                                    required
                                    {...register("aadhaar")}
                                />
                            </div>
                            <div>
                                <label
                                    className=' font-extrabold'
                                    htmlFor='uploadCv'
                                >
                                    Upload CV
                                    <span className='text-red-500 text-[18px]'>
                                        {" "}
                                        *
                                    </span>
                                </label>
                                <input
                                    className=' w-full border-2 bg-white rounded-md p-1   text-black text-[14px]'
                                    type='file'
                                    id='uploadCv'
                                    required
                                    {...register("uploadCv")}
                                />
                            </div>
                            <div>
                                <div className=''>
                                    <label
                                        className=' font-extrabold'
                                        htmlFor='date'
                                    >
                                        Date
                                        <span className='text-red-500 text-[18px]'>
                                            {" "}
                                            *
                                        </span>
                                    </label>
                                    <input
                                        className=' w-full border-4 rounded-md p-1  text-black text-[14px]'
                                        type='date'
                                        id='date'
                                        required
                                        {...register("date")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='   border   uppercase px-[50px] py-[15px] rounded-lg mt-5 bg-[#FF0000]  text-white hover:bg-neutral-800'>
                        Submit
                    </button>
                </form>
                {/* <DevTool control={control} /> */}
            </div>
        </div>
    );
};

export default FormWorkUs;
