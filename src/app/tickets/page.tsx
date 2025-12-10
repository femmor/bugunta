import { Suspense } from "react"
import { Heading, LoadingSpinner, TicketList } from "@/features"

const TicketsPage = async () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-2 sm:px-4 lg:px-8">
                <Heading title="All Tickets" subtitle="Manage your tech debt efficiently with Bug Hunter" />
                <TicketList />
            </div>
        </Suspense>
    )
}
export default TicketsPage