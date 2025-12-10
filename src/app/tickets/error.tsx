"use client"

import { VscDebugDisconnect } from "react-icons/vsc";
import Placeholder from "@/features/placeholder";
import { homePath } from "@/paths";

export default function Error({ error }: { error: Error }) {
    return (
        <Placeholder
            icon
            iconType={<VscDebugDisconnect size={60} className="mb-4 text-destructive" />}
            label="Something went wrong!"
            description={error.message || "An unexpected error occurred. Please try refreshing the page or come back later."}
            showButton
            buttonText="Go Back Home"
            buttonLink={homePath()}
        />
    )
}