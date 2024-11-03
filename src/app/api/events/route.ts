import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const events = await prisma.event.findMany({
            orderBy: {
                eventDate: 'asc'
            }
        });
        
        revalidateTag('events');
        
        return NextResponse.json(events);
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
} 