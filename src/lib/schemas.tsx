// export const FormSchemas: Array<ZodTypeAny> = [
//   z.object({
//     name: z
//       .string()
//       .regex(/^[A-Za-z]*$/, "Cannot contain digits")
//       .min(2, "Too short"),
//     emailAddress: z.string().email(),
//     phoneNumber: z
//       .string()
//       .regex(/\d*$/, "Only digits allow")
//       .min(10, "Must be 10 digits"),
//   }),
//   z.object({
//     plan: z.enum(["arcade", "advanced", "pro"]),
//   }),
//   z.object({ addons: z.array(z.string()) }),
//   z.object({}),
//   z.object({}),
// ]

import { z } from "zod"

export const FormSchemas = [
  z.object({
    name: z
      .string()
      .regex(/^[A-Za-z]*$/, "Cannot contain digits")
      .min(2, "Too short"),
    emailAddress: z.string().email(),
    phoneNumber: z
      .string()
      .regex(/\d*$/, "Only digits allow")
      .min(10, "Must be 10 digits"),
    plan: z.string(),
    addons: z.array(z.string()),
  }),
]

export const StepOneSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z]*$/, "Cannot contain digits")
    .min(2, "Too short"),
  emailAddress: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/\d*$/, "Only digits allow")
    .min(10, "Must be 10 digits"),
})

export const StepTwoSchema = z.object({
  plan: z.string().min(1),
})
export const StepThreeSchema = z.object({ addons: z.array(z.string()).min(1) })

export type StepOneFields = z.infer<typeof StepOneSchema>
export type StepTwoFields = z.infer<typeof StepTwoSchema>
export type StepThreeFields = z.infer<typeof StepThreeSchema>
