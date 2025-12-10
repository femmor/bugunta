import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";


const Placeholder = ({ label, description, icon, iconType, showButton, buttonLink, buttonText = "Go Home" }: { label: string, description?: string, icon?: boolean, iconType?: ReactNode, showButton?: boolean, buttonLink?: string, buttonText?: string }) => {
    return (
        <div className="flex-1 self-center text-center mt-20 animate-fade-in-from-top">
            <div className="flex justify-center">{icon && iconType}</div>
            <h2 className="text-2xl text-muted-foreground">{label}</h2>
            {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
            {showButton && <Button asChild size="lg" className="bg-gray-500 my-2">
                <Link href={buttonLink || homePath()}>{buttonText}</Link>
            </Button>}
        </div>
    )
}
export default Placeholder