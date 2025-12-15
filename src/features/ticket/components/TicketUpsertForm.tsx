"use client"

import { Ticket } from "@prisma/client"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { upsertTicket } from "../actions/upsert-ticket"

type TicketUpsertFormProps = {
    ticket?: Ticket
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [isPending, startTransition] = useTransition()

    const upsertTicketAction = (formData: FormData) => {
        startTransition(async () => {
            await upsertTicket.bind(null, ticket?.id)(formData)
        })
    }

    return (
        <form className="flex flex-col gap-y-2" action={upsertTicketAction}>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" defaultValue={ticket?.title} />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket?.content} />

            <Button type="submit" disabled={isPending}>
                {isPending && <Spinner className="mr-2 h-4 w-4" />}
                {ticket ? "Update Ticket" : "Create Ticket"}
            </Button>
        </form>
    )
}
export default TicketUpsertForm