import React from "react";
import { useForm } from "react-hook-form";

export const formH = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div className="flex flex-col justify-center bg-[#0e101c]">
      <div className=" font-bold text-[#FFD12F]  p-10 border-b-2 border-[rgb(79,98,148)]">
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
                Name of the ORG\Company
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
                Aadhar CARD of the ORG
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-white text-[14px]"
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
                PAN CARD of the ORG
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-white text-[14px]"
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
                PAN CARD of the ORG
              </label>
              <input
                className=" w-full border-4 rounded-md p-1   text-white text-[14px]"
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

              <button className="  border   uppercase px-[50px] py-[15px] rounded-lg mt-5 hover:bg-red-600">
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

/*
body {
  background: #0e101c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  font-weight: 100;
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 98, 148);
}

.form {
  background: #0e101c;
  max-width: 400px;
  margin: 0 auto;
}

p {
  color: #bf1650;
}

p::before {
  display: inline;
  content: "⚠ ";
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
}

label {
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
}

button[type="submit"],
input[type="submit"] {
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
}

button[type="submit"]:hover,
input[type="submit"]:hover {
  background: #bf1650;
}

button[type="submit"]:active,
input[type="button"]:active,
input[type="submit"]:active {
  transition: 0.3s all;
  transform: translateY(3px);
  border: 1px solid transparent;
  opacity: 0.8;
}

input:disabled {
  opacity: 0.4;
}

input[type="button"]:hover {
  transition: 0.3s all;
}

button[type="submit"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}

.App {
  max-width: 600px;
  margin: 0 auto;
}

button[type="button"] {
  display: block;
  appearance: none;
  background: #333;
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}

hr {
  margin-top: 30px;
}

button {
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}
*/
