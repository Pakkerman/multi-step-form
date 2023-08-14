import React, { useEffect, useState } from "react"

export const WindowObserver = () => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)

    return () => {
      removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <h1 className="fixed left-[40%] top-0">
      {width} x {height}
    </h1>
  )
}
