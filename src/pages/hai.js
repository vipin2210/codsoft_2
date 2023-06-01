import React from "react";
import Navbar from "@/components/Navbar";
import bg from "../../public/mdHai.png";
import { Button } from "@material-tailwind/react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import TeammemberCard from "@/components/TeamMemberCard";

const member = [
    {
        image: "/dimplesingh.png",
        profession: "HRA",
        name: "Dimple Singh",
    },
    {
        image: "/rohit.png",
        profession: "Sr. Graphic Designer",
        name: "Rohit Thakur",
    },

    {
        image: "/prateek.png",
        profession: "Video Editor",
        name: "Prateek Saxena",
    },
    {
        image: "/rohitsharma.png",
        profession: "Social Media Manager",
        name: "Rohit Sharma",
    },
    {
        image: "/varish.png",
        profession: "Video Editor",
        name: "Varish Sharma ",
    },
];
function hai() {
    return (
        <main>
            <Navbar />
            {/* hero section */}
            <section>
                <div>
                    <section className='mb-10 overflow-hidden'>
                        <div
                            className='haiImg relative overflow-hidden bg-no-repeat bg-cover h-screen md:h-96 lg:h-screen  '
                            style={{
                                backgroundImage: `url(${bg.src})`,

                                backgroundPosition: "50%",
                            }}
                        >
                            <div
                                className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
                                // style="background-color: rgba(0, 0, 0, 0.75);"
                                style={{
                                    backgroundColor: `rgba(0, 0, 0, 0.65)`,
                                }}
                            >
                                <div className='flex justify-center items-center h-full'>
                                    <div className='text-center text-white px-6 md:px-12'>
                                        <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                                            Join Our Team. <br />
                                            <span className='text-2xl md:text-4xl xl:text-5xl '>
                                                Help us on our quest to make
                                                good software even better !
                                            </span>
                                        </h1>
                                        <a
                                            className='inline-block px-7 py-3 mr-1.5 border-2 bg-violet-950 border-white text-white font-medium text-sm md:text-lg leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                                            data-mdb-ripple='true'
                                            data-mdb-ripple-color='light'
                                            href='#!'
                                            role='button'
                                        >
                                            See Current Opening
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className='-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10 '
                            style={{
                                height: "50px",
                                transform: "scale(2)",
                                transformOrigin: "top center",
                                color: "#fff",
                            }}
                        >
                            <svg
                                viewBox='0 0 2880 48'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z'
                                    fill='currentColor'
                                ></path>
                            </svg>
                        </div>
                        <div className=' flex flex-row justify-center '>
                            <Button
                                className='bg-violet-950 text-xl sm:text-3xl w-3/4 relative -mt-12 border-4 border-white rounded-full'
                                fullWidth
                            >
                                Meet Our Team
                            </Button>
                        </div>
                    </section>
                </div>
             
            </section>

            {/* Team Section */}
            <section className=' bg-gray-10 tails-selected-element '>
                <div className='container items-center max-w-6xl px-4 pb-10  mx-auto sm:px-20 md:px-32 lg:px-16'>
                    {/* px-10 */}
                    <div className='flex flex-wrap items-center -mx-3 '>
                        <div className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'>
                            <img
                                className='mx-auto sm:max-w-sm lg:max-w-1/2 relative '
                                src='/HAI.png'
                                alt='feature image'
                            />
                        </div>
                        <div className='order-1 w-full px-3 lg:w-1/2 lg:order-0'>
                            <div className='w-full lg:max-w-md text-center lg:text-start'>
                                <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading'>
                                    What our team do !
                                </h2>
                                <p className='mb-4 text-md tracking-tight xl:mb-6'>
                                    To help artists, your team could be involved
                                    in various activities and initiatives. Here
                                    are some possible ways your team could
                                    support artists:<br></br> Online Platform or
                                    Marketplace: Your team could create an
                                    online platform or marketplace that allows
                                    artists to showcase and sell their artwork.
                                    <br></br> This platform could provide
                                    artists with a space to display their
                                    creations, interact with potential buyers,
                                    and facilitate the sale and delivery of
                                    artwork. Artist Promotion and Marketing:
                                    Your team could focus on promoting and
                                    marketing artists and their artwork. This
                                    could involve creating digital marketing
                                    campaigns, utilizing social media platforms,
                                    organizing exhibitions or events, and
                                    collaborating with other organizations to
                                    increase visibility and reach for the
                                    artists.<br></br> It&apos;s important to
                                    note that the specific activities your team
                                    undertakes would depend on the goals,
                                    resources, and focus of your organization or
                                    project. The above suggestions provide a
                                    starting point for how your team could
                                    potentially help artists, but the
                                    possibilities are vast and can be tailored
                                    to the specific needs of the artists you aim
                                    to support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* carousel */}

            <section className='mb-10 px-10  '>
                <div className=' mb-8'>
                    <h1 className='text-2xl lg:text-4xl text-center md:text-start md:text-4x text-slate-950 font-extrabold '>
                        OUR TEAM MEMBERS
                    </h1>
                </div>

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
                                slidesToShow: 4,
                            },
                        },
                    ]}
                >
                    {member.map((item, i) => (
                        <TeammemberCard props={item} key={i} />
                    ))}
                </Glider>
            </section>
        </main>
    );
}

export default hai;
