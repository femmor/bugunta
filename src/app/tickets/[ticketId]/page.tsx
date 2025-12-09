type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    return (
        <div className="font-bold text-amber-300">Ticket Page {ticketId}</div>
    )
}

export default TicketPage