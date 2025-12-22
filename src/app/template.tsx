import { ReactNode } from "react";
import { RedirectToast } from "@/components/redirect-toast";

export default function RootTemplate({ children }: { children: ReactNode }) {
    return <>
        <>{children}</>
        <RedirectToast />
    </>
}