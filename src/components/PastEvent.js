import React from "react";
import Image from "next/image";
import Link from "next/link";

const PastEvent = ({ props }) => {
  const { poster, name, title, month, year, day, date, link } = props;
  return (
    <div className="h-96 ">
      <div className="">
        <Image src={poster} alt="poster" height={320} width={370} />
      </div>
      <div className="flex w-full text-white justify-end uppercase ">
        <div className="relative  w-72 mr-2 p-1 bottom-24  bg-[#000215]">
          <h1 className="font-extrabold text-5xl grid">{name} </h1>
          <h2 className="text-[#DC9407] grid text-2xl">{title}</h2>
          <div className="flex flex-row justify-between ">
            <div className="bg-[#E2B55E] text-black text-base py-3 px-5 font-bold hover:bg-[#DC9407] m-2">
              Read More
            </div>
            <div>
              <h4 className="text-2xl">
                {month} {year}
              </h4>
              <h5 className="text-base">
                {day} {date}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
