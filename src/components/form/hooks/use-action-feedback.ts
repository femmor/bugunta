import { useEffect } from "react"
import { ActionState } from "../uitls/to-action-state"

type UseActionFeedbackParams = {
    actionState: ActionState,
    options: {
        onSuccess?: () => void,
        onError?: () => void
    }
}

const useActionFeedback = ({ actionState, options }: UseActionFeedbackParams) => {
    useEffect(() => {
        if (actionState.status === "SUCCESS") {
            options.onSuccess?.()
        }
        if (actionState.status === "ERROR") {
            options.onError?.()
        }
    }, [actionState, options])
}

export { useActionFeedback }