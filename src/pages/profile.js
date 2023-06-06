import Breadcrum from "@/components/Breadcrum";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight} from "react-icons/bs";


const about = () => {
    const teams = [
        {
            photo: "/hariprofile.png",
            name: "Hari Haran",
            profession: "Indian Playback Singer",
        },

    ];
    return (
        <div>

            <Navbar />
            <div>
                <Header image='/Frame.png' name='Profile view' page='Our Heroes' />
                <div className='p-4 relative xl:h-auto lg:h-auto justify-center'>
                    <section className='container mx-auto '>
                <section class='relative mx-auto py-20 bg-white'>
                    
                        <div className='relative bottom-80 mr-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3'>
                            
                                <ProfileCard props={teams[0]} />
                        </div>
                </section>
            </section>
            <div className='relative bottom-80 '>
                    <h1 className='text-4xl font-bold -mt-20 text-start'>Bio</h1>
                    <p className='text-lg mt-1 mb-16'>
                     Padam Shri Hariharan Anantha Subramani is an Indian playback bollywood singer he is bhajan and ghazal singer who predominantly sings in Tamil, Hindi, and Telugu. He has also sung over 15,000 notable songs in 10 languages, including Malayalam, Kannada, Marathi, Sinhala, and Bhojpuri. He is an established ghazal singer and one of the pioneers of Indian fusion music.<br></br>
In 2004, he was honoured with the Padma Shri by the Government of India and is a two-time National Award winner. Hariharan and the late Gulshan Kumar's Hanuman Chalisa, recorded under the label T-Series, crossed the 3-billion-view mark on YouTube making it the first devotional bhajan to create such a record. We are honoured and grateful that he agreed to serve as our mentor for Help Artist India. his kind guidelines will be followed. for the upliftment of the artist.
                    </p>
  <Link href="#" class="text-blue-600 hover:underline rounded-2xl mt-5 border-2 p-2 px-8 w-fit flex gap-2 font-bold text-lg border-blue-500" >Go to Website <BsBoxArrowUpRight /> </Link>

                    </div>
                   
                </div>
            </div>
             
            < div h1 className='text-4xl font-bold -mt-20 text-start '>IMAGES</div>
            <div className=' w-full  bg-[#FFD12F]'>
                <div className='flex md:flex-row flex-col mb-40 p-12 m-5 justify-evenly '>
                    <div>
                        <img
                            src='/serviceImg1.png' 
                            className='scale-110 w-full'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className=' scale-110'
                        />
                    </div>
                    <div>
                        <img
                            src='/serviceImg1.png'
                            className='scale-110'
                        />
                        </div>
                    </div>
                </div> 
                 < div h1 className='text-4xl font-bold -mt-20 text-center'>Hits Songs</div>
                <div className='flex md:flex-row flex-col mb-20 p-12  justify-evenly '>
                    <div>
                        <iframe width="386" height="224" src="https://www.youtube.com/embed/o0ntND9OZ6I" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                         </iframe>
                    </div>
                    <div>
                       <iframe width="386" height="224" src="https://www.youtube.com/embed/eFO3y_Q7i_Q" 
                       title="YouTube video player" 
                       frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                       
                    </div>
                    <div>
           <iframe width="386" height="224" src="https://www.youtube.com/embed/JZM4isXnZjQ" 
          title="YouTube video player"
          frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe>

                    </div>
                </div> 
            

    
        </div>
    );
};

export default about;
