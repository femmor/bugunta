"use client";

import { Ticket } from '@prisma/client';
import { clsx } from 'clsx'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketDetailPath } from "@/paths"
import { deleteTicket } from '../actions/delete-ticket';
import { TicketIcons, TicketStatus } from '../constants';

const TicketItem = ({ id, title, status, content }: Ticket) => {

    const pathname = usePathname();
    const isDetailsPage = pathname === ticketDetailPath(id);

    const handleEdit = () => {
        console.log("Edit ticket with id:", id);
    }

    const handleDelete = async () => {
        await deleteTicket(id);
    }

    return (
        <div className='flex flex-col sm:flex-row sm:justify-center gap-2 w-full'>
            <Card
                key={id}
                className={`w-full animate-fade-in-from-top ${isDetailsPage ? 'sm:max-w-145' : 'sm:max-w-115'} min-w-0`}
                style={{
                    animationDelay: `${parseInt(id) * 100}ms`,
                    animationFillMode: 'both'
                }}
            >
                <CardHeader className="pb-3">
                    <CardTitle>
                        <h3 className="text-base sm:text-lg font-semibold flex-1">{title}</h3>
                    </CardTitle>
                    <CardDescription>
                        {(() => {
                            const Icon = TicketIcons[status as keyof typeof TicketIcons];
                            return (
                                <span className='text-xs flex items-center gap-1'><Icon className="inline-block" size={18} color={
                                    status === "DONE" ? "green" : status === "IN_PROGRESS" ? "orange" : "gray"
                                } /> {TicketStatus[status as keyof typeof TicketStatus]}</span>
                            );
                        })()}
                    </CardDescription>
                </CardHeader>
                <CardContent className={clsx("text-sm sm:text-base", { "line-through": status === "DONE", "truncate": !isDetailsPage })}>{content}</CardContent>
            </Card>
            <div className='flex flex-row sm:flex-col gap-2 sm:gap-y-2 animate-fade-in-from-top justify-end sm:justify-start shrink-0'>
                {!isDetailsPage && <Button variant="ghost" className='self-start' size='icon' title={`View details for ${title}`}>
                    <Link href={ticketDetailPath(id)} className="text-sm text-primary hover:underline shrink-0">
                        <FiExternalLink className="transition-all text-foreground" size={16} />
                    </Link>
                </Button>}
                {isDetailsPage && <>
                    <Button variant="ghost" className='self-start cursor-pointer' size='icon' onClick={handleEdit} title={`Edit ${title}`}>
                        <FaRegEdit className="transition-all text-foreground" size={16} />
                    </Button>
                    <Button variant="ghost" className='self-start cursor-pointer' size='icon' onClick={handleDelete} title={`Delete ${title}`}>
                        <FaTrashCan className="transition-all text-destructive" size={16} />
                    </Button>
                </>
                }
            </div>
        </div>
    )
}
export default TicketItem