import { initialTickets } from "@/data"

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    return (
        <div className="flex flex-col">
            {ticket ? (
                <div className="p-4 border">
                    <h1 className="text-2xl underline mb-2">{ticket.title}</h1>
                    <p className="mb-2">{ticket.content}</p>
                    <p>Status: {ticket.status}</p>
                </div>
            ) : (
                <p>Ticket not found.</p>
            )}
        </div>
    )
}

export default TicketPage