import { initialTickets } from "@/data"
import { Heading, Ticket } from "@/features"

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-2 sm:px-4 lg:px-8">
            <Heading title="All Tickets" subtitle="Manage your tech debt efficiently with Bug Hunter" />
            <div className="flex flex-col gap-y-2 sm:gap-3 w-full max-w-4xl">
                {initialTickets.map((ticket) => (
                    <Ticket {...ticket} key={ticket.id} />
                ))}
            </div>
        </div>
    )
}
export default TicketsPage