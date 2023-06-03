import React, { useEffect } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/RelaxImage.png" alt="Relax" />
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

const EventsCard2 = () => {
  return (
    <div className="bg-neutral-900 pt-5">
      <div className="container mx-auto flex gap-10 mt-12 text-white ">
        <div className="w-3/4">
          <h1 className="font-bold text-6xl">FUNKAAR 3 & AS&apos;HAAR</h1>
          <p className="text-lg mt-5 break-keep ">
            Rumaniyat a musical night with Padma Shri Hariharan ,witness the
            mystic performance of living legend at F Bar and Lounge Noida BOOK
            YOUR TABLES NOW HURRY !! Help Artist India Is All Set For Major
            Musical Events 2023 With... Big Artists Of The Industry ,It Will Be
            All For Fundraising For The NGO Dedicated To Upliftment Of Art And
            Artists Who Need Help To Live Their Dream Of Being An Artist
            Announcement Of These Musical Events Has Been Met With Enthusiasm By
            Music Fans Across India.
          </p>
          <div className="max-w-2xl mx-auto"> </div>
        </div>

        <div className="w-1/4 h-full">
          <img src="/RelaxImage.png" alt="Relax" />
          <div className="flex mt-2 items-start">
            <div className="">
              <hl className="text-8xl text-amber-500 ">9</hl>
            </div>
            <div className="mt-2 ml-10">
              <h1 className="text-4xl ">JULY</h1>
              <h2 className="text-2xl"> 2017</h2>
              <h2 className="">SUNDAY</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard2;
