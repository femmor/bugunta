import { clsx } from 'clsx'
import Link from "next/link"
import { ElementType } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { initialTickets } from "@/data"
import { ticketDetailPath } from "@/paths"

enum TicketStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

const TicketIcons: Record<string, ElementType> = {
    OPEN: FaRegFolderOpen,
    IN_PROGRESS: FaHourglassStart,
    DONE: FaCheckCircle,
};

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold tracking-tighter">Tickets</h1>
                <p className="text-sm text-muted-foreground">Here you can view and manage all your bugs</p>
            </div>
            <div className="flex flex-1 flex-col gap-y-2">
                {initialTickets.map((ticket, index) => (
                    <div
                        key={ticket.id}
                        className="border border-slate-100 p-4 my-2 w-full rounded-md max-w-[460px] animate-fade-in-from-top"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: 'both'
                        }}
                    >
                        <Link href={ticketDetailPath(ticket.id)} className="text-xl font-bold underline">{ticket.title}</Link>
                        <p className={clsx("text-sm text-slate-400 truncate my-1", { "line-through": ticket.status === "DONE" })}>{ticket.content}</p>
                        {(() => {
                            const Icon = TicketIcons[ticket.status as keyof typeof TicketIcons];
                            return (
                                <p className='flex items-center gap-1'>Status: <Icon className="inline-block mr-1" size={18} color={
                                    ticket.status === "DONE" ? "green" : ticket.status === "IN_PROGRESS" ? "orange" : "gray"
                                } /> {TicketStatus[ticket.status as keyof typeof TicketStatus]}</p>
                            );
                        })()}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TicketsPage