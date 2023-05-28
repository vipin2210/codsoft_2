import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
import EventsCard2 from "@/components/EventsCard2";
import PastEvent from "@/components/PastEvent";
import About from "./about.js";
import Mission from "./mission.js";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      {/* <Subscribe /> */}
      <Navbar />
      {/* <CallToAction /> */}
      {/* <EventsCard2 /> */}
      {/* <PastEvent />  */}
      {/* import About page directly here for testing purposes it should be used via Routes*/}
      {/* <About /> */}

      {/* import About page directly here for testing purposes it should be used via Routes*/}
      <Mission />
      <Subscribe1 />
    </main>
  );
}
