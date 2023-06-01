import Breadcrum from "@/components/Breadcrum";
import Navbar from "@/components/Navbar";
import React from "react";

const mission = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-8'>
                <div className=''>
                    <img
                        className='object-fill  h-96 w-full'
                        src='/Frame.png'
                        alt='Frame'
                    />
                    <Breadcrum name={"Mission"} page={"Mission"} />
                </div>

                <div className='relative container -mt-60 z-20 mx-auto '>
                    <div className=' mx-auto grid grid-cols-4 gap-6 w-3/4 rounded-3xl p-6  bg-[#000000]  '>
                        <div>
                            <img src='/m1.png' />
                        </div>
                        <div>
                            <img src='/m2.png' />
                        </div>
                        <div>
                            <img src='/m3.png' />
                        </div>
                        <div>
                            <img src='/m4.png' />
                        </div>
                        <div>
                            <img src='/m5.png' />
                        </div>
                        <div>
                            <img src='/missionImg4.png' />
                        </div>
                        <div>
                            <img src='/missionImg7.png' />
                        </div>
                        <div>
                            <img src='/missionImg8.png' />
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-4xl m-8 font-extrabold'>
                    Vision and Mission
                </h1>
                <div className='md:m-16 m-8 max-w-6xl grid justify-center'>
                    <ul className='list-disc'>
                        <li>
                            We are aiming at the art and artists of India. We
                            are trying to uplift and save the heritage of all
                            art forms in the nation; we are dedicated to the new
                            art forms and provide them with a stage to showcase
                            their talent. We are going places, across India, to
                            find out the artists of all performing arts to be
                            shown to the world.
                        </li>
                    </ul>

                    <div>
                        <h1 className='font-bold text-xl mt-4 '>
                            Financial Assistance for Artists:
                        </h1>
                        <ul className='list-disc md:px-8'>
                            <li>
                                Helping when there is no one to stand by them.
                            </li>
                            <li>
                                There are plans for financial help for artists,
                                and to be eligible for assistance under the
                                scheme,a person's contribution towards art,
                                music, writing, performing arts,folk art forms,
                                etc. Traditional scholars who have made
                                significant contributions in their fields would
                                also be eligible as writers only for their
                                published works.
                            </li>
                            <li>
                                The personal income of the applicant (including
                                the income of the spouse) must not exceed Rs.
                                10,000 per month.
                            </li>
                            <li>
                                The applicant should not be less than 55 years
                                of age (this does not apply in the case of
                                dependents).
                            </li>
                            <li>
                                The applicant artist will be getting a pension
                                or aid of at least Rs. 3,000 per month from the
                                concerned department of our NGO, Help Artist
                                India. This aid will be recommended by the
                                mentors and promoters of HAI.
                            </li>
                            <li>
                                The applicant artists should not be getting
                                financial assistance under other schemes of any
                                ministry or any other repertory grant, etc.
                            </li>
                        </ul>

                        <div>
                            <h1 className='font-bold text-xl mt-4 '>
                                Musical Traing:
                            </h1>
                            <p>
                                We are looking for talent all around us. and a
                                team is dedicated to the same; we are providing
                                the training to the singers,musicians,or any
                                other art form under the guidance of our
                                legendary artists. who has been an icon and idol
                                for many singers and performers. This training
                                is based on a zero-cost investment by the
                                student.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mt-4 '>
                                Stage to perform:
                            </h1>
                            <p>
                                We are also working towards providing a graceful
                                stage to our artists, created by us in
                                appreciation of our mentors, judges, and huge
                                audience who appreciate the art. This surely
                                helps them get their bread and butter for life.
                                Making them famous is another key role we play
                                by making media stories strong ; a strong media
                                story is a must for all our artists, which we
                                take care, also social media is another
                                important part for artist profile building that
                                is taken care of by our dedicated team
                            </p>
                        </div>

                        <div className=''>
                            <h1 className='font-bold text-xl mt-4 '>
                                Musical Instrument Donation:
                            </h1>
                            <p>
                                Musical Instrument Donation: We understand that
                                there are a huge number of artists who are very
                                talented, creative, and brilliant. But they fail
                                to learn to play any musical instruments because
                                they fail to purchase them. Here we come
                                inaction; they just have to connect with us by
                                any means, whether it be a phone call, email, or
                                our social media platform, and let us know what
                                musical instrument they need. We donated it to
                                them. Performance gets enhanced and melodious
                                with music, and to learn to sing, they need the
                                basic tool.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mission;
