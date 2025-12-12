"use server"

import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const createTicket = async (formData: FormData): Promise<void> => {
    try {
        const newTicket = {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            status: Status.OPEN,
        };

        const ticket = await prisma.ticket.create({
            data: newTicket,
        });

        revalidatePath(ticketsPath())
        console.log(ticket)
    } catch (error) {
        console.error("Error creating ticket:", error);
    }
}