"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicket = async (id: string, formData: FormData): Promise<void> => {
    try {
        const newTicket = {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        };

        await prisma.ticket.update({
            where: { id },
            data: newTicket,
        });

        revalidatePath(ticketsPath());
    } catch (error) {
        console.error("Error updating ticket:", error);
        throw error;
    }

    redirect(ticketsPath());
}