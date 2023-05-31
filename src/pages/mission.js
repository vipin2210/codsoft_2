import Breadcrum from "@/components/Breadcrum";
import Navbar from "@/components/Navbar";
import React from "react";

const mission = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-8'>
                <div className=''>
                    <img
                        className='object-fill  h-96 w-full'
                        src='/Frame.png'
                        alt='Frame'
                    />
                    <Breadcrum name={"Mission"} page={"Mission"} />
                </div>

                <div className='relative container -mt-60 z-20 mx-auto '>
                    <div className='flex mx-auto grid grid-cols-4 gap-6 w-3/4 rounded-3xl p-6  bg-neutral-800'>
                        <div>
                            <img src='/missionImg1.png' />
                        </div>
                        <div>
                            <img src='/missionImg2.png' />
                        </div>
                        <div>
                            <img src='/missionImg3.png' />
                        </div>
                        <div>
                            <img src='/missionImg4.png' />
                        </div>
                        <div>
                            <img src='/missionImg5.png' />
                        </div>
                        <div>
                            <img src='/missionImg6.png' />
                        </div>
                        <div>
                            <img src='/missionImg7.png' />
                        </div>
                        <div>
                            <img src='/missionImg8.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mission;
