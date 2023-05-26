import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Subscribe />
            <Navbar />
        </main>
    );
}
