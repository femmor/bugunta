import Link from "next/link"
import { homePath, ticketsPath } from "@/paths"

const Navbar = () => {
    return (
        <nav className="supports-backdrop-blur:bg-background/60 fixed top-0 left-0 right-0 z-20 border-b bg-background/95 backdrop-blur flex w-full justify-between px-8 py-4">
            <div>
                <Link href={homePath()} className="font-bold">Home</Link>
            </div>
            <div>
                <Link href={ticketsPath()} className="text-sm underline">Tickets</Link>
            </div>
        </nav>
    )
}
export default Navbar