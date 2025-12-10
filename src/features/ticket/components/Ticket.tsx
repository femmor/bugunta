import { clsx } from 'clsx'
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketDetailPath } from "@/paths"
import { TicketIcons, TicketStatus } from '../constants';
import { TicketProps } from '../types';

const Ticket = ({ id, title, status, content }: TicketProps) => {
    return (
        <Card
            key={id}
            className="w-full animate-fade-in-from-top mb-2 sm:max-w-md md:max-w-lg lg:max-w-xl"
            style={{
                animationDelay: `${parseInt(id) * 100}ms`,
                animationFillMode: 'both'
            }}
        >
            <CardHeader className="pb-3">
                <CardTitle>
                    <div className='flex items-center justify-between gap-2'>
                        <h3 className="text-base sm:text-lg font-semibold truncate flex-1">{title}</h3>
                        <Link href={ticketDetailPath(id)} className="text-sm text-primary hover:underline shrink-0">
                            <FiExternalLink className="inline-block transition-all text-foreground hover:scale-[1.2] hover:text-primary" size={16} title={`View details for ${title}`} />
                        </Link>
                    </div>
                </CardTitle>
                <CardDescription>
                    {(() => {
                        const Icon = TicketIcons[status as keyof typeof TicketIcons];
                        return (
                            <span className='text-xs flex items-center gap-1'><Icon className="inline-block" size={18} color={
                                status === "DONE" ? "green" : status === "IN_PROGRESS" ? "orange" : "black"
                            } /> {TicketStatus[status as keyof typeof TicketStatus]}</span>
                        );
                    })()}
                </CardDescription>
            </CardHeader>
            <CardContent className={clsx("text-sm sm:text-base", { "line-through": status === "DONE" })}>{content}</CardContent>
        </Card>
    )
}
export default Ticket