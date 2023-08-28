import { useFormStepContext } from "~/contexts/FormStepContext"

export const MobileProgress = () => {
  const { step } = useFormStepContext()

  return (
    <div className="flex justify-center space-x-4 md:hidden ">
      {["1", "2", "3", "4"].map((item, idx) => (
        <button
          key={item}
          className={`border-magnolia h-8 w-8 rounded-full border-[1px] font-bold
          ${
            step === idx
              ? "text-magnolia border-primary-light-blue bg-primary-light-blue"
              : "text-neutral-light-gray"
          }
         `}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export const DesktopProgress = () => {
  const { step } = useFormStepContext()

  return (
    <ul className="mx-8 hidden h-[50%] flex-col justify-between  p-4 pt-[15%] md:flex ">
      {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((item, idx) => (
        <li key={item} className="flex items-center space-x-3 ">
          <button
            className={`border-magnolia h-8 w-8 rounded-full border-[1px] font-bold
           ${
             step === idx
               ? "text-magnolia border-primary-light-blue bg-primary-light-blue"
               : "text-neutral-light-gray"
           } `}
          >
            {idx + 1}
          </button>
          <div className="flex flex-col">
            <p className="text-xs font-normal text-neutral-cool-gray">
              STEP {idx + 1}
            </p>
            <p className="text-sm font-bold text-neutral-alabaster">{item}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
