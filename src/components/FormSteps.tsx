import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import { StepFour } from "./StepFour"

import { useFormStepContext } from "~/contexts/FormStepContext"

export const Form = () => {
  const { step } = useFormStepContext()
  // const { formRef, setSubmitting } = props

  return (
    <div className="flex h-full flex-col space-y-4 p-6">
      {step === 0 && <StepOne />}
      {step === 1 && <StepTwo />}
      {step === 2 && <StepThree />}
      {step === 3 && <StepFour />}
    </div>
  )
}
