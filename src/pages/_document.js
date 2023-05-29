import Footer from '@/components/Footer'
import Subscribe1 from '@/components/Subscribe1'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Subscribe1 />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}
