/* eslint-disable @next/next/no-sync-scripts */
import Footer from "@/components/Footer";
import Subscribe1 from "@/components/Subscribe1";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <script
                type='module'
                src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
            ></script>
            <script
                noModule
                src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
            ></script>
            <body>
                <Main />
                <Subscribe1 />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
