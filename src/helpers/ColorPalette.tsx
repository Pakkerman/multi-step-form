import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react"

const colors = [
  "primary-marine-blue",
  "primary-purplish-blue",
  "primary-pastel-blue",
  "primary-light-blue",
  "primary-strawberry-red",
  "neutral-cool-gray",
  "neutral-light-gray",
  "neutral-magnolia",
  "neutral-alabaster",
  "neutral-white",
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
    <div>
      {show && (
        <div className="fixed left-0 top-0 z-50 flex flex-col">
          {colors.map((item) => (
            <div className={`h-10  bg-${item} `}>
              <p className="bg-slate-800 text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
