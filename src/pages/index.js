import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe from "@/components/Subscribe";
import CallToAction from "@/components/CallToAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <CallToAction />
    </main>
  );
}
