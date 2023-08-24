import { useState } from "react"
import type { UserInput } from "~/lib/types"

import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import {
  calculatePlan,
  formatBillCycle,
  calculateAddons,
  calculateTotal,
} from "~/helpers/helpers"
import { FormHeading } from "./FormElements"
import { StepProps } from "~/lib/PropTypes"

const StepFour = (props: StepProps) => {
  const { step, setStep, userInput, setUserInput, billCycle, setBillCycle } =
    props

  return (
    <>
      <div className="flex flex-col space-y-4">
        <FormHeading step={step} />
        <div className="bg-neutral-magnolia p-4">
          <div className="flex justify-between">
            <div>
              <h1 className=" font-bold capitalize text-primary-marine-blue">
                {userInput.plan} ({billCycle})
              </h1>
              <button
                className="text-neutral-cool-gray underline"
                type="button"
                onClick={() => setStep(0)}
              >
                Change
              </button>
            </div>
            <p className="self-end font-bold text-primary-marine-blue">
              ${calculatePlan(userInput.plan, billCycle)}/
              {formatBillCycle(billCycle)}
            </p>
          </div>
          <hr className="my-4 border-[1px] "></hr>
          <ul className="space-y-4">
            {userInput.addons.map((item) => (
              <li key={item} className="flex justify-between">
                <p className="text-neutral-cool-gray">{item}</p>
                <p className="text-primary-marine-blue">
                  +${calculateAddons(item, billCycle)}/
                  {formatBillCycle(billCycle)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between p-4 text-neutral-cool-gray">
          <p>Total (per {billCycle.slice(0, -2)})</p>
          <p>
            +$
            {calculateTotal(userInput.plan, userInput.addons, billCycle)}/
            {formatBillCycle(billCycle)}
          </p>
        </div>
      </div>
    </>
  )
}

const initialUserInput = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: "",
  addons: [],
}

export const Form = () => {
  const [userInput, setUserInput] = useState<UserInput>(initialUserInput)
  const [billCycle, setBillCycle] = useState<"monthly" | "yearly">("monthly")
  const [step, setStep] = useState(0)

  return (
    <div className="flex flex-col space-y-4 px-6 py-8">
      {step === 0 && (
        <StepOne
          step={step}
          setStep={setStep}
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 1 && (
        <StepTwo
          step={step}
          setStep={setStep}
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 2 && (
        <StepThree
          step={step}
          setStep={setStep}
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}
      {step === 3 && (
        <StepFour
          step={step}
          setStep={setStep}
          userInput={userInput}
          setUserInput={setUserInput}
          billCycle={billCycle}
          setBillCycle={setBillCycle}
        />
      )}

      <pre>{JSON.stringify(userInput, null, 2)}</pre>
    </div>
  )
}
