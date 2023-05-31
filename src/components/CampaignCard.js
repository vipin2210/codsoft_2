import React from "react";
import Carousal from "./Carousal";
import Link from "next/link";

const CampaignCard = () => {
    return (
        <div>
            <div className=' container mx-auto my-10 '>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center'>
                    <div className='px-4'>
                        <h1 className='text-white font-bold text-4xl sm:text-6xl '>
                            Singing Competition By Help Artist India
                        </h1>
                        <div className='text-white  mt-4'>
                            <hr className='  border-2 w-[30%]' />
                            <hr className='  border-2 mt-1 w-[50%] ' />

                            <div className='my-8'>
                                <p className='my-2'>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ullamcorper viverra tellus malesuada gravida
                                    nibh consequat in ut. Nibh enim arcu ac
                                    volutpat sed sit urna enim urna. Pretium
                                    massa scelerisque nunc quis velit risus
                                    purus erat. Mi magna fermentum scelerisque
                                    pellentesque id arcu. Morbi viverra lacus
                                    aliquam sed. Aenean viverra eget malesuada
                                    proin sed. Duis leo mauris leo dapibus .
                                </p>
                                <p className='my-2'>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ullamcorper viverra tellus malesuada gravida
                                    nibh consequat in ut. Nibh enim arcu ac
                                    volutpat sed sit urna enim urna. Pretium
                                    massa scelerisque nunc quis velit risus
                                    purus erat. Mi magna fermentum scelerisque
                                    pellentesque id arcu. Morbi viverra lacus
                                    aliquam sed. Aenean viverra eget malesuada
                                    proin sed. Duis leo mauris leo dapibus.
                                </p>
                            </div>
                            <Link href="/donation">
                                <button className='lg:text-2xl sm:text-xl p-4 px-8  font-bold border-4 rounded-xl border-w  mb-8 hover:border-yellow-300 hover:text-yellow-300 '>
                                    DONATE NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className=''>
                        <Carousal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
