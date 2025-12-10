import { ThemeProvider as BaseThemeProvider } from "next-themes"
import { ComponentProps } from "react"

export function ThemeProvider({
    children
}: ComponentProps<typeof BaseThemeProvider>) {
    console.log("Where am I logged?, (ThemeProvider)")

    return <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
    </BaseThemeProvider>
}