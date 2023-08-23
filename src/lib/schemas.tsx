import { type ZodTypeAny, z } from "zod"

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
    plan: z.enum(["arcade", "advanced", "pro"]),
    addons: z.array(z.string()),
  }),
]
