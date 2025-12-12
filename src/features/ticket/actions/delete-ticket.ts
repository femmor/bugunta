"use server"

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
    try {
        await prisma.ticket.delete({
            where: { id },
        });
        console.log(`Ticket with id ${id} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting ticket with id ${id}:`, error);
        throw error;
    }
}
