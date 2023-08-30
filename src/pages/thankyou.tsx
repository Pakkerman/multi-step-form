import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { Footer } from "~/components/Footer"
import { MobileProgress, DesktopProgress } from "~/components/Prograss"
import { useFormControlContext } from "~/contexts/FormControlContext"

export default function ThankPage() {
  const router = useRouter()
  const { formCompleted } = useFormControlContext()

  useEffect(() => {
    if (!formCompleted) {
      void router.push("/")
    }
  }, [formCompleted])

  return (
    <>
      <main className="flex h-[100dvh] min-h-[700px] min-w-[390px] flex-col items-center  transition-all md:justify-center">
        <section className="flex h-24 items-center justify-center md:hidden">
          <div className="fixed top-0 z-[-1] h-[250px] w-[100vw] min-w-[390px] bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat" />
          <MobileProgress />
        </section>
        <section className="w-[90%] max-w-[390px] rounded-xl bg-neutral-alabaster drop-shadow-md md:flex md:min-h-[650px] md:max-w-[800px] md:flex-row md:items-center">
          <div className="relative hidden h-[650px] w-[274px] md:block ">
            <DesktopProgress />
            <div className="absolute top-0 z-[-100] h-full w-full p-4">
              <div className="h-full w-full rounded-xl bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat" />
            </div>
          </div>
          <div className="flex h-[400px] w-full flex-col items-center justify-center space-y-4 md:h-full md:w-[60%]">
            <div className="h-24 w-24 bg-[url('/assets/images/icon-thank-you.svg')] bg-cover bg-no-repeat" />
            <h1 className="text-3xl font-bold text-primary-marine-blue">
              Thank you!
            </h1>
            <p className="mx-6 text-center text-neutral-cool-gray">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </section>
        <footer className="fixed bottom-0 w-full bg-neutral-alabaster px-4 shadow-2xl md:hidden">
          <Footer />
        </footer>
      </main>
    </>
  )
}
