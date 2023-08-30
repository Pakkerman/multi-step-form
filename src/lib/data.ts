export const FormHeadingData: { heading: string; info: string }[] = [
  {
    heading: "Personal info",
    info: "Please provide your name, email address, and phone number.",
  },
  {
    heading: "Select your plan",
    info: "You have the option of monthly or yearly billing.",
  },
  {
    heading: "Pick add-ons",
    info: "Add-ons help enhance your gaming experience.",
  },
  {
    heading: "Finishing up",
    info: "Double-check everything looks OK before confirming.",
  },
  {
    heading: "Thank you!",
    info: " Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
  },
]

type StepOneFieldData = Array<{
  fieldName: "name" | "emailAddress" | "phoneNumber"
  label: string
  placeholder: string
}>

export const StepOneFieldData: StepOneFieldData = [
  { fieldName: "name", label: "Name", placeholder: "e.g. Stephen King" },
  {
    fieldName: "emailAddress",
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    fieldName: "phoneNumber",
    label: "Phone Number",
    placeholder: "e.g. 1234567890",
  },
]

type StepTwoFieldData = Array<{
  fieldName: "arcade" | "advanced" | "pro"
  label: string
  monthlyPrice: number
}>

export const StepTwoFieldData: StepTwoFieldData = [
  { fieldName: "arcade", label: "Arcade", monthlyPrice: 9 },
  { fieldName: "advanced", label: "Advanced", monthlyPrice: 12 },
  { fieldName: "pro", label: "Pro", monthlyPrice: 15 },
]

type StepThreeFieldData = Array<{
  fieldName: "onlineService" | "largerStorage" | "CustomizableProfile"
  label: string
  info: string
  monthlyPrice: number
}>

export const StepThreeFieldData: StepThreeFieldData = [
  {
    fieldName: "onlineService",
    label: "Online Service",
    info: "Access to multiplayer games",
    monthlyPrice: 1,
  },
  {
    fieldName: "largerStorage",
    label: "Larger Storage",
    info: "Extra 1TB of cloud storage",
    monthlyPrice: 2,
  },
  {
    fieldName: "CustomizableProfile",
    label: "Customizable Profile",
    info: "Custom theme on your profile",
    monthlyPrice: 2,
  },
]
