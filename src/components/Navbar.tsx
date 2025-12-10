import Link from "next/link"
import { homePath, ticketsPath } from "@/paths"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="supports-backdrop-blur:bg-background/60 fixed top-0 left-0 right-0 z-20 border-b bg-background/95 backdrop-blur flex w-full items-center justify-between px-8 py-4">
            <div>
                <h1 className="text-lg font-normal"><span className="text-primary font-black">Bug</span>Hunter</h1>
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