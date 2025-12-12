import { getTickets } from "../queries/get-tickets"
import TicketItem from "./TicketItem"
const TicketList = async () => {
    const tickets = await getTickets()

    return (
        <div className="flex flex-col gap-y-2 sm:gap-3 w-full max-w-115">
            {tickets.map((ticket) => (
                <TicketItem ticket={ticket} key={ticket.id} />
            ))}
        </div>
    )
}
export default TicketList