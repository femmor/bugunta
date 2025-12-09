import Link from "next/link"
import { ticketsPath } from "@/paths"

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Welcome to Bug Hunter</h1>
        <p className="text-sm text-muted-foreground">Manage your bugs efficiently with Bug Hunter</p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">Go to Tickets Page</Link>
      </div>
    </div>
  )
}
export default HomePage