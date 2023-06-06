import React from "react";

const ProfileCard = ({ props }) => {
    const { photo, name, profession } = props;
    return (
        <div class='flex flex-col items-center justify-center col-span-1'>
            <div class='relative p-5'>
                <div class='absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full  bg-yellow-600'></div>
                <img class='relative z-20 w-full rounded-full' src={photo} />
            </div>

            <div class='space-y-2 text-center z-50 mt-4'>
                <div class='space-y-1 text-lg font-medium leading-6'>
                    <h2 className=' text-4xl text-center uppercase px-14 py-1 font-extrabold'>
                        {name}
                    </h2>
                    <p>{profession}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
