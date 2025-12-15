"use client"

import { Ticket } from "@prisma/client"
import { SubmitButton } from "@/components/subnit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { upsertTicket } from "../actions/upsert-ticket"

type TicketUpsertFormProps = {
    ticket?: Ticket
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {

    return (
        <form
            className="flex flex-col gap-y-2"
            action={upsertTicket.bind(null, ticket?.id)}
        >
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" defaultValue={ticket?.title} />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket?.content} />

            <SubmitButton label={ticket ? "Update Ticket" : "Create Ticket"} />
        </form>
    )
}
export default TicketUpsertForm