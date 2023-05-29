import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const service = () => {
  return (
    <div className="bg-neutral-800">
      <div className="relative">
        <img className="object-fill  h-96 w-full" src="/Frame.png" />

        <h1 className="absolute top-10 l  text-6xl font-bold  text-white  ">
          CAMPAIGN
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="">
          <div>
            <h1 className="text-white font-bold text-6xl">
              Singing Competition By Help Artist India
            </h1>
            <div className="text-white text-lg">
              <hr />
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper viverra
                tellus malesuada gravida nibh consequat in ut. Nibh enim arcu ac
                volutpat sed sit urna enim urna. Pretium massa scelerisque nunc
                quis velit risus purus erat. Mi magna fermentum scelerisque
                pellentesque id arcu. Morbi viverra lacus aliquam sed. Aenean
                viverra eget malesuada proin sed. Duis leo mauris leo dapibus .
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper viverra
                tellus malesuada gravida nibh consequat in ut. Nibh enim arcu ac
                volutpat sed sit urna enim urna. Pretium massa scelerisque nunc
                quis velit risus purus erat. Mi magna fermentum scelerisque
                pellentesque id arcu. Morbi viverra lacus aliquam sed. Aenean
                viverra eget malesuada proin sed. Duis leo mauris leo dapibus.
              </p>
              <button>DONATE NOW</button>
            </div>
          </div>
          <div>
            <Carousel autoPlay>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
                />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
                />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
                />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
                />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
                />
                <p className="legend">Legend 5</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg"
                />
                <p className="legend">Legend 6</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
                />
                <p className="legend">Legend 7</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
                />
                <p className="legend">Legend 8</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg"
                />
                <p className="legend">Legend 9</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
                />
                <p className="legend">Legend 10</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg"
                />
                <p className="legend">Legend 11</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg"
                />
                <p className="legend">Legend 12</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg"
                />
                <p className="legend">Legend 13</p>
              </div>
              <div>
                <img
                  alt=""
                  src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg"
                />
                <p className="legend">Legend 14</p>
              </div>
            </Carousel>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
