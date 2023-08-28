import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { StepOneFieldData } from "~/lib/data"
import { StepOneFields, StepOneSchema } from "~/lib/schemas"
import { ErrorMessage, FormHeading } from "./FormElements"
import { StepProps } from "~/lib/PropTypes"
import { useFormStepContext } from "~/contexts/FormStepContext"

export const StepOne = (props: StepProps) => {
  const { step, setStep } = useFormStepContext()
  const { userInput: userData, setUserInput: setUserData } = props

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUserData((prev) => {
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
