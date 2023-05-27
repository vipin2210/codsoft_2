import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe1 from "@/components/Subscribe1";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Subscribe1 />
      <Footer />
    </main>
  );
}
