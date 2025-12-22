"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
    const pathname = usePathname();

    // This function returns a promise that resolves to the toast message from the cookie
    const showCookieToast = async () => {
        const toastMessage = await getCookieByKey("toast");

        if (toastMessage) {
            // Display the toast message to the user
            toast.success(toastMessage);
            await deleteCookieByKey("toast");
        }
    }

    useEffect(() => {
        showCookieToast();
    }, [pathname]);

    return null;
}

export { RedirectToast };