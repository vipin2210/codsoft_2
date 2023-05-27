import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
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
}
