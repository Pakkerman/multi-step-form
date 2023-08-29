import Image from "next/image"
import { useState } from "react"
import { MobileProgress, DesktopProgress } from "../components/Prograss"
import { Form } from "~/components/Form"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { BackButton } from "~/components/FormElements"

export default function Home() {
  const { step, setStep, controlButtonRef, formValid } = useFormControlContext()
  const [submitting, setSubmitting] = useState<boolean>(false)

  return (
    <>
      <main className="relative flex h-[100dvh] min-h-[700px] min-w-[390px] flex-col items-center justify-between transition-all md:justify-center">
        <Image
          className="absolute z-[-100] w-full md:hidden"
          src="/assets/images/bg-sidebar-mobile.svg"
          width={127}
          height={375}
          alt="background image"
          sizes="100vw"
        />
        <section className="flex h-40 items-center justify-center md:hidden">
          <MobileProgress />
        </section>
        <section className="w-[90%] max-w-[390px] rounded-xl bg-neutral-alabaster drop-shadow-md md:flex md:min-h-[650px] md:max-w-[800px] md:flex-row md:items-center">
          <div className="relative hidden h-[650px] w-[274px] md:block">
            <DesktopProgress />
            <div className="absolute top-0 z-[-100] h-[650px] w-[274px] p-4">
              <Image
                className="h-full rounded-xl object-cover"
                src="/assets/images/bg-sidebar-desktop.svg"
                width={274}
                height={568}
                alt="background image"
                sizes=""
              />
            </div>
          </div>

          <div className="h-[550px] w-full md:h-full md:w-[60%]">
            <Form />
          </div>
        </section>
        <section className="h-20 w-full bg-neutral-alabaster px-4 md:hidden">
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
              <button
                className="rounded-lg bg-primary-purplish-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
                type="submit"
              >
                Confirm
              </button>
            )}
            {step > 0 && <BackButton onClick={() => setStep(step - 1)} />}
          </div>
        </section>
      </main>
    </>
  )
}
