/* eslint-disable @next/next/no-sync-scripts */
import Footer from "@/components/Footer";
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
                nomodule
                src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
            ></script>
            <body>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
