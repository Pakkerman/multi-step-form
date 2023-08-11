import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

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

const Form = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()
  return (
    <form className="bg-alabaster flex flex-col space-y-4 rounded-lg p-6 text-primary-marine-blue">
      <h1 className="text-2xl font-bold text-primary-marine-blue">
        Personal info
      </h1>
      <p className="text-neutral-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col text-sm">
        <label htmlFor="">Name</label>
        <input
          {...(register("name"), { require: "You must enter your name" })}
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          type="text"
        />
      </div>
      <div className="flex flex-col text-sm">
        <label htmlFor="">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          type="email"
        />
      </div>
      <div className="flex flex-col text-sm">
        <label htmlFor="">Phone Number</label>
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
    </form>
  )
}

export default function Home() {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <h1 className="fixed left-[40%] top-0">
        {width} x {height}
      </h1>
      <main className="relative flex h-[100dvh]  min-h-[700px] min-w-[390px] flex-col items-center justify-between transition-all">
        <Image
          className="absolute z-[-100] w-full"
          src="/assets/images/bg-sidebar-mobile.svg"
          width={127}
          height={375}
          alt="background image"
          sizes="100vw"
        />
        <section className="flex h-40 items-center justify-center">
          <Prograss />
        </section>
        <section className="  w-[90%] rounded-lg bg-neutral-alabaster drop-shadow-lg">
          <Form />
        </section>
        <section className="flex h-20 w-full items-center justify-end bg-neutral-alabaster px-4">
          <button className="text-alabaster rounded-md bg-primary-marine-blue px-4 py-2">
            Next Step
          </button>
        </section>
      </main>
    </>
  )
}
