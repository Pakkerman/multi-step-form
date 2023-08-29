import type { FieldErrors, FieldValues } from "react-hook-form"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { FormHeadingData } from "~/lib/data"

type FormHeadingProps = {
  align?: string
}

export function FormHeading(props: FormHeadingProps) {
  const { step } = useFormControlContext()
  const { align } = props
  const { heading, info } = FormHeadingData[step]!
  return (
    <div className="h-36 md:h-60 md:pt-[10%]">
      <h1 className="my-4 text-3xl font-bold text-primary-marine-blue md:text-4xl">
        {heading}
      </h1>
      <p
        className={`h-16 text-neutral-cool-gray ${
          align === "center" && "text-center"
        }`}
      >
        {info}
      </p>
    </div>
  )
}

type ErrorMessageProps = {
  errors: FieldErrors<FieldValues>
  fieldName: string
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { errors, fieldName } = props
  const message = errors[fieldName]?.message as string
  return <p className=" text-primary-strawberry-red">{message}</p>
}

type NextButtonProps = {
  disabled: boolean
}

export function NextButton(props: NextButtonProps) {
  const { controlButtonRef } = useFormControlContext()
  const { disabled } = props

  return (
    <button
      ref={controlButtonRef}
      className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia transition-all disabled:opacity-30"
      disabled={disabled}
      type="submit"
    >
      Next
    </button>
  )
}

type BackButtonProps = {
  onClick?: () => void
}

export function BackButton(props: BackButtonProps) {
  const { onClick } = props
  return (
    <button
      className="rounded-lg px-4 py-2 text-neutral-cool-gray disabled:opacity-30"
      type="button"
      onClick={onClick}
    >
      Go Back
    </button>
  )
}
