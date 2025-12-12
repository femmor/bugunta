import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Status } from "@prisma/client";
import { Pool } from "pg";

// Create PostgreSQL connection pool
const connectionString = process.env.DATABASE_URL || "postgresql://admin:password@localhost:5432/bugunta_db";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Configure the PrismaClient with the adapter
const prisma = new PrismaClient({ adapter });

const tickets = [
    { title: "Bug in login page", content: "Users are unable to log in using Google OAuth. Seeded data for testing.", status: Status.OPEN },
    { title: "UI glitch on dashboard", content: "The dashboard widgets overlap on smaller screens. Seeded data for testing.", status: Status.IN_PROGRESS },
    { title: "Performance issue", content: "The application takes too long to load data from the server. Seeded data for testing.", status: Status.OPEN },
    { title: "Error in payment processing", content: "Payments are failing for certain credit cards. Seeded data for testing.", status: Status.DONE },
    { title: "Notification bug", content: "Users are not receiving email notifications for updates, this affects user engagement. Seeded data for testing.", status: Status.IN_PROGRESS },
];

async function seed() {
    // Clear existing data
    await prisma.ticket.deleteMany();

    // Insert initial tickets
    for (const ticket of tickets) {
        await prisma.ticket.create({
            data: ticket,
        });
    }
}

seed()
    .then(() => {
        console.log("Seeding completed");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
