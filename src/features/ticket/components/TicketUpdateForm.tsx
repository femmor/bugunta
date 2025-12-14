import { Ticket } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { updateTicket } from "../actions/update-ticket"

type TicketUpdateFormProps = {
    ticket: Ticket;
}

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
    return (
        <form className="flex flex-col gap-y-2" action={updateTicket.bind(null, ticket.id)}>
            <Label htmlFor="title">{ticket.title}</Label>
            <Input type="text" id="title" name="title" defaultValue={ticket.title} />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket.content} />
            <Button type="submit">Update Ticket</Button>
        </form>
    )
}
export default TicketUpdateForm