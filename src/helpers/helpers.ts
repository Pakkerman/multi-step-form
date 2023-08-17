export function calculatePlan(plan: string, cycle: string): number {
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

  if (cycle === "yearly") return price * 10
  return price
}

export function calculateAddons(addonName: string, cycle: string): number {
  let price = 0
  switch (addonName) {
    case "Online Service":
      price = 1
      break
    case "Larger storage":
      price = 2
      break
    case "Customizable profile":
      price = 2
      break
  }

  if (cycle === "yearly") return price * 10
  return price
}

export function calculateTotal(): number {}
