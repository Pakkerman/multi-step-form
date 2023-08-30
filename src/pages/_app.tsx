import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import "~/styles/globals.css"

// import { Footer } from "~/components/Footer"
import { WindowObserver } from "~/helpers/WindowObserver"
import { ColorPalette } from "~/helpers/ColorPalette"
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
        <link rel="preload" href="/assets/images/icon-thank-you.svg" />
        <link rel="preload" href="/assets/images/bg-sidebar-mobile.svg" />
        <link rel="preload" href="/assets/images/bg-sidebar-desktop.svg" />
      </Head>
      <FormControlContextProvider>
        <UserInputContextProvider>
          {/* <WindowObserver /> */}
          {/* <ColorPalette /> */}
          <FontWrapper>
            <Component {...pageProps} />
          </FontWrapper>
        </UserInputContextProvider>
      </FormControlContextProvider>
    </>
  )
}

export default MyApp
