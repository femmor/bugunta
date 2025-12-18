"use client"

import { Ticket } from "@prisma/client"
import { useActionState } from "react"
import { Form } from "@/components/form/form"
import { SubmitButton } from "@/components/form/subnit-button"
import { EMPTY_ACTION_STATE } from "@/components/form/uitls/to-action-state"
import { FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { upsertTicket } from "../actions/upsert-ticket"

type TicketUpsertFormProps = {
    ticket?: Ticket
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(upsertTicket.bind(null, ticket?.id),
        EMPTY_ACTION_STATE
    )

    return (
        <Form
            className="flex flex-col gap-y-2"
            action={action}
            actionState={actionState}
        >
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" defaultValue={(actionState.payload?.get("title") as string) ?? ticket?.title} />
            <FieldError errors={actionState.fieldErrors?.title?.map(message => ({ message }))} />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={(actionState.payload?.get("content") as string) ?? ticket?.content} />
            <FieldError errors={actionState.fieldErrors?.content?.map(message => ({ message }))} />

            <SubmitButton label={ticket ? "Update Ticket" : "Create Ticket"} />
        </Form>
    )
}
export default TicketUpsertForm