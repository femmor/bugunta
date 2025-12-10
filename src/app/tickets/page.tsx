import { Ticket } from "@/components"
import { Separator } from "@/components/ui/separator"
import { initialTickets } from "@/data"

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">Tickets</h1>
                <Separator className="my-2 w-24" />
                <p className="text-sm text-muted-foreground mt-2">Here you can view and manage all your bugs</p>
            </div>
            <div className="flex flex-col gap-y-2 sm:gap-y-3">
                {initialTickets.map((ticket) => (
                    <Ticket {...ticket} key={ticket.id} />
                ))}
            </div>
        </div>
    )
}
export default TicketsPage