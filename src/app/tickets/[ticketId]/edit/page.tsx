import { notFound } from "next/navigation";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
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
        <div className="w-full flex flex-col flex-1 self-center mt-5 max-w-145">
            <TicketUpsertForm ticket={ticket} />
        </div>
    )
}
export default TicketEditPage