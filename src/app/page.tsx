import Link from "next/link"
import { ticketsPath } from "@/paths"

const HomePage = () => {
  return (
    <div className="">
      <h1 className="font-bold">Welcome to the Home Page</h1>
      <Link href={ticketsPath()} className="underline">Go to Tickets Page</Link>
    </div>
  )
}
export default HomePage