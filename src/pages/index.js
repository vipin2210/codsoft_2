import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
import EventsCard2 from "@/components/EventsCard2";
import PastEvent from "@/components/PastEvent";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <Subscribe />
      <Navbar />
      <Subscribe1 />
      <CallToAction />
      {/* <EventsCard2 /> */}
      <PastEvent />
    </main>
  );
}
