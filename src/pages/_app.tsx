import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import "~/styles/globals.css"

import { Footer } from "~/components/Footer"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form with Create T3 App" />
        <link rel="png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
