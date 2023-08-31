import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { BackButton, FormHeading, NextButton } from "./FormElements"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { useUserInputContext } from "~/contexts/UserInputContext"

import { StepTwoFieldData } from "~/lib/data"
import { type StepTwoFields, StepTwoSchema } from "~/lib/schemas"

// for tailwind to parse classname
const BGs = [
  "bg-[url('/assets/images/icon-pro.svg')]",
  "bg-[url('/assets/images/icon-arcade.svg')]",
  "bg-[url('/assets/images/icon-advanced.svg')]",
]

export const StepTwo = () => {
  const { step, setStep, setFormValid } = useFormControlContext()
  const { userInput, setUserInput, billCycle, setBillCycle } =
    useUserInputContext()
  const { plan } = userInput

  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<StepTwoFields>({
    resolver: zodResolver(StepTwoSchema),
    defaultValues: { plan },
  })

  useEffect(() => {
    setFormValid(isValid)
  }, [isValid, setFormValid])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUserInput((prev) => {
      return { ...prev, plan: getValues("plan") }
    })

    setStep(step + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex h-full flex-col ">
        <FormHeading />
        <div className="flex h-full flex-col">
          <ul className="h-48 space-y-2 md:flex md:justify-evenly md:space-x-2 md:space-y-0">
            {StepTwoFieldData.map((item) => {
              const { fieldName, label, monthlyPrice } = item
              const yearlyPrice = monthlyPrice * 10
              return (
                <li
                  key={label}
                  className={`flex cursor-pointer space-x-3 overflow-hidden rounded-lg border-[1.5px] p-4 transition-colors hover:border-primary-purplish-blue md:flex-col md:justify-between md:space-x-0 ${
                    watch("plan") === fieldName
                      ? " border-primary-purplish-blue bg-neutral-light-gray/40"
                      : "border-neutral-light-gray"
                  }`}
                  {...register("plan")}
                  onClick={() => {
                    setValue("plan", fieldName)
                  }}
                >
                  <div
                    className={`h-[50px] w-[50px] bg-[url('/assets/images/icon-${fieldName}.svg')] bg-cover bg-no-repeat`}
                  />
                  <div className="flex-grow md:flex-grow-0">
                    <label className="font-bold capitalize text-primary-marine-blue">
                      {label}
                    </label>
                    <div className="flex items-center justify-between text-neutral-cool-gray  md:flex-col md:items-start">
                      <p>
                        ${billCycle === "monthly" ? monthlyPrice : yearlyPrice}
                        /mo
                      </p>
                      <p
                        className={`text-sm text-primary-marine-blue transition-all ${
                          billCycle === "yearly"
                            ? "translate-y-[0%] opacity-100"
                            : "translate-y-[100%] opacity-0"
                        } `}
                      >
                        2 months free
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="flex flex-grow flex-col justify-end md:justify-center">
            <div className="flex h-12 items-center justify-evenly rounded-lg bg-neutral-magnolia">
              <p
                className={`w-20 text-center transition-all ${
                  billCycle === "monthly"
                    ? "font-bold text-primary-marine-blue"
                    : "text-neutral-cool-gray"
                }`}
              >
                Monthly
              </p>
              <button
                type="button"
                onClick={() =>
                  setBillCycle(billCycle === "yearly" ? "monthly" : "yearly")
                }
                className="relative h-6 w-12 rounded-full bg-primary-marine-blue"
              >
                <div
                  className={`absolute top-[50%] mx-1 h-4 w-4 translate-y-[-50%] rounded-full bg-neutral-magnolia transition-all  ${
                    billCycle === "monthly" ? "left-[0%]" : "left-[50%]"
                  }`}
                />
              </button>
              <p
                className={`w-20 text-center transition-all ${
                  billCycle === "yearly"
                    ? "font-bold text-primary-marine-blue"
                    : "text-neutral-cool-gray"
                }`}
              >
                Yearly
              </p>
            </div>
          </div>
        </div>
        <div className="hidden justify-between md:flex">
          <BackButton onClick={() => setStep(step - 1)} />
          <NextButton disabled={!isValid} />
        </div>
      </form>
    </>
  )
}
