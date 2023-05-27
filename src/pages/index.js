import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Subscribe1 from "@/components/Subscribe1";
import EventCard from "@/components/EventCard";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Subscribe1 />
            <Subscribe />
            <CallToAction />
            <EventCard />
        </main>
    );
}
