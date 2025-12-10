import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TicketSkeleton = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-center gap-2 w-full'>
            <Card className="w-full sm:max-w-[580px] min-w-0">
                <CardHeader className="pb-3">
                    <CardTitle>
                        <Skeleton className="h-5 sm:h-6 w-[200px] sm:w-[250px]" />
                    </CardTitle>
                    <CardDescription>
                        <div className="flex items-center gap-1">
                            <Skeleton className="h-[18px] w-[18px] rounded-full" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </CardContent>
            </Card>
            <div className='flex flex-row sm:flex-col gap-2 sm:gap-y-2 justify-end sm:justify-start shrink-0'>
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
            </div>
        </div>
    )
}

export default TicketSkeleton