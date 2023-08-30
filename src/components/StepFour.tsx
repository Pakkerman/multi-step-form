import {
  calculatePlan,
  formatBillCycle,
  calculateAddons,
  calculateTotal,
} from "~/helpers/helpers"
import { BackButton, FormHeading } from "./FormElements"
import { useFormControlContext } from "~/contexts/FormControlContext"
import { useUserInputContext } from "~/contexts/UserInputContext"
import Link from "next/link"

export const StepFour = () => {
  const { step, setStep, setFormCompleted } = useFormControlContext()
  const { userInput, billCycle } = useUserInputContext()

  return (
    <>
      <div className="flex h-full flex-col md:justify-between">
        <FormHeading />
        <div className="flex h-full flex-col space-y-2 ">
          <div className="rounded-xl bg-neutral-magnolia p-4">
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
            <hr className="my-6 border-[1px]"></hr>
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
          <div className="flex items-center justify-between p-4 text-neutral-cool-gray">
            <p>Total (per {billCycle.slice(0, -2)})</p>
            <p className="text-xl font-bold text-primary-purplish-blue">
              +$
              {calculateTotal(userInput.plan, userInput.addons, billCycle)}/
              {formatBillCycle(billCycle)}
            </p>
          </div>
        </div>
        <div className="hidden justify-between md:flex">
          <BackButton onClick={() => setStep(step - 1)} />
          <Link href="/thankyou">
            <button
              className="rounded-lg bg-primary-purplish-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
              type="submit"
              onClick={() => setFormCompleted(true)}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
