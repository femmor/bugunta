import { Suspense } from "react"
import CardCompact from "@/components/card-compact"
import { Heading, LoadingSpinner, TicketList } from "@/features"
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm"

const TicketsPage = async () => {
    return (
        <>
            <Heading title="All Tickets" subtitle="Manage your tech debt efficiently with Bug Hunter" />
            <CardCompact className="w-full max-w-115 mb-4 self-center" title="Create New Ticket" description="Report a new issue or task to be addressed" content={<TicketUpsertForm />} />
            <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-2 sm:px-4 lg:px-8">
                <Suspense fallback={<LoadingSpinner />}>
                </Suspense>
                <TicketList />
            </div>
        </>
    )
}
export default TicketsPage

