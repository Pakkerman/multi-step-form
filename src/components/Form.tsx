// import Image from "next/image"
// import {
//   type Dispatch,
//   type RefObject,
//   type SetStateAction,
//   useState,
// } from "react"
// import { useForm } from "react-hook-form"
// import type { FieldValues, FieldErrors } from "react-hook-form"
// import { FormSchemas } from "~/lib/schemas"
// import {
//   calculateAddons,
//   calculatePlan,
//   calculateTotal,
//   formatBillCycle,
// } from "~/helpers/helpers"

// type FormFields = {
//   name: string
//   emailAddress: string
//   phoneNumber: string
//   plan: string
//   addons: Array<string>
// }

// function mockAPIcall(callback: () => void) {
//   setTimeout(callback, 1000)
// }

// export const ErrorMessage = ({
//   errors,
//   fieldName,
// }: {
//   errors: FieldErrors<FieldValues>
//   fieldName: string
// }) => {
//   const message = errors[fieldName]?.message as string
//   return <p className=" text-primary-strawberry-red">{message}</p>
// }

// export const FormHeading = ({
//   step,
//   align,
// }: {
//   step: number
//   align?: string
// }) => {
//   const { heading, info } = FormHeadingData[step]!
//   return (
//     <>
//       <h1 className="text-2xl font-bold text-primary-marine-blue">{heading}</h1>
//       <p
//         className={`text-neutral-cool-gray ${
//           align === "center" && "text-center"
//         }`}
//       >
//         {info}
//       </p>
//     </>
//   )
// }

// // const Form = ({
// //   formRef,
// //   setSubmitting,
// // }: {
// //   formRef: RefObject<HTMLFormElement>
// //   setSubmitting: Dispatch<SetStateAction<boolean>>
// // }) => {
// //   const [step, setStep] = useState(0)
// //   const [_, setPlan] = useState<string>("")
// //   const [billCycle, setBillCycle] = useState<"monthly" | "yearly">("monthly")
// //   const [addons, setAddons] = useState<Array<string>>([])
// //   const {
// //     register,
// //     formState: { errors, isSubmitting, isValid },
// //     handleSubmit,
// //     watch,
// //     setValue,
// //     getValues,
// //     reset,
// //   } = useForm<FormFields>({
// //     mode: "onTouched",
// //     defaultValues: {
// //       name: "pak",
// //       emailAddress: "test@gmail.com",
// //       phoneNumber: "1231231231",
// //       plan: "pro",
// //       addons: [],
// //     },
// //   })

// //   // ISSUE: Next doesn't not allow normal handlesubmit function, must be void promise function call,
// //   // Usein void promise function will cause page to refresh,
// //   // using watch() and button onClick to handle data for now
// //   const submit = (event: Event) => {
// //     event.preventDefault()
// //     console.log(watch())
// //   }

