import { MobileProgress, DesktopProgress } from "../components/Prograss"
import { Form } from "~/components/Form"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { BackButton } from "~/components/FormElements"
import Link from "next/link"
import { Footer } from "~/components/Footer"

export default function Home() {
  const { step, setStep, controlButtonRef, formValid, setFormCompleted } =
    useFormControlContext()

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

          <div className="mx-auto h-[525px] w-full md:h-full md:w-[60%]">
            <Form />
          </div>
        </section>
        <section className="fixed bottom-0 h-20 w-full bg-neutral-alabaster px-4 shadow-2xl md:hidden">
          <div className="flex h-20 flex-row-reverse items-center justify-between px-2">
            {step < 3 ? (
              <button
                type="submit"
                disabled={!formValid}
                onClick={() => controlButtonRef.current?.click()}
                className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia transition-all disabled:opacity-30"
              >
                Next
              </button>
            ) : (
              <Link href="/thankyou">
                <button
                  className="rounded-lg bg-primary-purplish-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
                  type="submit"
                  onClick={() => setFormCompleted(true)}
                >
                  Confirm
                </button>
              </Link>
            )}
            {step > 0 && <BackButton onClick={() => setStep(step - 1)} />}
          </div>
        </section>
        <footer className="fixed bottom-0 hidden md:block ">
          <Footer />
        </footer>
      </main>
    </>
  )
}
