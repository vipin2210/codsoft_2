
import Navbar from "@/components/Navbar";
import React from "react";
import { useForm } from "react-hook-form"
export const volunteer = () => {
    const form = useForm();
    const { register } = form;
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center bg-[#0e101c]">
                <div className=" font-bold text-[#FFD12F]  p-10 border-b-2 border-[hsl(223,30%,45%)] text-center">
                    <h1 className="text-4xl md:text-center">Help Artist India Volunteer</h1>
                    <p className="text-white mt-2 ">
                        This free lorem ipsum generator lets you choose how many sentences,
                        paragraphs or list items you want. You can also select to include HTML
                        markup and specify how big the text should be. It currently supports
                        standard Lorem Ipsum, Marvel Ipsum, Batman Ipsum and Pokemon Ipsum.
                    </p>
                </div>

                <form className="flex flex-col gap-5 items-center m-10  text-white">


                    <div className="flex flex-col md:flex-row gap-9">

                        <div className="flex flex-col gap-5 md:w-1/2 ">

                            <div>
                                <label className=" font-extrabold" htmlFor="namec">
                                    Name
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                                    type="text"
                                    id="namec"
                                    required
                                    {...register("namec")}
                                />
                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="age">
                                    Age
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                                    type="number"
                                    id="age"
                                    required
                                    {...register("age")}
                                />
                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="qua">
                                    Qualification
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1   text-black text-[14px]"
                                    type="text"
                                    id="qua"
                                    required
                                    {...register("qua")}
                                />
                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="loc">
                                    Location
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1   text-black text-[14px]"
                                    type="text"
                                    id="loc"
                                    required
                                    {...register("loc")}
                                />

                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="con">
                                    Emergency Contact No.
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1 text-black text-[14px]"
                                    type="text"
                                    id="con"
                                    {...register("con")}
                                />
                            </div>

                        </div>
                        <div className="flex flex-col gap-5 ">


                            <div>
                                <label className=" font-extrabold" htmlFor="aadhar">
                                    Aadhar Card No.
                                </label>
                                <input
                                    className=" w-full border-4 rounded-md p-1   text-black text-[14px]"
                                    type="number"
                                    id="aadhar"
                                    {...register("aadhar")}
                                    required
                                />
                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="doc">
                                    PDF for Document
                                </label>
                                <input
                                    className=" w-full border-2 rounded-md p-1 bg-white  text-black text-[14px]"
                                    type="file"
                                    id="doc"
                                    required
                                    {...register("doc")}
                                />
                            </div>
                            <div>
                                <label className=" font-extrabold" htmlFor="photo">
                                    Photograph
                                </label>
                                <input
                                    className=" w-full border-2 rounded-md p-1 bg-white  text-black text-[14px]"
                                    type="file"
                                    id="photo"
                                    required
                                    {...register("photo")}
                                />
                            </div>

                            <div className="">

                                <div className="">
                                    <label className=" font-extrabold " htmlFor="date">
                                        Date
                                    </label>
                                    <input
                                        className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                                        type="date"
                                        id="date"
                                        required
                                        {...register("date")}
                                    />
                                </div>
                                <button className="border uppercase px-[50px] py-[15px] rounded-lg mt-5 hover:bg-neutral-800 bg-[#ff0000] ">
                                    Submit
                                </button>

                            </div>

                        </div>

                    </div>

                </form>
            </div>
        </div>

    );
};
export default volunteer