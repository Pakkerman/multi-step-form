import { createContext, useContext, useState } from "react"

type FormStepContextProviderProps = {
  children: React.ReactNode
}
type FormStepContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}
export const FormStepContext = createContext<null | FormStepContext>(null)

export function FormStepContextProvider(props: FormStepContextProviderProps) {
  const { children } = props
  const [step, setStep] = useState(0)

  return (
    <FormStepContext.Provider value={{ step, setStep }}>
      {children}
    </FormStepContext.Provider>
  )
}

export function useFormStepContext() {
  const context = useContext(FormStepContext)
  if (!context)
    throw new Error(
      "useFormStepContext must be used within FormStepContextProvider"
    )
  return context
}
