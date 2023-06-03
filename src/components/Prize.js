import React from "react";

const Prize = ({ props }) => {
    const { image } = props;
    return (
        <div>
            <div className='card bg-base-100 grid justify-center'>
                <div className='p-4'>
                    <img
                        src={image}
                        alt={image}
                        className='object-fill w-96 rounded-3xl h-72 '
                    />
                </div>
            </div>
        </div>
    );
};

export default Prize;
