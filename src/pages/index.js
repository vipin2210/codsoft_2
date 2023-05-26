import Image from "next/image";
import { Inter } from "next/font/google";
import Subscribe1 from "@/components/Subscribe1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Subscribe1 />
    </main>
  );
}
