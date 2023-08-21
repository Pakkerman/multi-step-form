import React, { useEffect, useState } from "react"

const colors = [
  "bg-primary-marine-blue",
  "bg-primary-purplish-blue",
  "bg-primary-pastel-blue",
  "bg-primary-light-blue",
  "bg-primary-strawberry-red",
  "bg-neutral-cool-gray",
  "bg-neutral-light-gray",
  "bg-neutral-magnolia",
  "bg-neutral-alabaster",
  "bg-neutral-white",
]

export const ColorPalette = () => {
  const [show, setShow] = useState(false)

  const handleKeypress = (event: globalThis.KeyboardEvent) => {
    if (event.key !== "c") return
    setShow((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener("keypress", handleKeypress)
    return () => removeEventListener("keypress", handleKeypress)
  }, [])

  return (
    <>
      {show && (
        <div className="fixed left-0 top-0 z-50 flex flex-col">
          {colors.map((item) => (
            <div key={item} className={`h-14 ${item}`}>
              <p className="bg-slate-800 text-sm text-slate-200">
                {item.split("bg-").join("")}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
