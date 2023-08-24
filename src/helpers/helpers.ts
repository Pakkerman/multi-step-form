export function calculatePlan(plan: string, billCycle: string): number {
  let price = 0
  switch (plan) {
    case "arcade":
      price = 9
      break
    case "advanced":
      price = 12
      break
    case "pro":
      price = 15
      break
  }

  if (billCycle === "yearly") return price * 10
  return price
}

export function calculateAddons(addonName: string, billCycle: string): number {
  let price = 0
  switch (addonName) {
    case "Online Service":
      price = 1
      break
    case "Larger Storage":
      price = 2
      break
    case "Customizable Profile":
      price = 2
      break
  }

  if (billCycle === "yearly") return price * 10
  return price
}

export function calculateTotal(
  plan: string,
  addons: string[],
  billCycle: string
): number {
  return (
    calculatePlan(plan, billCycle) +
    addons
      .map((item) => calculateAddons(item, billCycle))
      .reduce((acc, curr) => acc + curr)
  )
}

export function formatBillCycle(billCycle: string): string {
  if (billCycle === "monthly") return "mo"
  if (billCycle === "yearly") return "yr"
  return ""
}
