import Image from "next/image"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { MobileProgress, DesktopProgress } from "../components/Prograss"

const ErrorMessage = ({ message }: any) => {
  return <p className=" text-primary-strawberry-red">{message}</p>
}

const Form = ({ formRef, setSubmitting }: any) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "pakkerman",
      email: "test@a.com",
      phonenumber: "1231231234",
    },
  })

  const submit = async (data: any) => {
    setSubmitting(true)
    await new Promise((resolve) =>
      setTimeout(() => {
        setSubmitting(false)
        return resolve
      }, 1000)
    )
    // reset()
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(submit)}
      className="bg-alabaster m-8 flex min-h-min flex-col justify-between md:max-w-[450px] lg:mx-auto"
    >
      <div className="flex flex-grow flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold text-primary-marine-blue">
          Personal info
        </h1>
        <p className="pb-8 text-sm text-neutral-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col text-sm">
          <div className=" flex h-6 justify-between">
            <label htmlFor="">Name</label>
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
          <input
            {...register("name", {
              required: "You must enter your name",
              minLength: { value: 2, message: "too short" },
            })}
            className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
            type="text"
            autoComplete="off"
            placeholder="eg. Pakkerman"
          />
        </div>
        <div className="flex flex-col text-sm">
          <div className=" flex h-6 justify-between">
            <label htmlFor="">Email</label>{" "}
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <input
            {...register("email", { required: "Email is required" })}
            className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
            type="email"
          />
        </div>
        <div className="flex flex-col text-sm">
          <div className=" flex h-6 justify-between">
            <label htmlFor="">Phone Number</label>
            {errors.phonenumber && (
              <ErrorMessage message={errors.phonenumber.message} />
            )}
          </div>
          <input
            {...register("phonenumber", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Must be 10 digits",
              },
            })}
            className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
            type="text"
          />
        </div>
      </div>

      <div className="hidden h-24 items-center justify-end lg:flex ">
        <button
          type="submit"
          className="text-alabaster rounded-md bg-primary-marine-blue  px-4 py-2 text-sm text-neutral-magnolia"
        >
          Next Step
        </button>
      </div>
    </form>
  )
}

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
        <section className="w-[90%] max-w-[390px] rounded-xl bg-neutral-alabaster drop-shadow-md md:flex md:max-w-[800px] md:flex-row md:items-center ">
          <div className="relative hidden h-[568px] w-[274px] md:block">
            <DesktopProgress />
            <div className="absolute top-0 z-[-100] h-[568px] w-[274px] p-4">
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
          <Form formRef={formRef} setSubmitting={setSubmitting} />
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
