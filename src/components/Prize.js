import React from "react";

const Prize = ({ props }) => {
    const { image } = props;
    return (
        <div>
            <div className='card bg-[#FFD12F] grid justify-center'>
                <div className='p-1'>
                    <img
                        src={image}
                        alt={image}
                        className='object-fill w-96 h-72 '
                    />
                </div>
            </div>
        </div>
    );
};

export default Prize;
