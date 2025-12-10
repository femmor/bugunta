import { notFound } from "next/navigation";
import { TicketItem } from "@/features";
import { getTickets } from "@/features/ticket/queries/get-tickets";

type TicketDetailsProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketDetails = async ({ params }: TicketDetailsProps) => {
    const { ticketId } = await params;
    const ticket = await getTickets().then(tickets => tickets.find(t => t.id === ticketId));

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
            {ticket && <TicketItem {...ticket} />}
        </div>
    )
}

export default TicketDetails