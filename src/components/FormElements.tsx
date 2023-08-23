import type { FieldErrors, FieldValues } from "react-hook-form"
import { FormHeadingData } from "~/lib/data"

type ErrorMessageProps = {
  errors: FieldErrors<FieldValues>
  fieldName: string
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { errors, fieldName } = props
  const message = errors[fieldName]?.message as string
  return <p className=" text-primary-strawberry-red">{message}</p>
}

type FormHeadingProps = {
  step: number
  align?: string
}

export const FormHeading = (props: FormHeadingProps) => {
  const { step, align } = props
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
