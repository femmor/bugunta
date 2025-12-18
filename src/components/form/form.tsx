import { ReactNode } from "react";
import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./uitls/to-action-state";

type FormProps = {
    action: (payload: FormData) => void
    actionState: ActionState
    children: ReactNode;
    className?: string;
}

const Form = ({ action, children, className, actionState }: FormProps) => {
    // Provide user feedback based on action state
    useActionFeedback({
        actionState, options: {
            onSuccess: () => {
                if (actionState.message) {
                    toast.success(actionState.message)
                }
            },
            onError: () => {
                if (actionState.message) {
                    toast.error(actionState.message)
                }
            }
        }
    })


    return (
        <form
            className={className}
            action={action}
        >
            {children}
        </form>
    )
}
export { Form }