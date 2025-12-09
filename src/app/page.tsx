import Link from "next/link"
import { ticketsPath } from "@/paths"

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="font-bold text-amber-300 text-3xl">Welcome to the Home Page</h1>
      <Link href={ticketsPath()} className="underline">Go to Tickets Page</Link>
    </div>
  )
}
export default HomePage