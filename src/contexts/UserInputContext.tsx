import { createContext, useContext, useState } from "react"
import { type UserInput } from "~/lib/types"

export const initialUserInput = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: "",
  addons: [],
}

type BillCycle = "monthly" | "yearly"

type UserInputContextProviderProps = { children: React.ReactNode }
type UserInputContext = {
  userInput: UserInput
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>
  billCycle: BillCycle
  setBillCycle: React.Dispatch<React.SetStateAction<BillCycle>>
}

const UserInputContext = createContext<UserInputContext | null>(null)

export function UserInputContextProvider(props: UserInputContextProviderProps) {
  const { children } = props
  const [userInput, setUserInput] = useState<UserInput>(initialUserInput)
  const [billCycle, setBillCycle] = useState<BillCycle>("monthly")

  return (
    <UserInputContext.Provider
      value={{
        userInput,
        setUserInput,
        billCycle,
        setBillCycle,
      }}
    >
      {children}
    </UserInputContext.Provider>
  )
}

export function useUserInputContext() {
  const context = useContext(UserInputContext)
  if (!context)
    throw new Error(
      "useUserInputContext must be used within UserInputContextProvider "
    )
  return context
}
