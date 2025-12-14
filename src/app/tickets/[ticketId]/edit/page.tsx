import { notFound } from "next/navigation";
import { TicketUpdateForm } from "@/features";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketEditPageProps = {
    params: {
        ticketId: string;
    };
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <TicketUpdateForm ticket={ticket} />
    )
}
export default TicketEditPage