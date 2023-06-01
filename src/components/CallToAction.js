import Image from "next/image";

const CallToAction = () => {
    return (
        <div className='container mx-auto w-full items-center flex-row gap-5 items-align grid sm:grid-cols-3 p-2'>
            <div className='my-4 '>
                <div className='relative flex justify-center items-center'>
                    <img
                        src='/EllipseBlue.png'
                        className='top-0 left-0'
                        alt='ellipseblue'
                    />
                    <img
                        src='/EllipseRed.png'
                        className='absolute mt-4 ml-4'
                        alt='ellipsered'
                    />
                    <img
                        src='/NavigationArrow.png'
                        className='absolute ml-[5%] mt-[5%]'
                        alt='navigator'
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
                    <img
                        src='/EllipseBlue.png'
                        className='top-0 left-0'
                        alt='ellipseblue'
                    />
                    <img
                        src='/EllipseRed.png'
                        className='absolute mt-4 ml-4'
                        alt='ellipsered'
                    />
                    <img
                        src='/Vector.png'
                        className='absolute ml-[5%] mt-[5%]'
                        alt='navigator'
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
                    <img
                        src='/EllipseBlue.png'
                        className=''
                        alt='ellipseblue'
                    />
                    <img
                        src='/EllipseRed.png'
                        className='absolute  mt-4 ml-4'
                        alt='ellipsered'
                    />
                    <img
                        src='/Watch.png'
                        className='absolute ml-[5%] mt-[5%]'
                        alt='navigator'
                    />
                </div>
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
