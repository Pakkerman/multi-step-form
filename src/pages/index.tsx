import Image from "next/image"
import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useRef,
  useState,
} from "react"
import { useForm } from "react-hook-form"
import { MobileProgress, DesktopProgress } from "../components/Prograss"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemas } from "~/lib/schemas"
import {
  calculateAddons,
  calculatePlan,
  calculateTotal,
  formatBillCycle,
} from "~/helpers/helpers"

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return <></>
  return <p className=" text-primary-strawberry-red">{message}</p>
}

const FormFieldData = {
  basicInfo: [
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
  ],
  plan: [
    { fieldName: "arcade", label: "Arcade", monthlyPrice: 9 },
    { fieldName: "advanced", label: "Advanced", monthlyPrice: 12 },
    { fieldName: "pro", label: "Pro", monthlyPrice: 15 },
  ],
  addons: [
    {
      label: "Online Service",
      info: "Access to multiplayer games",
      monthlyPrice: 1,
    },
    {
      label: "Larger storage",
      info: "Extra 1TB of cloud storage",
      monthlyPrice: 2,
    },
    {
      label: "Customizable profile",
      info: "Custom theme on your profile",
      monthlyPrice: 2,
    },
  ],
}

const Form = ({
  formRef,
  setSubmitting,
}: {
  formRef: RefObject<HTMLFormElement>
  setSubmitting: Dispatch<SetStateAction<boolean>>
}) => {
  const [step, setStep] = useState(0)
  const [plan, setPlan] = useState<string>("")
  const [billCycle, setBillCycle] = useState<"monthly" | "yearly">("monthly")
  const [addons, setAddons] = useState<Array<string>>([])
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    getFieldState,
    watch,
    reset,
    setValue,
    getValues,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(FormSchemas[step]),
    defaultValues: {
      name: "pak",
      emailAddress: "test@gmail.com",
      phoneNumber: "1231231231",
      plan: "pro",
      addons: ["Online Services"],
    },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    await new Promise((resolve) =>
      setTimeout(() => {
        setSubmitting(false)
        return resolve
      }, 1000)
    )

    alert(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 px-6 py-8"
    >
      {step === 0 && (
        <>
          <h1 className="text-2xl font-bold">Finishing Up</h1>
          <p className="text-neutral-cool-gray">
            Double-check everything looks OK before confirming
          </p>
          {FormFieldData.basicInfo.map((item) => {
            const { fieldName, label, placeholder } = item
            return (
              <div className="space-1 flex flex-col py-1" key={label}>
                <div className="flex justify-between text-sm text-primary-marine-blue">
                  <label className="">{label}</label>
                  {errors[fieldName] && (
                    <ErrorMessage message={errors[fieldName]?.message} />
                  )}
                </div>
                <input
                  placeholder={placeholder}
                  className="rounded-lg border-[1px] border-neutral-cool-gray py-2 pl-3"
                  type="text"
                  {...register(fieldName)}
                />
              </div>
            )
          })}
        </>
      )}
      {step === 1 && (
        <>
          <div className="flex flex-col space-y-2">
            {FormFieldData.plan.map((item) => {
              const { fieldName, label, monthlyPrice } = item
              const yearlyPrice = monthlyPrice * 10
              return (
                <label
                  key={label}
                  className={`flex cursor-pointer space-x-3 overflow-hidden rounded-lg border-[1.5px]  p-4 transition-colors hover:border-primary-purplish-blue ${
                    getValues("plan") === fieldName
                      ? "border-primary-purplish-blue bg-neutral-light-gray/50"
                      : "border-neutral-cool-gray"
                  }`}
                  {...register("plan")}
                  onClick={() => {
                    setPlan(label)
                    setValue("plan", fieldName as string)
                  }}
                >
                  <Image
                    src={`assets/images/icon-${label}.svg`}
                    width={40}
                    height={40}
                    alt={`${label} icon`}
                  />
                  <div className="w-full">
                    <label className="font-bold capitalize text-primary-marine-blue">
                      {label}
                    </label>
                    <div className="flex items-center justify-between text-neutral-cool-gray">
                      <p>
                        ${billCycle === "monthly" ? monthlyPrice : yearlyPrice}
                        /mo
                      </p>
                      <p
                        className={`text-sm text-primary-marine-blue transition-all ${
                          billCycle === "yearly"
                            ? "translate-y-[0%] opacity-100"
                            : "translate-y-[100%] opacity-0"
                        } `}
                      >
                        2 months free
                      </p>
                    </div>
                  </div>
                </label>
              )
            })}
          </div>
          <div className="flex justify-evenly rounded-lg bg-neutral-magnolia py-4">
            <p
              className={`w-20 text-center transition-all ${
                billCycle === "monthly"
                  ? "font-bold text-primary-marine-blue"
                  : "text-neutral-cool-gray"
              }`}
            >
              Monthly
            </p>
            <button
              onClick={() =>
                setBillCycle(billCycle === "yearly" ? "monthly" : "yearly")
              }
              className="relative h-6 w-12 rounded-full bg-primary-marine-blue"
            >
              <div
                className={`absolute top-[50%] mx-1 h-4 w-4 translate-y-[-50%] rounded-full bg-neutral-magnolia transition-all  ${
                  billCycle === "monthly" ? "left-[0%]" : "left-[50%]"
                }`}
              />
            </button>
            <p
              className={`w-20 text-center transition-all ${
                billCycle === "yearly"
                  ? "font-bold text-primary-marine-blue"
                  : "text-neutral-cool-gray"
              }`}
            >
              Yearly
            </p>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold text-primary-marine-blue">
            Pick Add-ons
          </h1>
          <p className="text-neutral-cool-gray">
            Add-ons help enhance your gaming experience!
          </p>
          <div className="space-y-4">
            {FormFieldData.addons.map((item) => {
              const { label, info, monthlyPrice } = item
              let price = monthlyPrice
              if (billCycle === "yearly") price *= 10
              return (
                <label
                  key={label}
                  htmlFor={label}
                  className={`flex cursor-pointer space-x-4 rounded-lg border-[1.5px]  px-4 py-3 transition-all 
                  hover:border-primary-purplish-blue
                  ${
                    addons.includes(label)
                      ? " border-primary-purplish-blue bg-neutral-light-gray/20"
                      : "border-neutral-light-gray"
                  }`}
                >
                  <input
                    className="w-6 accent-primary-purplish-blue outline-none transition-all "
                    id={label}
                    type="checkbox"
                    {...register("addons")}
                    value={label}
                    onClick={() => {
                      addons.includes(label)
                        ? setAddons(addons.filter((item) => item !== label))
                        : setAddons([...addons, label])
                    }}
                    checked={addons.includes(label)}
                  />
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="font-bold text-primary-marine-blue">
                        {label}
                      </p>
                      <p className="text-sm text-neutral-cool-gray">{info}</p>
                    </div>
                    <p className="text-sm text-primary-purplish-blue">
                      +${price}/mo
                    </p>
                  </div>
                </label>
              )
            })}
          </div>
        </div>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Finishing Up</h1>
            <p className="text-neutral-cool-gray">
              Double-check everything looks OK before confirming
            </p>
            <div className="bg-neutral-magnolia p-4">
              <div className="flex justify-between">
                <div>
                  <h1 className=" font-bold capitalize text-primary-marine-blue">
                    {watch("plan")} ({billCycle})
                  </h1>
                  <button
                    className="text-neutral-cool-gray underline"
                    type="button"
                    onClick={() => setStep(0)}
                  >
                    Change
                  </button>
                </div>
                <p className="self-end font-bold text-primary-marine-blue">
                  ${calculatePlan(getValues("plan"), billCycle)}/
                  {formatBillCycle(billCycle)}
                </p>
              </div>
              <hr className="my-4 border-[1px] "></hr>
              <ul className="space-y-4">
                {addons.map((item) => (
                  <li key={item} className="flex justify-between">
                    <p className="text-neutral-cool-gray">{item}</p>
                    <p className="text-primary-marine-blue">
                      +${calculateAddons(item, billCycle)}/
                      {formatBillCycle(billCycle)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between p-4 text-neutral-cool-gray">
              <p>Total (per {billCycle.slice(0, -2)})</p>
              <p>
                +$
                {calculateTotal(
                  getValues("plan"),
                  getValues("addons"),
                  billCycle
                )}
                /{formatBillCycle(billCycle)}
              </p>
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <div className="flex flex-col items-center">
          <Image
            src="assets/images/icon-thank-you.svg"
            width={80}
            height={80}
            alt="thank you icon"
          />
          <h1 className="text-3xl font-bold text-primary-marine-blue">
            Thank you!
          </h1>
          <p className="text-center text-neutral-cool-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      )}
      {step <= 3 && (
        <div className=" flex justify-between">
          <button
            className="rounded-lg bg-neutral-magnolia px-4 py-2 text-neutral-cool-gray"
            type="button"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            Go back
          </button>

          <button
            className="rounded-lg bg-primary-marine-blue px-4 py-2 text-neutral-magnolia disabled:opacity-30"
            disabled={!isValid || step > 3}
            type={`${step === 4 ? "submit" : "button"}`}
            onClick={() => setStep(step + 1)}
          >
            {step === 3 ? "Confirm" : "Next"}
          </button>
        </div>
      )}
      {/* <pre>{billCycle}</pre>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      <pre>{isValid ? "valid" : "invalid"}</pre>
      <pre>{step}</pre>
      <pre>{JSON.stringify(addons, null, 2)}</pre> */}
    </form>
  )
}

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)

  return (
    <>
      <main className="relative flex h-[100dvh] min-h-[700px] min-w-[390px] flex-col items-center justify-between transition-all md:justify-center">
        <Image
          className="absolute z-[-100] w-full md:hidden"
          src="/assets/images/bg-sidebar-mobile.svg"
          width={127}
          height={375}
          alt="background image"
          sizes="100vw"
        />
        <section className="flex h-40 items-center justify-center md:hidden">
          <MobileProgress />
        </section>
        <section className="w-[90%] max-w-[390px] rounded-xl bg-neutral-alabaster drop-shadow-md md:flex md:max-w-[800px] md:flex-row md:items-center ">
          <div className="relative hidden h-[568px] w-[274px] md:block">
            <DesktopProgress />
            <div className="absolute top-0 z-[-100] h-[568px] w-[274px] p-4">
              <Image
                className="h-full rounded-xl object-cover"
                src="/assets/images/bg-sidebar-desktop.svg"
                width={274}
                height={568}
                alt="background image"
                sizes=""
              />
            </div>
          </div>

          <Form formRef={formRef} setSubmitting={setSubmitting} />
        </section>
        <section className="flex h-20 w-full items-center justify-end bg-neutral-alabaster px-4 md:hidden">
          <button
            type="submit"
            disabled={submitting}
            onClick={() => {
              // programmatically submit form that is on another place
              // useRef to get that form's reference and requestSubmit() will trigger form's onSubmit attribute
              // not using submit() this will force submit and skip the any validation
              if (formRef.current) formRef.current.requestSubmit()
            }}
            className={`text-alabaster font-sm rounded-md bg-primary-marine-blue px-4 py-2 text-neutral-magnolia
            ${submitting ? "bg-slate-50" : "bg-primary-marine-blue "}`}
          >
            Next Step
          </button>
        </section>
      </main>
    </>
  )
}
