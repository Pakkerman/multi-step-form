import { Dispatch, SetStateAction } from "react"
import { UserInput } from "./types"

export type StepProps = {
  userInput: UserInput
  setUserInput: Dispatch<SetStateAction<UserInput>>
  billCycle: "monthly" | "yearly"
  setBillCycle: Dispatch<SetStateAction<"monthly" | "yearly">>
}
