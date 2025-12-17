import { ZodError } from "zod";

export type ActionState = {
    status?: "SUCCESS" | "ERROR";
    message: string;
    payload?: FormData;
    fieldErrors?: Record<string, string[]> | undefined;
    timeStamp: number;
}

export const EMPTY_ACTION_STATE: ActionState = {
    message: "",
    fieldErrors: undefined,
    timeStamp: Date.now()
}

// Unhappy path: from error to ActionState
export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    if (error instanceof ZodError) {
        // Return the first validation error message from Zod
        return {
            status: "ERROR",
            message: "",
            fieldErrors: error.flatten().fieldErrors,
            payload: formData,
            timeStamp: Date.now()
        }
    }
    // Handle other error types if necessary 
    // e.g Database errors, network errors, etc.
    else if (error instanceof Error) {
        return {
            status: "ERROR",
            message: error.message,
            fieldErrors: {},
            payload: formData,
            timeStamp: Date.now()
        }
    }
    // Fallback for other generic error types
    else {
        return {
            status: "ERROR",
            message: "An unexpected error occurred. Please try again.",
            fieldErrors: {},
            payload: formData,
            timeStamp: Date.now()
        };
    }
}

// Happy path: to ActionState
export const toActionState = (message: string, status?: ActionState["status"]): ActionState => {
    return {
        message,
        status,
        fieldErrors: undefined,
        timeStamp: Date.now()
    }
}