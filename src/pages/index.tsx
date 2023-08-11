import Image from "next/image"
import { useEffect, useState } from "react"

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
  return (
    <form
      action=""
      className="bg-alabaster flex flex-col space-y-4 rounded-lg p-6 text-primary-marine-blue"
    >
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="flex flex-col">
        <label htmlFor="">Name</label>
        <input
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          placeholder="eg. somthing"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Name</label>
        <input
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          placeholder="eg. somthing"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Name</label>
        <input
          className="h-10 rounded-md border-[1px] border-neutral-light-gray px-3"
          placeholder="eg. somthing"
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
      <main className=" h-[100dvh] min-h-[700px] min-w-[390px]   transition-all">
        <div className="relative flex h-full flex-col items-center justify-between transition-all">
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
        </div>
      </main>
    </>
  )
}
