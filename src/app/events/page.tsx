"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ShineBorder from "@/components/magicui/ShineBorder";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Event {
    id: string;
    name: string;
    description: string;
    venue: string;
    isPaid: boolean;
    isOnline: boolean;
    guest: string | null;
    eventTime: string;
    imageUrls: string[];
    isPrivate: boolean;
    banner: string;
    eventDate: Date;
}

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/events', {
                next: { tags: ['events'] },
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to load events');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
        const interval = setInterval(() => {
            if (document.visibilityState === 'visible') {
                fetchEvents();
            }
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-xl text-gray-600">Loading events...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-xl text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div>
            <div className="font-bold relative text-[72px] text-center bg-gradient-to-r from-blue-600 to-indigo-200 bg-clip-text text-transparent">
                Events
            </div>
            <HorizontalScrollCarousel events={events} />
        </div>
    );
}

const HorizontalScrollCarousel: React.FC<{ events: Event[] }> = ({ events }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [transformValue, setTransformValue] = useState("-77%");

    const x = useTransform(scrollYProgress, [0, 1], ["0%", transformValue]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <Card event={event} key={event.id} />
                        ))
                    ) : (
                        <div className="text-xl text-gray-600">No events available</div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const Card: React.FC<{ event: Event }> = ({ event }) => {
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <motion.div
                onClick={() => setIsOpen(true)}
                className={`group relative h-[400px] w-[340px] md:h-[500px] md:w-[450px] overflow-hidden rounded-lg
                    ${Number(event.id) % 2 === 0 ? "rotate-3 -translate-y-4" : "-rotate-3 translate-y-4"} m-8`}
            >
                <ShineBorder
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
                    color={["#fc0303", "#2563eb", "#FFBE7B"]}
                >
                    <div
                        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-lg md:mt-[2px] md:ml-[3px] bg-cover bg-center mt-[3px] ml-[3px] w-[335px] h-[395px] md:w-[443px] md:h-[495px]"
                        style={{ backgroundImage: `url(${event.banner})` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                        <h3 className="text-xl font-semibold">{event.name}</h3>
                    </div>
                </ShineBorder>
            </motion.div>

            <Dialog modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <DialogContent 
                    className="max-w-4xl p-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl text-white"
                    onInteractOutside={() => setIsOpen(false)}
                    onEscapeKeyDown={() => setIsOpen(false)}
                >
                    <div className="relative">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Banner image with gradient overlay */}
                        <div className="relative h-72">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10" />
                            <img 
                                src={event.banner} 
                                alt={event.name} 
                                className="w-full h-full object-cover"
                            />
                            {/* Title positioned over the image */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
                                    {event.name}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className={`
                                        ${event.isPaid ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-green-500 to-green-600'} 
                                        text-white shadow-lg backdrop-blur-sm px-3 py-1
                                    `}>
                                        {event.isPaid ? "Paid" : "Free"}
                                    </Badge>
                                    <Badge className={`
                                        ${event.isOnline ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'}
                                        text-white shadow-lg backdrop-blur-sm px-3 py-1
                                    `}>
                                        {event.isOnline ? "Online" : "In-person"}
                                    </Badge>
                                    {event.isPrivate && (
                                        <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg backdrop-blur-sm px-3 py-1">
                                            Private
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content section */}
                        <div className="p-8">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    {event.description}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                            <Calendar className="w-6 h-6 text-blue-400" />
                                            <div>
                                                <p className="text-sm text-gray-400">Date</p>
                                                <p className="text-white">{formatDate(event.eventDate)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                            <Clock className="w-6 h-6 text-blue-400" />
                                            <div>
                                                <p className="text-sm text-gray-400">Time</p>
                                                <p className="text-white">{event.eventTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                            <MapPin className="w-6 h-6 text-blue-400" />
                                            <div>
                                                <p className="text-sm text-gray-400">Venue</p>
                                                <p className="text-white">{event.venue}</p>
                                            </div>
                                        </div>
                                        {event.guest && (
                                            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                                <Users className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <p className="text-sm text-gray-400">Special Guest</p>
                                                    <p className="text-white">{event.guest}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
