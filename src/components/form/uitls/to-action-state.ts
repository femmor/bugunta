import { ZodError } from "zod";

export type ActionState = {
    message: string;
    payload?: FormData;
}

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    if (error instanceof ZodError) {
        // Return the first validation error message from Zod
        return {
            message: error.issues[0]?.message,
            payload: formData
        }
    }
    // Handle other error types if necessary 
    // e.g Database errors, network errors, etc.
    else if (error instanceof Error) {
        return {
            message: error.message,
            payload: formData
        }

    }
    // Fallback for other generic error types
    else {
        return {
            message: "An unexpected error occurred. Please try again.",
            payload: formData
        };
    }
}