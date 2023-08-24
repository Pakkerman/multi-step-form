import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import type { FormEvent } from "react"
import { StepOneFieldData } from "~/lib/data"
import { StepOneFields, StepOneSchema } from "~/lib/schemas"
import { ErrorMessage, FormHeading } from "./FormElements"
import { StepProps } from "~/lib/PropTypes"
import { Chau_Philomene_One } from "next/font/google"

export const StepOne = (props: StepProps) => {
  const {
    step,
    setStep,
    userInput: userData,
    setUserInput: setUserData,
  } = props
  const {
    register,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<StepOneFields>({
    mode: "onTouched",
    resolver: zodResolver(StepOneSchema),
    defaultValues: {
      name: "app",
      emailAddress: "e@email.com",
      phoneNumber: "1231231231",
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("getValues", getValues())
    setUserData({ ...getValues() })
    console.log(userData)

    setStep(step + 1)

    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormHeading step={step} />
      {StepOneFieldData.map((item) => {
        const { fieldName, label, placeholder } = item

        return (
          <div className="space-1 flex flex-col py-1" key={label}>
            <div className="flex justify-between text-sm text-primary-marine-blue">
              <label className="">{label}</label>
              {errors && (
                <ErrorMessage errors={errors} fieldName={fieldName ?? ""} />
              )}
            </div>
            <input
              placeholder={placeholder}
              className="rounded-lg border-[1px] border-neutral-cool-gray py-2 pl-3"
              type="text"
              {...register(fieldName)}
            />
          </div>
        )
      })}

      <div className="flex justify-end">
        <button
          className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
          disabled={!isValid}
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  )
}
