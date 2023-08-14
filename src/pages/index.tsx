import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FieldValue, useForm } from "react-hook-form"
import { WindowObserver } from "~/helpers/WindowObserver"

const Prograss = () => {
  return (
    <div className="flex justify-center space-x-4">
      <button className="border-magnolia h-10 w-10 rounded-full border-2">
        1
      </button>
      <button className="border-magnolia h-10 w-10 rounded-full border-2">
        2
      </button>
      <button className="border-magnolia h-10 w-10 rounded-full border-2">
        3
      </button>
      <button className="border-magnolia h-10 w-10 rounded-full border-2">
        4
      </button>
    </div>
  )
}
const ErrorMessage = ({ message }: any) => {
  return <p className="text-primary-strawberry-red">{message}</p>
}

const Form = ({ formRef, setSubmitting }: any) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()

  const submit = async (data: any) => {
    console.log(data)

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
      className="bg-alabaster flex flex-col space-y-4 rounded-lg p-6 text-primary-marine-blue"
    >
      <h1 className="text-2xl font-bold text-primary-marine-blue">
        Personal info
      </h1>
      <p className="text-neutral-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col text-sm">
        <div className="flex justify-between">
          <label htmlFor="">Name</label>
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </div>
        <input
          {...register("name", {
            required: "You must enter your name",
            minLength: { value: 5, message: "too short" },
          })}
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          type="text"
          autoComplete="off"
          placeholder="eg. Pakkerman"
        />
      </div>
      <div className="flex flex-col text-sm">
        <div className="flex justify-between">
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
        <div className="flex justify-between">
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
      <button type="submit">test</button>
    </form>
  )
}

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)

  return (
    <>
      <WindowObserver />
      <main className="relative flex h-[100dvh]  min-h-[700px] min-w-[390px] flex-col items-center justify-between transition-all">
        <Image
          className="absolute z-[-100] w-full lg:hidden"
          src="/assets/images/bg-sidebar-mobile.svg"
          width={127}
          height={375}
          alt="background image"
          sizes="100vw"
        />
        <section className="flex h-40 items-center justify-center">
          <Prograss />
        </section>
        <section className="w-[90%] max-w-[390px] rounded-lg bg-neutral-alabaster drop-shadow-lg lg:flex lg:max-w-[800px] lg:flex-row">
          <div className="relative hidden h-[568px] w-[274px]  lg:block">
            <div className="mx-4 flex flex-col space-y-8">
              <div className="flex items-center space-x-2">
                <button className="border-magnolia h-10 w-10 rounded-full border-2">
                  2
                </button>
                <div className="flex flex-col">
                  <p>step1</p>
                  <p>Your info</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="border-magnolia h-10 w-10 rounded-full border-2">
                  2
                </button>
                <div className="flex flex-col">
                  <p>step1</p>
                  <p>Your info</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="border-magnolia h-10 w-10 rounded-full border-2">
                  2
                </button>
                <div className="flex flex-col">
                  <p>step1</p>
                  <p>Your info</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="border-magnolia h-10 w-10 rounded-full border-2">
                  2
                </button>
                <div className="flex flex-col">
                  <p>step1</p>
                  <p>Your info</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 z-[-100] h-[568px]  w-[274px]">
              <Image
                className="object-cover "
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
        <section className="flex h-20 w-full items-center justify-end bg-neutral-alabaster px-4">
          <button
            type="submit"
            disabled={submitting}
            onClick={() => {
              // programmatically submit form that is on another place
              // useRef to get that form's reference and requestSubmit() will trigger form's onSubmit attribute
              // not using submit() this will force submit and skip the any validation
              if (formRef.current) formRef.current.requestSubmit()
            }}
            className={`text-alabaster rounded-lg bg-primary-marine-blue px-4 py-2 ${
              submitting ? "bg-slate-50" : "bg-primary-marine-blue "
            }`}
          >
            Next Step
          </button>
        </section>
      </main>
    </>
  )
}
