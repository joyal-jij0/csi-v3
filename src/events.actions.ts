'use server'
import prisma from "./lib/prisma";

export default async function getEvents() {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined');
        }

        const events = await prisma.event.findMany({
            orderBy: {
                eventDate: 'asc'
            }
        });

        if (!events) {
            throw new Error('No events found');
        }

        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Failed to fetch events');
    } finally {
        await prisma.$disconnect();
    }
}