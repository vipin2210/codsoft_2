import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const SimpleCarousal = ({ image1, image2 }) => {
    return (
        <div className=''>
            <section className='mb-10 px-10 mx-auto'>
                <div className='flex gap-3 mx-auto'>
                    <img className='w-32 sm:w-56' src={image1} />
                    <img className='w-32 sm:w-56' src={image2} />
                </div>
                {/* <Glider
          className="glider-container p-5 "
          // draggable
          hasArrows
          hasDots
          // itemWidth={6}
          slidesToShow={1}
          rewind
          // exactWidth

          responsive={[
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          <div>
            <img src="/serviceImg1.png" />
          </div>
          <div>
            <img src="/serviceImg2.png" />
          </div>
          <div>
            <img src="/serviceImg1.png" />
          </div>
          <div>
            <img src="/serviceImg2.png" />
          </div>
          <div>
            <img src="/serviceImg1.png" />
          </div>
          <div>
            <img src="/serviceImg2.png" />
          </div>
        </Glider> */}
                {/* <Glider
          className="glider-container"
          draggable
          hasDots
          slidesToShow={1}
          scrollLock
          hasArrows
          arrows={{
            prev: "leftArrowEl.current",
            next: "rightArrowEl.current",
          }}
        >
          <div>
            <span>1</span>
          </div>
        </Glider> */}
            </section>{" "}
        </div>
    );
};

export default SimpleCarousal;
