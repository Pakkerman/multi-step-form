import { createContext, useContext, useRef, useState } from "react"

type FormStepContextProviderProps = {
  children: React.ReactNode
}
type FormControlContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  controlButtonRef: React.RefObject<HTMLButtonElement>
  formValid: boolean
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>
  formCompleted: boolean
  setFormCompleted: React.Dispatch<React.SetStateAction<boolean>>
}
export const FormControlContext = createContext<null | FormControlContext>(null)

export function FormControlContextProvider(
  props: FormStepContextProviderProps
) {
  const { children } = props
  const [step, setStep] = useState(0)
  const [formValid, setFormValid] = useState<boolean>(false)
  const [formCompleted, setFormCompleted] = useState<boolean>(false)
  const controlButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <FormControlContext.Provider
      value={{
        step,
        setStep,
        controlButtonRef,
        formValid,
        setFormValid,
        formCompleted,
        setFormCompleted,
      }}
    >
      {children}
    </FormControlContext.Provider>
  )
}

export function useFormControlContext() {
  const context = useContext(FormControlContext)
  if (!context)
    throw new Error(
      "useFormStepContext must be used within FormStepContextProvider"
    )
  return context
}
