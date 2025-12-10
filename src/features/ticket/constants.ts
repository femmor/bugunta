import { ElementType } from "react";
import { FaCheckCircle, FaHourglassStart, FaRegFolderOpen } from "react-icons/fa";

export enum TicketStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

export const TicketIcons: Record<string, ElementType> = {
    OPEN: FaRegFolderOpen,
    IN_PROGRESS: FaHourglassStart,
    DONE: FaCheckCircle,
};