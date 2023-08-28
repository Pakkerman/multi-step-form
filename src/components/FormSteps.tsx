import { useState } from "react"
import type { UserInput } from "~/lib/types"

import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import { StepFour } from "./StepFour"

import { useFormStepContext } from "~/contexts/FormStepContext"

const initialUserInput = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: "",
  addons: [],
}

export const Form = () => {
  const { step } = useFormStepContext()
  const [userInput, setUserInput] = useState<UserInput>(initialUserInput)
  const [billCycle, setBillCycle] = useState<"monthly" | "yearly">("monthly")

  // const { formRef, setSubmitting } = props

  return (
    <div className="flex h-full flex-col space-y-4 p-6">
      {step === 0 && (
        <StepOne
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 1 && (
        <StepTwo
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 2 && (
        <StepThree
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 3 && (
        <StepFour
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
    </div>
  )
}
