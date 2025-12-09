import Link from "next/link"
import { initialTickets } from "@/data"
import { ticketDetailPath } from "@/paths"

enum TicketStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

const TicketsPage = () => {
    return (
        <div className="flex flex-col p-4">
            <h1>Tickets</h1>
            {initialTickets.map((ticket) => (
                <div key={ticket.id} className="border p-4 my-2">
                    <Link href={ticketDetailPath(ticket.id)} className="text-xl font-bold underline">{ticket.title}</Link>
                    <p>{ticket.content}</p>
                    <p>Status: {TicketStatus[ticket.status as keyof typeof TicketStatus]}</p>
                </div>
            ))}
        </div>
    )
}
export default TicketsPage