import { zodResolver } from "@hookform/resolvers/zod"
import { FormEvent } from "react"
import { useForm } from "react-hook-form"
import { StepProps } from "~/lib/PropTypes"
import { StepThreeFieldData } from "~/lib/data"
import { StepThreeFields, StepThreeSchema } from "~/lib/schemas"
import { FormHeading } from "./FormElements"
import { useFormStepContext } from "~/contexts/FormStepContext"

export const StepThree = (props: StepProps) => {
  const { step, setStep } = useFormStepContext()
  const { userInput, setUserInput, billCycle } = props

  const {
    register,
    formState: { isValid },
    setValue,
    getValues,
    watch,
  } = useForm<StepThreeFields>({
    resolver: zodResolver(StepThreeSchema),
    defaultValues: { addons: [] },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setStep(step + 1)
    setUserInput((prev) => {
      return { ...prev, addons: getValues("addons") }
    })
  }

  return (
    <>
      <FormHeading step={step} />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="space-y-4">
          {StepThreeFieldData.map((item) => {
            const { label, info, monthlyPrice } = item

            const checked = watch("addons").includes(label)

            let price = monthlyPrice
            if (billCycle === "yearly") price *= 10

            return (
              <label
                key={label}
                htmlFor={label}
                className={`flex cursor-pointer space-x-4 rounded-lg border-[1.5px]  px-4 py-3 transition-all
                      hover:border-primary-purplish-blue
                      ${
                        checked
                          ? " border-primary-purplish-blue bg-neutral-light-gray/20"
                          : "border-neutral-light-gray"
                      }`}
              >
                <input
                  id={label}
                  className="w-6 accent-primary-purplish-blue outline-none transition-all "
                  type="checkbox"
                  {...register("addons")}
                  value={label}
                  onClick={() => {
                    checked
                      ? setValue(
                          "addons",
                          watch("addons").filter((item) => item !== label)
                        )
                      : setValue("addons", [...watch("addons"), label])
                  }}
                  checked={checked}
                />
                <div className="flex w-full items-center justify-between">
                  <div>
                    <p className="font-bold text-primary-marine-blue">
                      {label}
                    </p>
                    <p className="text-sm text-neutral-cool-gray">{info}</p>
                  </div>
                  <p className="text-sm text-primary-purplish-blue">
                    +${price}/mo
                  </p>
                </div>
              </label>
            )
          })}
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
