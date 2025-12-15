import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"

type SubmitButtonProps = {
    label: string
}

export const SubmitButton = ({ label }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending}>
            {pending && <Spinner className="mr-2 h-4 w-4" />}
            {label}
        </Button>
    )
}