import localFont from "next/font/local"

const ubuntu = localFont({
  src: [
    { path: "./../../public/assets/fonts/Ubuntu-Regular.ttf", weight: "400" },
    { path: "./../../public/assets/fonts/Ubuntu-Medium.ttf", weight: "500" },
    { path: "./../../public/assets/fonts/Ubuntu-Bold.ttf", weight: "700" },
  ],
})

type FontContextProviderProps = {
  children: React.ReactNode
}

export function FontWrapper(props: FontContextProviderProps) {
  const { children } = props
  return <div className={`${ubuntu.className}`}>{children}</div>
}
