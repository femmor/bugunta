"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import zod from "zod";
import { setCookieByKey } from "@/actions/cookies";
import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/uitls/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketDetailPath, ticketsPath } from "@/paths";

const upsertTicketSchema = zod.object({
    title: zod.string().min(1, "Title must contain at least 1 character").max(99, "Title must be at most 100 characters"),
    content: zod.string().min(1, "Content must contain at least 1 character").max(1024, "Content must be at most 1000 characters"),
});
export const upsertTicket = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {
    try {
        const newTicket = upsertTicketSchema.parse({
            title: formData.get("title"),
            content: formData.get("content"),
        });

        await prisma.ticket.upsert({
            where: { id: id ?? "" },
            update: newTicket,
            create: newTicket,
        });
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    revalidatePath(ticketsPath());

    if (id) {
        await setCookieByKey("toast", "Ticket updated.");
        redirect(ticketDetailPath(id));
    }

    return toActionState("Ticket created successfully.", "SUCCESS");
}