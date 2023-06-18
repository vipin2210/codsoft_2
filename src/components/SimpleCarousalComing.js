import Glider from "react-glider";
import "glider-js/glider.min.css";
import React from "react";

const SimpleCarousalComing = ({}) => {
    return (
        <div className=' mr-10 ml-10 sm:mr-4 sm:ml-4 '>
            <Glider
                className='glider-container'
                // draggable
                scrollPropagate
                hasArrows
                hasDots
                // itemWidth={6}
                slidesToShow={1}
                rewind
                // exactWidth
                responsive={[
                    {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ]}
            >
                {/* {console.log(images)} */}

                {/* {props.images.map((element, i) => {
                    <div className=' h-40 bg-white ' key={i}>
                        <img
                            className='object-cover rounded-2xl h-full'
                            src={element.img}
                        />
                        <h1 className='text-white'>{element.img}</h1>
                    </div>;
                    {
                        console.log(`${element.img}`);
                    }
                })} */}

                <div className=' h-24 w-16'>
                    <img
                        className='object-cover rounded-2xl'
                        src='/comingsoon.png'
                    />
                </div>
                <div className=' h-24 w-16'>
                    <img
                        className='object-cover rounded-2xl'
                        src='/comingsoon.png'
                    />
                </div>
            </Glider>
        </div>
    );
};

export default SimpleCarousalComing;
