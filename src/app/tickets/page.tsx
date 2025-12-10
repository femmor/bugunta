import { Heading, Ticket } from "@/components"
import { initialTickets } from "@/data"

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <Heading title="All Tickets" subtitle="Manage your tech debt efficiently with Bug Hunter" />
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