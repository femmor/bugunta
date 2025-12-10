import Link from "next/link"
import { PiBugDroidFill } from "react-icons/pi";
import { Button } from "@/components/ui/button"
import { homePath, ticketsPath } from "@/paths"


const Navbar = () => {
    return (
        <nav className="supports-backdrop-blur:bg-background/50 fixed top-0 left-0 right-0 z-20 border-b bg-background/70 backdrop-blur flex w-full items-center justify-between px-8 py-4">
            <div>
                <Link href={homePath()} className="text-lg font-bold">
                    <h1 className="text-lg font-normal flex"><span className="font-black flex items-center tracking-tighter">B<PiBugDroidFill className="text-primary" size={16} />g</span>Hunter</h1>
                </Link>
            </div>
            <div>
                <Button asChild variant="link" className="text-foreground">
                    <Link href={homePath()}>Home</Link>
                </Button>
                <Button asChild variant="link" className="text-foreground">
                    <Link href={ticketsPath()}>Tickets</Link>
                </Button>
            </div>
        </nav>
    )
}
export default Navbar