import { PiBugDroidDuotone } from "react-icons/pi";
import { Placeholder } from "@/features";

export default function NotFound() {
    return <Placeholder label="Ticket not found" icon showButton iconType={<PiBugDroidDuotone className="mx-auto mb-2 text-primary/40" size={60} />} />;
}