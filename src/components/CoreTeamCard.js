import React from "react";

const CoreTeamCard = ({ props }) => {
    const { photo, name, profession } = props;
    return (
        <div class='flex flex-col items-center justify-center col-span-1'>
            <div class='relative p-5'>
                <div class='absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full  bg-yellow-600'></div>
                <img class='relative z-20 w-full rounded-full' src={photo} />
            </div>

            <div class='space-y-2 text-center z-50 -mt-4'>
                <div class='space-y-1 text-lg font-medium leading-6'>
                    <h3 className='rounded-full bg-[#452B5B] text-lg text-white px-14 py-1 '>
                        {name}
                    </h3>
                    <p>{profession}</p>
                </div>
            </div>
        </div>
    );
};

export default CoreTeamCard;
