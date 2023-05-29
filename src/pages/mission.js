import React from "react";

const mission = () => {
  return (
    <div>
      <div className="">
        <img className="object-fill  h-96 w-full" src="/Frame.png" />

        <h1 className="relative bottom-80 text-center text-6xl font-bold  text-white ">
          OUR MISSION
        </h1>
      </div>

      <div className="relative container -mt-60 z-20 ">
        <div className="flex mx-auto grid grid-cols-4 gap-6 w-3/4 rounded-3xl p-6  bg-neutral-800">
          <div>
            <img src="/missionImg1.png" />
          </div>
          <div>
            <img src="/missionImg2.png" />
          </div>
          <div>
            <img src="/missionImg3.png" />
          </div>
          <div>
            <img src="/missionImg4.png" />
          </div>
          <div>
            <img src="/missionImg5.png" />
          </div>
          <div>
            <img src="/missionImg6.png" />
          </div>
          <div>
            <img src="/missionImg7.png" />
          </div>
          <div>
            <img src="/missionImg8.png" />
          </div>
        </div>
      </div>

      <div className="relative container mx-auto mt-10">
        <h1 className="text-5xl font-bold text-center">Vision and Mission</h1>
        <div className="text-center">
          <p className="text-xl mt-6">
            We are aiming at the art and artists of India. We are trying to
            uplift and save the heritage of all art forms in the nation; we are
            dedicated to the new art forms and provide them with a stage to
            showcase their talent. We are going places, across India, to find
            out the artists of all performing arts to be shown to the world.
          </p>
          <ul className="text-lg  xl:bottom-40 lg:bottom-20 md:-bottom-28 sm:bottom-0 mt-10">
            <li className="inline-block ">Musical training</li>
            <li className="inline-block ml-20 ">Instrument distribution</li>
            <li className="inline-block ml-20 ">Gurus/ coach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default mission;
