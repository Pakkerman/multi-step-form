import Image from "next/image"

import { zodResolver } from "@hookform/resolvers/zod"
import { type FormEvent } from "react"
import { useForm } from "react-hook-form"
import { StepProps } from "~/lib/PropTypes"
import { StepTwoFieldData } from "~/lib/data"
import { FormHeading } from "./FormElements"
import { StepTwoFields, StepTwoSchema } from "~/lib/schemas"

export const StepTwo = (props: StepProps) => {
  const { step, setStep, userInput, setUserInput, billCycle, setBillCycle } =
    props

  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<StepTwoFields>({
    resolver: zodResolver(StepTwoSchema),
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setUserInput((prev) => {
      return { ...prev, plan: getValues("plan") }
    })

    setStep(step + 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <FormHeading step={step} />
        {StepTwoFieldData.map((item) => {
          const { fieldName, label, monthlyPrice } = item
          const yearlyPrice = monthlyPrice * 10
          return (
            <label
              key={label}
              className={`flex cursor-pointer space-x-3 overflow-hidden rounded-lg border-[1.5px]  p-4 transition-colors hover:border-primary-purplish-blue ${
                watch("plan") === fieldName
                  ? "border-primary-purplish-blue bg-neutral-light-gray/50"
                  : "border-neutral-cool-gray"
              }`}
              {...register("plan")}
              onClick={() => {
                setValue("plan", fieldName)
              }}
            >
              <Image
                src={`assets/images/icon-${fieldName}.svg`}
                width={40}
                height={40}
                alt={`${label} icon`}
              />
              <div className="w-full">
                <label className="font-bold capitalize text-primary-marine-blue">
                  {label}
                </label>
                <div className="flex items-center justify-between text-neutral-cool-gray">
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
            </label>
          )
        })}
        <div className="flex justify-evenly rounded-lg bg-neutral-magnolia py-4">
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
        <div className="flex justify-between">
          <button
            className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
            type="button"
            onClick={() => setStep(step - 1)}
          >
            Go Back
          </button>
          <button
            className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
            disabled={!isValid}
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </>
  )
}