// //   return (
// //     <form className="flex flex-col space-y-4 px-6 py-8">
// //       {step === 0 && <StepOne step={step} />}
// //       {step === 1 && (
// //         <>
// //           <div className="flex flex-col space-y-2">
// //             <FormHeading step={step} />
// //             {FormFieldData.plan.map((item) => {
// //               const { fieldName, label, monthlyPrice } = item
// //               const yearlyPrice = monthlyPrice * 10
// //               return (
// //                 <label
// //                   key={label}
// //                   className={`flex cursor-pointer space-x-3 overflow-hidden rounded-lg border-[1.5px]  p-4 transition-colors hover:border-primary-purplish-blue ${
// //                     getValues("plan") === fieldName
// //                       ? "border-primary-purplish-blue bg-neutral-light-gray/50"
// //                       : "border-neutral-cool-gray"
// //                   }`}
// //                   {...register("plan")}
// //                   onClick={() => {
// //                     setPlan(label)
// //                     setValue("plan", fieldName)
// //                   }}
// //                 >
// //                   <Image
// //                     src={`assets/images/icon-${label}.svg`}
// //                     width={40}
// //                     height={40}
// //                     alt={`${label} icon`}
// //                   />
// //                   <div className="w-full">
// //                     <label className="font-bold capitalize text-primary-marine-blue">
// //                       {label}
// //                     </label>
// //                     <div className="flex items-center justify-between text-neutral-cool-gray">
// //                       <p>
// //                         ${billCycle === "monthly" ? monthlyPrice : yearlyPrice}
// //                         /mo
// //                       </p>
// //                       <p
// //                         className={`text-sm text-primary-marine-blue transition-all ${
// //                           billCycle === "yearly"
// //                             ? "translate-y-[0%] opacity-100"
// //                             : "translate-y-[100%] opacity-0"
// //                         } `}
// //                       >
// //                         2 months free
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </label>
// //               )
// //             })}
// //           </div>
// //           <div className="flex justify-evenly rounded-lg bg-neutral-magnolia py-4">
// //             <p
// //               className={`w-20 text-center transition-all ${
// //                 billCycle === "monthly"
// //                   ? "font-bold text-primary-marine-blue"
// //                   : "text-neutral-cool-gray"
// //               }`}
// //             >
// //               Monthly
// //             </p>
// //             <button
// //               onClick={() =>
// //                 setBillCycle(billCycle === "yearly" ? "monthly" : "yearly")
// //               }
// //               className="relative h-6 w-12 rounded-full bg-primary-marine-blue"
// //             >
// //               <div
// //                 className={`absolute top-[50%] mx-1 h-4 w-4 translate-y-[-50%] rounded-full bg-neutral-magnolia transition-all  ${
// //                   billCycle === "monthly" ? "left-[0%]" : "left-[50%]"
// //                 }`}
// //               />
// //             </button>
// //             <p
// //               className={`w-20 text-center transition-all ${
// //                 billCycle === "yearly"
// //                   ? "font-bold text-primary-marine-blue"
// //                   : "text-neutral-cool-gray"
// //               }`}
// //             >
// //               Yearly
// //             </p>
// //           </div>
// //         </>
// //       )}

