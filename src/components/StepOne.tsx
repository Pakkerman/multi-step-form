import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { ErrorMessage, FormHeading, NextButton } from "./FormElements"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { useUserInputContext } from "~/contexts/UserInputContext"

import { type StepOneFields, StepOneSchema } from "~/lib/schemas"
import { StepOneFieldData } from "~/lib/data"

export const StepOne = () => {
  const { step, setStep, setFormValid } = useFormControlContext()
  const { userInput, setUserInput } = useUserInputContext()
  const { name, emailAddress, phoneNumber } = userInput

  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<StepOneFields>({
    mode: "onTouched",
    resolver: zodResolver(StepOneSchema),
    defaultValues: {
      name,
      emailAddress,
      phoneNumber,
    },
  })

  useEffect(() => {
    setFormValid(isValid)
  }, [isValid, setFormValid])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUserInput((prev) => {
      return { ...prev, ...getValues() }
    })
    setStep(step + 1)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col md:justify-between"
    >
      <FormHeading />
      <div className=" h-full space-y-2 md:pt-[10%]">
        {StepOneFieldData.map((item) => {
          const { fieldName, label, placeholder } = item
          return (
            <div className="flex flex-col space-y-1 py-1" key={label}>
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
      </div>

      <div className="hidden justify-end md:flex ">
        <NextButton disabled={!isValid} />
      </div>
    </form>
  )
}
