import React from 'react'

const Prize = ({ props }) => {
    const { image } = props;
    return (
        <div>
            <div className='card bg-base-100 grid justify-center'>
                <img src={image} alt={image} className='object-cover sm:w-52 w-96 h-80' />
            </div>

        </div>
    )
}

export default Prize
