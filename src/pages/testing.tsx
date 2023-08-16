import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemas } from "../Schemas/FormSchemas"

export default function testing() {
  const [step, setStep] = useState(0)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(FormSchemas[step]),
    defaultValues: { Name: "", "Email Address": "", "Phone Number": "" },
  })

  const onSubmit = (date: FieldValues) => {
    alert(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center px-8 pt-20 "
    >
      {step === 0 && (
        <>
          <div>
            <label>Name</label>
            {errors.Name && <p>{errors.Name.message}</p>}
          </div>
          <input
            type="text"
            className=""
            {...register("Name", { required: "required field" })}
          />
        </>
      )}
      {step === 1 && (
        <>
          <div>
            <label>Email Address</label>
            {errors["Email Address"] && (
              <p>{errors["Email Address"].message}</p>
            )}
          </div>
          <input
            type="text"
            className=""
            {...register("Email Address", { required: "required field" })}
          />
          <div>
            <label>Phone Number</label>
            {errors["Phone Number"] && <p>{errors["Phone Number"].message}</p>}
          </div>
          <input
            type="text"
            className=""
            {...register("Phone Number", { required: "required field" })}
          />
        </>
      )}

      <button
        type="button"
        disabled={step === 0}
        className={`m-4 self-center rounded-lg border-2 border-slate-800 p-2 px-4 hover:bg-orange-400 disabled:opacity-20`}
        onClick={() => step >= 0 && setStep(step - 1)}
      >
        Go back
      </button>
      <button
        type="button"
        disabled={!isValid}
        className={`m-4 self-center rounded-lg border-2 border-slate-800 p-2 px-4 hover:bg-orange-400 disabled:opacity-20`}
        onClick={() => step <= 3 && setStep(step + 1)}
      >
        Next
      </button>
    </form>
  )
}
