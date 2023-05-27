import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
<<<<<<< HEAD
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import TeammemberCard from "@/components/TeamMemberCard";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      {/* <Subscribe1 />
            <Subscribe />
            <Navbar /> */}
      {/* <ArtistCard/> */}
      <TeammemberCard />
    </main>
  );
=======
import EventCard from "@/components/EventCard";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <main className=''>
            <Navbar />
            <Subscribe1 />
            <Subscribe />
            <CallToAction />
            <EventCard />
        </main>
    );
>>>>>>> 08e3b5992804598e8e7ad70252922307e900b027
}
