import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
})
export default function FontProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={`${ubuntu.variable}`}> {children} </div>
}
