"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
    try {
        await prisma.ticket.delete({
            where: { id },
        });

        // Revalidate the tickets list page
        revalidatePath(ticketsPath());

        redirect(ticketsPath());
    } catch (error) {
        console.error(`Error deleting ticket with id ${id}:`, error);
        throw error;
    }
}
