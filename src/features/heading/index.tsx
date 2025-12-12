import { Separator } from "@/components/ui/separator"

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">{title}</h1>
            <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
            <Separator className="my-8" />
        </div>
    )
}
export default Heading