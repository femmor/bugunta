const TicketPage = async ({ params }: { params: Promise<{ ticketId: string }> }) => {
    const { ticketId } = await params;

    return (
        <div className="font-bold text-amber-300">Ticket Page {ticketId}</div>
    )
}
export default TicketPage