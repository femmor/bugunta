import { PiBugDroidDuotone } from "react-icons/pi";
import { initialTickets } from "@/data"
import { Placeholder } from "@/features";

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if (!ticket) {
        return <Placeholder label="Ticket not found" icon showButton iconType={<PiBugDroidDuotone className="mx-auto mb-2 text-primary/40" size={60} />} />;
    }

    return (
        <div className="flex flex-col">
            {ticket && <div className="p-4 border">
                <h1 className="text-2xl underline mb-2">{ticket.title}</h1>
                <p className="mb-2">{ticket.content}</p>
                <p>Status: {ticket.status}</p>
            </div>}
        </div>
    )
}

export default TicketPage