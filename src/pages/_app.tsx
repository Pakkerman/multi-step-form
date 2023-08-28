import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import "~/styles/globals.css"

// import { Footer } from "~/components/Footer"
import { WindowObserver } from "~/helpers/WindowObserver"
import { ColorPalette } from "~/helpers/ColorPalette"
import { FormStepContextProvider } from "~/contexts/FormStepContext"
import { UserInputContextProvider } from "~/contexts/UserInputContext"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form with Create T3 App" />
        <link href="favicon.png" />
      </Head>

      <FormStepContextProvider>
        <UserInputContextProvider>
          <WindowObserver />
          <ColorPalette />
          <Component {...pageProps} />
        </UserInputContextProvider>
      </FormStepContextProvider>
    </>
  )
}

export default MyApp
