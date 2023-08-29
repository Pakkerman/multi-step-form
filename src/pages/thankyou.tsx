import { Form } from "react-hook-form"
import { BackButton } from "~/components/FormElements"
import { MobileProgress, DesktopProgress } from "~/components/Prograss"

export default function ThankPage() {
  return (
    <>
      <main className=" flex h-[100dvh] min-h-[700px] min-w-[390px] flex-col items-center justify-between transition-all md:justify-center">
        <section className="relative flex h-32 items-center justify-center md:hidden">
          <div className="pre absolute top-0 z-[-100] h-[200px] w-[100vw] min-w-[390px] bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat" />
          <MobileProgress />
        </section>
        <section className="w-[90%] max-w-[390px] translate-y-[-5%] rounded-xl bg-neutral-alabaster drop-shadow-md md:flex md:min-h-[650px] md:max-w-[800px] md:flex-row md:items-center">
          <div className="relative hidden h-[650px] w-[274px] md:block ">
            <DesktopProgress />
            <div className="absolute top-0 z-[-100] h-full w-full p-4">
              <div className="h-full w-full rounded-xl bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat" />
            </div>
          </div>

          <div className="h-[525px] w-full md:h-full md:w-[60%]">thank</div>
        </section>
        <section className="h-20 w-full bg-neutral-alabaster px-4 md:hidden">
          {/* <div className="flex h-20 flex-row-reverse items-center justify-between px-2">
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
              <button
                className="rounded-lg bg-primary-purplish-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
                type="submit"
              >
                Confirm
              </button>
            )}
            {step > 0 && <BackButton onClick={() => setStep(step - 1)} />}
          </div> */}
        </section>
      </main>
    </>
  )
}