// //       {step === 2 && (
// //         <>
// //           <FormHeading step={step} />
// //           <div className="flex flex-col space-y-2">
// //             <div className="space-y-4">
// //               {FormFieldData.addons.map((item) => {
// //                 const { label, info, monthlyPrice } = item
// //                 let price = monthlyPrice
// //                 if (billCycle === "yearly") price *= 10
// //                 return (
// //                   <label
// //                     key={label}
// //                     htmlFor={label}
// //                     className={`flex cursor-pointer space-x-4 rounded-lg border-[1.5px]  px-4 py-3 transition-all
// //                   hover:border-primary-purplish-blue
// //                   ${
// //                     addons.includes(label)
// //                       ? " border-primary-purplish-blue bg-neutral-light-gray/20"
// //                       : "border-neutral-light-gray"
// //                   }`}
// //                   >
// //                     <input
// //                       className="w-6 accent-primary-purplish-blue outline-none transition-all "
// //                       id={label}
// //                       type="checkbox"
// //                       {...register("addons")}
// //                       value={label}
// //                       onClick={() => {
// //                         addons.includes(label)
// //                           ? setAddons(addons.filter((item) => item !== label))
// //                           : setAddons([...addons, label])
// //                       }}
// //                       checked={addons.includes(label)}
// //                     />
// //                     <div className="flex w-full items-center justify-between">
// //                       <div>
// //                         <p className="font-bold text-primary-marine-blue">
// //                           {label}
// //                         </p>
// //                         <p className="text-sm text-neutral-cool-gray">{info}</p>
// //                       </div>
// //                       <p className="text-sm text-primary-purplish-blue">
// //                         +${price}/mo
// //                       </p>
// //                     </div>
// //                   </label>
// //                 )
// //               })}
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {step === 3 && (
// //         <>
// //           <div className="flex flex-col space-y-4">
// //             <FormHeading step={step} />
// //             <div className="bg-neutral-magnolia p-4">
// //               <div className="flex justify-between">
// //                 <div>
// //                   <h1 className=" font-bold capitalize text-primary-marine-blue">
// //                     {watch("plan")} ({billCycle})
// //                   </h1>
// //                   <button
// //                     className="text-neutral-cool-gray underline"
// //                     type="button"
// //                     onClick={() => setStep(0)}
// //                   >
// //                     Change
// //                   </button>
// //                 </div>
// //                 <p className="self-end font-bold text-primary-marine-blue">
// //                   ${calculatePlan(getValues().plan, billCycle)}/
// //                   {formatBillCycle(billCycle)}
// //                 </p>
// //               </div>
// //               <hr className="my-4 border-[1px] "></hr>
// //               <ul className="space-y-4">
// //                 {addons.map((item) => (
// //                   <li key={item} className="flex justify-between">
// //                     <p className="text-neutral-cool-gray">{item}</p>
// //                     <p className="text-primary-marine-blue">
// //                       +${calculateAddons(item, billCycle)}/
// //                       {formatBillCycle(billCycle)}
// //                     </p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div className="flex justify-between p-4 text-neutral-cool-gray">
// //               <p>Total (per {billCycle.slice(0, -2)})</p>
// //               <p>
// //                 +$
// //                 {calculateTotal(
// //                   getValues("plan"),
// //                   getValues("addons"),
// //                   billCycle
// //                 )}
// //                 /{formatBillCycle(billCycle)}
// //               </p>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //       {step === 4 && (
// //         <div className="flex flex-col items-center">
// //           <Image
// //             src="assets/images/icon-thank-you.svg"
// //             width={80}
// //             height={80}
// //             alt="thank you icon"
// //           />
// //           <FormHeading step={step} align={"center"} />
// //         </div>
// //       )}
// //       {step <= 3 && (
// //         <div className="flex justify-between">
// //           <button
// //             className="rounded-lg bg-neutral-magnolia px-4 py-2 text-neutral-cool-gray"
// //             type="button"
// //             onClick={() => setStep(step - 1)}
// //             disabled={step === 0}
// //           >
// //             Go back
// //           </button>

// //           {step < 3 && (
// //             <button
// //               className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
// //               disabled={!isValid}
// //               type="button"
// //               onClick={() => setStep(step + 1)}
// //             >
// //               Next
// //             </button>
// //           )}
// //           {step === 3 && (
// //             <button
// //               className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
// //               disabled={!isValid}
// //               type="submit"
// //               onClick={submit}
// //             >
// //               Confirm
// //             </button>
// //           )}
// //         </div>
// //       )}
// //       {/* <pre>{billCycle}</pre>
// //       <pre>{JSON.stringify(watch(), null, 2)}</pre>
// //       <pre>{isValid ? "valid" : "invalid"}</pre>
// //       <pre>{step}</pre>
// //       <pre>{JSON.stringify(addons, null, 2)}</pre> */}
// //     </form>
// //   )
// // }

// // export default Form

// // type StepOneProps = {
// //   step: number
// // }

// // function StepOne({ step }: StepOneProps) {
// //   const {
// //     register,
// //     formState: { errors, isValid },
// //   } = useForm({
// //     defaultValues: { name: "" },
// //   })
// //   return (
// //     <>
// //       <FormHeading step={step} />
// //       {FormFieldData.basicInfo?.map((item) => {
// //         const { fieldName, label, placeholder } = item
// //         return (
// //           <div className="space-1 flex flex-col py-1" key={label}>
// //             <div className="flex justify-between text-sm text-primary-marine-blue">
// //               <label className="">{label}</label>
// //               {errors && (
// //                 <ErrorMessage errors={errors} fieldName={fieldName ?? ""} />
// //               )}
// //             </div>
// //             <input
// //               placeholder={placeholder}
// //               className="rounded-lg border-[1px] border-neutral-cool-gray py-2 pl-3"
// //               type="text"
// //               {...register(fieldName)}
// //             />
// //           </div>
// //         )
// //       })}
// //     </>
// //   )
// // }
