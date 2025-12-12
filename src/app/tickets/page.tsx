import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading, LoadingSpinner, TicketCreateForm, TicketList } from "@/features"

const TicketsPage = async () => {
    return (
        <>
            <Heading title="All Tickets" subtitle="Manage your tech debt efficiently with Bug Hunter" />
            <Card className="w-full max-w-115 mb-4 self-center">
                <CardHeader>
                    <CardTitle>Create New Ticket</CardTitle>
                    <CardDescription>
                        Report bugs and issues to keep your projects on track.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <TicketCreateForm />
                </CardContent>
            </Card>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 px-2 sm:px-4 lg:px-8">
                <Suspense fallback={<LoadingSpinner />}>
                </Suspense>
                <TicketList />
            </div>
        </>
    )
}
export default TicketsPage