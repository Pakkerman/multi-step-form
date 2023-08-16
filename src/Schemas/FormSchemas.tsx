import { ZodTypeAny, z } from "zod"

export const FormSchemas: Array<ZodTypeAny> = [
  z.object({ Name: z.string().min(2, "must longer than 2") }),
  z.object({
    "Email Address": z.string().email(),
    "Phone Number": z.string().min(10, "Phone Number"),
  }),
  z.object({ radio: z.string() }),
  z.object({ checkbox: z.array(z.string()) }),
  z.object({}),
]
