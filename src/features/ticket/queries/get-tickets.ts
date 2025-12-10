import { initialTickets } from "@/data"
import { TicketProps } from "../types"


export const getTickets = async (): Promise<TicketProps[]> => {
    // simulate async operation - wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // return initial tickets
    return new Promise((resolve) => {
        resolve(initialTickets)
    })
}