import Glider from "react-glider";
import "glider-js/glider.min.css";
import React from "react";

const SimpleCarousal = () => {
  return (
      <div>
          <Glider
              className='glider-container p-5 '
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
              <div className='h-40'>
                  <img className='h-full' src='/comingsoon.png' />
              </div>
              <div className='h-40'>
                  <img className='h-full' src='/comingsoon.png' />
              </div>
          </Glider>
      </div>
  );
};

export default SimpleCarousal;
