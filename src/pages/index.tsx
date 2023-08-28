import Image from "next/image"
import { useRef, useState } from "react"
import { MobileProgress, DesktopProgress } from "../components/Prograss"
import { Form } from "~/components/FormSteps"

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)
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

          <div className="h-[600px] w-full md:h-full md:w-[60%]">
            <Form />
          </div>
          {/* <Form formRef={formRef} setSubmitting={setSubmitting} /> */}
        </section>
        <section className="flex h-20 w-full items-center justify-end bg-neutral-alabaster px-4 md:hidden">
          <button
            type="submit"
            disabled={submitting}
            onClick={() => {
              // programmatically submit form that is on another place
              // useRef to get that form's reference and requestSubmit() will trigger form's onSubmit attribute
              // not using submit() this will force submit and skip the any validation
              if (formRef.current) formRef.current.requestSubmit()
            }}
            className={`text-alabaster font-sm rounded-md bg-primary-marine-blue px-4 py-2 text-neutral-magnolia
            ${submitting ? "bg-slate-50" : "bg-primary-marine-blue "}`}
          >
            Next Step
          </button>
        </section>
      </main>
    </>
  )
}
