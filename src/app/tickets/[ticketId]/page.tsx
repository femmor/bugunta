import { PiBugDroidDuotone } from "react-icons/pi";
import { initialTickets } from "@/data"
import { TicketItem } from "@/features";
import { Placeholder } from "@/features";

type TicketDetailsProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketDetails = async ({ params }: TicketDetailsProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if (!ticket) {
        return <Placeholder label="Ticket not found" icon showButton iconType={<PiBugDroidDuotone className="mx-auto mb-2 text-primary/40" size={60} />} />;
    }

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
            {ticket && <TicketItem {...ticket} />}
        </div>
    )
}

export default TicketDetails