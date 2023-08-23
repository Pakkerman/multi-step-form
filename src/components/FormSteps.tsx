import { FieldErrors, FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormHeadingData, StepOneFieldData } from "~/lib/data"
import { Dispatch, SetStateAction, useState } from "react"

const ErrorMessage = ({
  errors,
  fieldName,
}: {
  errors: FieldErrors<FieldValues>
  fieldName: string
}) => {
  const message = errors[fieldName]?.message as string
  return <p className=" text-primary-strawberry-red">{message}</p>
}

const FormHeading = ({ step, align }: { step: number; align?: string }) => {
  const { heading, info } = FormHeadingData[step]!
  return (
    <>
      <h1 className="text-2xl font-bold text-primary-marine-blue">{heading}</h1>
      <p
        className={`text-neutral-cool-gray ${
          align === "center" && "text-center"
        }`}
      >
        {info}
      </p>
    </>
  )
}

const StepOneSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z]*$/, "Cannot contain digits")
    .min(2, "Too short"),
  emailAddress: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/\d*$/, "Only digits allow")
    .min(10, "Must be 10 digits"),
})

type StepOneFieldType = z.infer<typeof StepOneSchema>

type StepProps = {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

export const StepOne = (props: StepProps) => {
  const { step, setStep } = props
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<StepOneFieldType>({
    mode: "onTouched",
    resolver: zodResolver(StepOneSchema),
  })

  const onSubmit = (data: StepOneFieldType) => {
    alert("submit step one")
    return
  }

  return (
    <form onSubmit={void handleSubmit(onSubmit)}>
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

      <div className="flex justify-between">
        <button type="button">go Back</button>
        <button
          type="submit"
          disabled={!isValid}
          className={`${isValid ? "opaicty-100" : "opacity-10"}`}
        >
          next
        </button>
      </div>
    </form>
  )
}

export const Form = () => {
  const [step, setStep] = useState(0)

  return <div>{step === 0 && <StepOne step={step} setStep={setStep} />}</div>
}
