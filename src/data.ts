export const initialTickets = [
    { id: "1", title: "Bug in login page", content: "Users are unable to log in using Google OAuth.", status: "OPEN" as const },
    { id: "2", title: "UI glitch on dashboard", content: "The dashboard widgets overlap on smaller screens.", status: "IN_PROGRESS" as const },
    { id: "3", title: "Performance issue", content: "The application takes too long to load data from the server.", status: "OPEN" as const },
    { id: "4", title: "Error in payment processing", content: "Payments are failing for certain credit cards.", status: "DONE" as const },
    { id: "5", title: "Notification bug", content: "Users are not receiving email notifications for updates, this affects user engagement.", status: "IN_PROGRESS" as const },
];