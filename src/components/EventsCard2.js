import React, { useEffect } from "react";
import Image from "next/image";
import Relax from "../../public/RelaxImage.png";

// Carousal ANd REsponsivness pending
//
//
//
//

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={Relax} />
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
          <h1 className="font-bold text-6xl">FUNKAAR 3 & ASH'AAR</h1>
          <p className="text-lg mt-5 break-keep ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper viverra tellus
            malesuada gravida nibh consequat in ut. Nibh enim arcu ac volutpat
            sed sit urna enim urna. Pretium massa scelerisque nunc quis velit
            risus purus erat. Mi magna fermentum scelerisque pellentesque id
            arcu. Morbi viverra lacus aliquam sed. Aenean viverra eget malesuada
            proin sed. Duis leo mauris leo dapibus.<br></br> Sapien egestas urna
            venenatis eu pharetra mi sit. Viverra scelerisque urna risus
            aliquam. Rhoncus tristique id risus adipiscing. Vestibulum enim nec
            ante nunc magna facilisis integer. Sem massa morbi nec id amet
            consequat amet. Ipsum sem tellus facilisi consequat in diam.
            Pellentesque faucibus diam mi vitae urna suspendisse. Cursus orci
            leo dapibus adipiscing habitasse volutpat viverra volutpat. A lectus
            urna gravida maecenas convallis ultricies velit. At quam quis non
            quis turpis mi maecenas mauris. Sodales sodales nec in faucibus.
            Tristique risus pellentesque diam neque enim.
          </p>
          <div className="max-w-2xl mx-auto"> </div>
        </div>

        <div className="w-1/4 h-full">
          <Image src={Relax} />
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
