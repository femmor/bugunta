import { notFound } from "next/navigation";
import { TicketItem } from "@/features";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketDetailsProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketDetails = async ({ params }: TicketDetailsProps) => {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
            {ticket && <TicketItem ticket={ticket} isDetailsPage={true} />}
        </div>
    )
}

export default TicketDetails