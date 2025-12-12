"use server"

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
    try {
        await prisma.ticket.delete({
            where: { id },
        });

        redirect(ticketsPath());
    } catch (error) {
        console.error(`Error deleting ticket with id ${id}:`, error);
        throw error;
    }
}
