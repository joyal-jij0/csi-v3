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
                eventDate: 'desc'
            },
            take: limit  // Fetch 3 most recent if limit is 3, otherwise fetch all
        });
        
        revalidateTag('events');
        
        return NextResponse.json(events, {
            headers: {
                'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59'
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
