import { Ticket } from '@prisma/client';
import { clsx } from 'clsx'
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketDetailPath } from "@/paths"
import { TicketIcons, TicketStatus } from '../constants';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

type TicketItemProps = {
    ticket: Ticket;
    isDetailsPage?: boolean;
}

const TicketItem = ({ ticket, isDetailsPage }: TicketItemProps) => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-center gap-2 w-full'>
            <Card
                key={ticket?.id}
                className={`w-full animate-fade-in-from-top ${isDetailsPage ? 'sm:max-w-145' : 'sm:max-w-115'} min-w-0`}
                style={{
                    animationDelay: '0.1s',
                    animationFillMode: 'both'
                }}
            >
                <CardHeader className="pb-3">
                    <CardTitle>
                        <h3 className="text-base sm:text-lg font-semibold flex-1">{ticket?.title}</h3>
                    </CardTitle>
                    <CardDescription>
                        {(() => {
                            const status = ticket?.status || 'OPEN';
                            const Icon = TicketIcons[status as keyof typeof TicketIcons];
                            return (
                                <span className='text-xs flex items-center gap-1'>
                                    <Icon className="inline-block" size={18} color={
                                        status === "DONE" ? "green" : status === "IN_PROGRESS" ? "orange" : "gray"
                                    } /> {TicketStatus[status as keyof typeof TicketStatus]}
                                </span>
                            );
                        })()}
                    </CardDescription>
                </CardHeader>
                <CardContent className={clsx("text-sm sm:text-base", { "line-through": ticket?.status === "DONE", "truncate": !isDetailsPage })}>{ticket?.content}</CardContent>
            </Card>
            <div className='flex flex-row sm:flex-col gap-2 sm:gap-y-2 animate-fade-in-from-top justify-end sm:justify-start shrink-0'>
                {!isDetailsPage &&
                    <Link prefetch={true} href={ticketDetailPath(ticket?.id)} className="shrink-0">
                        <Button variant="ghost" className='self-start cursor-pointer' size='icon' title={`View details for ${ticket?.title}`}>
                            <FiExternalLink className="transition-all text-foreground" size={16} />
                        </Button>
                    </Link>
                }
                {isDetailsPage && <>
                    <EditButton id={ticket?.id} />
                    <DeleteButton id={ticket?.id} />
                </>
                }
            </div>
        </div>
    )
}
export default TicketItem