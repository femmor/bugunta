"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketDetailPath, ticketsPath } from "@/paths";

export const upsertTicket = async (id: string | undefined, formData: FormData): Promise<void> => {
    try {
        const newTicket = {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        };

        await prisma.ticket.upsert({
            where: { id: id ?? "" },
            update: newTicket,
            create: newTicket,
        });

        revalidatePath(ticketsPath());
    } catch (error) {
        console.error("Error updating ticket:", error);
        throw error;
    }

    if (id) {
        redirect(ticketDetailPath(id));
    }
}