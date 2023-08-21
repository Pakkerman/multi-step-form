// import { useState } from "react"
// import { FieldValues, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { FormSchemas } from "../lib/schemas"
// import { ZodType, ZodTypeAny, z } from "zod"

// const formSchemas = z
//   .object({
//     email: z.string().email(),
//     password: z.string().min(3, "min length 3 characters"),
//     confirmPassword: z.string().min(3, "min length 3 character"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "password must match",
//     path: ["confirmPassword"],
//   })

// type SignUpSchema = z.infer<typeof formSchemas>

// export default function testing() {
//   const [step, setStep] = useState(0)
//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm<SignUpSchema>({
//     resolver: zodResolver(formSchemas),
//     mode: "onTouched",
//   })

//   const onSubmit = async (data: SignUpSchema) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     alert(data)
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col px-8 pt-20"
//     >
//       <div className="flex justify-between text-sm">
//         <label>Email</label>
//         {errors.email && (
//           <p className="text-red-400">{`${errors.email.message}`}</p>
//         )}
//       </div>
//       <input type="text" {...register("email")} />
//       <div className="flex justify-between text-sm">
//         <label>Password</label>
//         {errors.password && (
//           <p className="text-red-400">{`${errors.password.message}`}</p>
//         )}
//       </div>
//       <input type="text" {...register("password")} />
//       <div className="flex justify-between text-sm">
//         <label>Confirm Password</label>
//         {errors.confirmPassword && (
//           <p className="text-red-400">{`${errors.confirmPassword.message}`}</p>
//         )}
//       </div>
//       <input type="text" {...register("confirmPassword")} />

//       <button
//         type="submit"
//         className="border-state-800 m-4 self-center border-2 px-4 py-2"
//       >
//         Submit
//       </button>
//       <button
//         type="button"
//         className="border-state-800 m-4 self-center border-2 px-4 py-2"
//         onClick={() => step <= 3 && setStep(step + 1)}
//       >
//         next
//       </button>
//       <pre>{JSON.stringify(watch(), null, 2)}</pre>
//       <pre>{isValid ? "valid" : "invalid"}</pre>
//       <pre>steps: {step}</pre>
//     </form>
//   )
// }
