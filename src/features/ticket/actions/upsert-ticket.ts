"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import zod from "zod";
import { prisma } from "@/lib/prisma";
import { ticketDetailPath, ticketsPath } from "@/paths";

const upsertTicketSchema = zod.object({
    title: zod.string().min(1, "Title is required").max(99, "Title must be at most 100 characters"),
    content: zod.string().min(1, "Content is required").max(1024, "Content must be at most 1000 characters"),
});
export const upsertTicket = async (id: string | undefined, _actionState: { message: string }, formData: FormData): Promise<{ message: string, payload?: FormData }> => {
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
        return {
            message: "There was an error submitting the form. Please try again.",
            payload: formData
        };
    }

    revalidatePath(ticketsPath());

    if (id) {
        redirect(ticketDetailPath(id));
    }

    return { message: "Ticket created successfully." };
}