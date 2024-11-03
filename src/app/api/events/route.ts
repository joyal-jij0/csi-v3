import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam === '3' ? 3 : undefined;

        const events = await prisma.event.findMany({
            orderBy: {
                eventDate: 'asc'
            },
            take: limit  // Fetch 3 most recent if limit is 3, otherwise fetch all
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
