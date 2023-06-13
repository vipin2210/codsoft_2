import React from "react";
import { useForm } from "react-hook-form";

export const formH = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div className="flex flex-col justify-center bg-[#0e101c]">
      <div className=" text-center sm:text-start font-bold text-[#FFD12F]  p-10 border-b-2 border-[rgb(79,98,148)]">
        <h1 className="text-4xl">HelpArtistIndia Partner</h1>
        <p className="text-white mt-2">
          This free lorem ipsum generator lets you choose how many sentences,
          paragraphs or list items you want. You can also select to include HTML
          markup and specify how big the text should be. It currently supports
          standard Lorem Ipsum, Marvel Ipsum, Batman Ipsum and Pokemon Ipsum.
        </p>
      </div>

      <form className="flex flex-col gap-5 items-center m-10  text-white">
        <div className="flex flex-col md:flex-row gap-9">
          <div className="flex flex-col gap-5 ">
            <div>
              <label className=" font-extrabold" htmlFor="namec">
                Name of the Org\Company
              </label>
              <input
                className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                type="text"
                id="namec"
                {...register("namec")}
              />
            </div>
            <div>
              <label className=" font-extrabold" htmlFor="gstNo">
                GST No.
              </label>
              <input
                className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                type="text"
                id="gstNo."
                {...register("gstNo")}
              />
            </div>
            <div>
              <label className=" font-extrabold" htmlFor="aadhar">
                Aadhar Card of the Org
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white "
                type="file"
                id="aadhar"
                {...register("aadharcard")}
              />
            </div>
            <div className="hidden md:block">
              <label className=" font-extrabold" htmlFor="purpose">
                Purpose
              </label>
              <textarea
                className=" block w-full border-4 rounded-md p-1  text-black text-[14px] h-28"
                type="text"
                id="purpose"
                rows="8"
                placeholder="Write...."
                {...register("purpose")}
              ></textarea>
            </div>
            <div className=" block md:hidden">
              <label className=" font-extrabold" htmlFor="pancard">
                PAN Card of the Org
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-black   text-[14px] bg-white "
                type="file"
                id="pancard"
                {...register("pancard")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div>
              <label className=" font-extrabold" htmlFor="username">
                Name of the Contact Person
              </label>
              <input
                className=" w-full border-4 rounded-md p-1 text-black text-[14px]"
                type="text"
                id="username"
                {...register("username")}
              />
            </div>

            <div>
              <label className=" font-extrabold" htmlFor="location">
                Location
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-black text-[14px]"
                type="text"
                id="location"
                {...register("location")}
              />
            </div>
            <div className="hidden md:block">
              <label className=" font-extrabold" htmlFor="pancard">
                PAN Card of the Org
              </label>
              <input
                className=" w-full border-4 rounded-md p-1 text-black   text-[14px] bg-white "
                type="file"
                id="pancard"
                {...register("pancard")}
              />
            </div>
            <div className="block md:hidden">
              <label className=" font-extrabold" htmlFor="purpose">
                Purpose
              </label>
              <textarea
                className=" block w-full border-4 rounded-md p-1  text-black text-[14px] h-28"
                type="text"
                id="purpose"
                rows="8"
                placeholder="Write...."
                {...register("purpose")}
              ></textarea>
            </div>
            <div>
              <div className="">
                <label className=" font-extrabold" htmlFor="date">
                  Date
                </label>
                <input
                  className=" w-full border-4 rounded-md p-1  text-black text-[14px]"
                  type="date"
                  id="date"
                  {...register("date")}
                />
              </div>

              <button className=" w-full sm:w-fit  border   uppercase px-[50px] py-[15px] rounded-lg mt-5 hover:bg-red-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default formH;
