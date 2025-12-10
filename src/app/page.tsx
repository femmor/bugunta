import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ticketsPath } from "@/paths"

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Welcome to Bug Hunter</h1>
        <p className="text-sm text-muted-foreground">Manage your bugs efficiently with Bug Hunter</p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Button asChild size="lg" className="bg-primary">
          <Link href={ticketsPath()}>View All Tickets</Link>
        </Button>
      </div>
    </div>
  )
}
export default HomePage