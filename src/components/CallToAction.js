import Image from "next/image";
import NavigationArrow from "../../public/NavigationArrow.png";
import Vector from "../../public/Vector.png";
import Watch from "../../public/Watch.png";
import EllipseBlue from "../../public/EllipseBlue.png";
import EllipseRed from "../../public/EllipseRed.png";

const CallToAction = () => {
<<<<<<< HEAD
  return (
    <div className="container mx-auto w-fit items-center flex flex-row gap-5 items-align grid sm:grid-cols-3 p-2">
      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={EllipseBlue} className="top-0 left-0" />
          <Image src={EllipseRed} className="absolute mt-4 ml-4" />
          <Image src={NavigationArrow} className="absolute ml-[5%] mt-[5%]" />
        </div>
        <div>
          <h1 className="font-bold text-center text-lg mt-2">
            Our Office Address
          </h1>
          <h6 className="text-center">835 Middle Country Rd, Seldon,</h6>
          <h6 className="text-center">Ny11784, United States</h6>
        </div>
      </div>

      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={EllipseBlue} className="top-0 left-0" />
          <Image src={EllipseRed} className="absolute mt-4 ml-4" />
          <Image src={Vector} className="absolute ml-[5%] mt-[5%]" />
        </div>
        <div>
          <h1 className="font-bold text-center text-lg mt-2">
            Call Us Anytime
          </h1>
          <h6 className="text-center">help24/7@gmail.com</h6>
          <h6 className="text-center">(+163)-1202-0088</h6>
        </div>
      </div>

      <div className="my-4 ">
        <div className="relative flex justify-center items-center">
          <Image src={EllipseBlue} className="" />
          <Image src={EllipseRed} className="absolute  mt-4 ml-4" />
          <Image src={Watch} className="absolute ml-[5%] mt-[5%]" />
        </div>
=======
    return (
        <div className='mx-auto sm:flex sm:flex-row  flex-wrap  items-align justify-center gap-5'>
            <div className='my-4'>
                <div className='relative flex justify-center items-center '>
                    <Image
                        src={EllipseBlue}
                        className='top-0 left-0'
                        alt='EllipseBlue'
                        width={80}
                    />
                    <Image
                        src={EllipseRed}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='EllipseRed'
                        width={80}
                    />
                    <Image
                        src={NavigationArrow}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='NavigationArrow'
                        width={30}
                    />
                </div>
                <div>
                    <h1 className='font-bold text-center text-lg mt-2'>
                        Our Office Address
                    </h1>
                    <h6 className='text-center'>
                        835 Middle Country Rd, Seldon,
                    </h6>
                    <h6 className='text-center'>Ny11784, United States</h6>
                </div>
            </div>

            <div className='my-4 '>
                <div className='relative flex justify-center items-center'>
                    <Image
                        src={EllipseBlue}
                        className='top-0 left-0'
                        alt='EllipseBlue'
                        width={80}
                    />
                    <Image
                        src={EllipseRed}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='EllipseRed'
                        width={80}
                    />
                    <Image
                        src={Vector}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='Vector'
                        width={30}
                    />
                </div>
                <div>
                    <h1 className='font-bold text-center text-lg mt-2'>
                        Call Us Anytime
                    </h1>
                    <h6 className='text-center'>help24/7@gmail.com</h6>
                    <h6 className='text-center'>(+163)-1202-0088</h6>
                </div>
            </div>

            <div className='my-4 '>
                <div className='relative flex justify-center items-center'>
                    <Image
                        src={EllipseBlue}
                        className='top-0 left-0'
                        alt='EllipseBlue'
                        width={80}
                    />
                    <Image
                        src={EllipseRed}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='EllipseRed'
                        width={80}
                    />
                    <Image
                        src={Watch}
                        className='absolute ml-[5%] mt-[5%]'
                        alt='Watch'
                        width={30}
                    />
                </div>
>>>>>>> main

                <div>
                    <h1 className='font-bold text-center text-lg mt-2'>
                        Work Time
                    </h1>
                    <h6 className='text-center'>
                        9:00am-6:00pm (Monday-Friday) <br /> Saturday & Sunday
                        Half Day
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
