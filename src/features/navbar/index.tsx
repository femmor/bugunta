"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { PiBugDroidFill } from "react-icons/pi";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { homePath, ticketsPath } from "@/paths"

const Navbar = () => {
    const { setTheme } = useTheme()

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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
export default Navbar