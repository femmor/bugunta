import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

type CardCompactProps = {
    title: string;
    description?: string;
    content: ReactNode;
    className?: string;
    footer?: ReactNode;
}

const CardCompact = ({ title, description, content, className, footer }: CardCompactProps) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            {footer && <CardFooter></CardFooter>}
        </Card>
    )
}
export default CardCompact