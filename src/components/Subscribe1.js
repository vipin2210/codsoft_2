import React from "react";
import SubscribeButton from "./SubscribeButton";
import Image from "next/image";
import someImage from "../../public/logo.png";

const Subscribe1 = () => {
  return (
    <div>
      <div className="container flex flex-col flex-wrap items-center justify-evenly py-5 mx-auto md:flex-row max-w-7xl tails-selected-element px-5">
        <div className="relative flex flex-col md:flex-row">
          {/* <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              tails
              <span className="text-indigo-600" data-primary="indigo-600">
                .
              </span>
            </span>
          </a> */}
          <Image src={someImage} className="hidden sm:flex " />

          <div className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l-4 md:border-red-500  "></div>
          <div className="text-2xl font-bold">
            <p>Sign Up To Fet Updates </p>
            <p>& News About Us..</p>
          </div>
        </div>

        <div className="inline-flex flex-col items-center ml-5 space-x-6 lg:justify-end">
          <div className="inline-flex flex-row items-center ml-5 space-x-6 lg:justify-end mb-5">
            <div>
              <input
                type="text"
                className="block w-full px-3 py-3 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-lg"
                placeholder="Enter Your Email"
              />
            </div>

            <SubscribeButton />
          </div>
          <div>
            {/* Term */}
            <div className="flex ">
              <div className="flex items-center h-5 ">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <label for="helper-checkbox" className="pr-11">
                  I agree that my submitted data is being collected
                </label>
                <p>and stored.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe1;
