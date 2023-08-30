import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import "~/styles/globals.css"

// import { Footer } from "~/components/Footer"
import { FormControlContextProvider } from "~/contexts/FormControlContext"
import { UserInputContextProvider } from "~/contexts/UserInputContext"
import { FontWrapper } from "~/components/FontWrapper"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form with Create T3 App" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FormControlContextProvider>
        <UserInputContextProvider>
          <FontWrapper>
            <Component {...pageProps} />
          </FontWrapper>
        </UserInputContextProvider>
      </FormControlContextProvider>
    </>
  )
}

export default MyApp
