import React from "react";
import PastImg from "../../public/PastEvent.png";
import Image from "next/image";

const PastEvent = () => {
  return (
    <div className="container mx-auto my-4 w-fit items-center  flex flex-row flex-wrap gap-20 items-align grid sm:grid-cols-3  p-2 pb-8">
      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={PastImg} className="top-0 left-0 " />
          <div className="absolute right-0 bottom-0 bg-neutral-800 p-4 mr-1 -mb-12 w-4/6">
            <div>
              <h1 className="text-5xl font-bold text-white">FUNKAAR 2</h1>
              <h1 className="text-2xl text-amber-500">FUNKAAR 2</h1>
              <div className="flex flex mt-2 items-start align-baseline gap-4">
                <div>
                  <button className=" font-bold bg-amber-300 p-2">
                    READ MORE
                  </button>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">JULY 2017</h1>
                  <h1 className="text-white">SUNDAY 9</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={PastImg} className="top-0 left-0 " />
          <div className="absolute right-0 bottom-0 bg-neutral-800 p-4 mr-1 -mb-12">
            <div>
              <h1 className="text-5xl font-bold text-white">FUNKAAR 2</h1>
              <h1 className="text-2xl text-amber-500">FUNKAAR 2</h1>
              <div className="flex flex mt-2 items-start align-baseline gap-4">
                <div>
                  <button className=" font-bold bg-amber-300 p-2">
                    READ MORE
                  </button>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">JULY 2017</h1>
                  <h1 className="text-white">SUNDAY 9</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={PastImg} className="top-0 left-0 " />
          <div className="absolute right-0 bottom-0 bg-neutral-800 p-4 mr-1 -mb-12">
            <div>
              <h1 className="text-5xl font-bold text-white">FUNKAAR 2</h1>
              <h1 className="text-2xl text-amber-500">FUNKAAR 2</h1>
              <div className="flex flex mt-2 items-start align-baseline gap-4">
                <div>
                  <button className=" font-bold bg-amber-300 p-2">
                    READ MORE
                  </button>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">JULY 2017</h1>
                  <h1 className="text-white">SUNDAY 9</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
