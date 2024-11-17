"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { EventsDataType } from "@/types/EventData";
import { useOutsideClick } from "@/hooks/use-outside-click";
import EventDetailsDialog from "../EventDetailsDialog";
import { CalendarIcon, ClockIcon, GlobeIcon, MapPinIcon } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";

function formatDate(isoString: Date): string {
    const date: Date = new Date(isoString);
    const day: string = String(date.getDate()).padStart(2, "0");
    const month: string = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year: number = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export function UpdateSection() {
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);
    const [events, setEvents] = useState<EventsDataType[]>([]);
    const [activeEvent, setActiveEvent] = useState<EventsDataType | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = (event: EventsDataType) => {
        setActiveEvent(event);
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setActiveEvent(null);
        setIsOpen(false);
    };

    const fetchEvents = async () => {
        try {
            noStore();
            const response = await fetch("/api/events?limit=3", {
                next: { tags: ["events"] },
                headers: {
                    "Cache-Control": "no-cache",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
        const interval = setInterval(() => {
            if (document.visibilityState === "visible") {
                fetchEvents();
            }
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useOutsideClick(ref, () => setActiveEvent(null));

    return (
        <div className="bg-black text-white py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
                UPDATES & EVENTS
            </h2>

            <EventDetailsDialog
                isOpen={isOpen}
                onClose={handleCloseDialog}
                activeEvent={activeEvent}
            />

            {events.length > 0 ? (
                <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </ul>
            ) : (
                <div className="flex items-center justify-center z-100">
                    <div className="text-xl text-gray-600">
                        Loading events...
                    </div>
                </div>
            )}
        </div>
    );
}

export function EventCard({
    event,
    index,
}: {
    event: EventsDataType;
    index: number;
}) {
    const [activeEvent, setActiveEvent] = useState<EventsDataType | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = (event: EventsDataType) => {
        setActiveEvent(event);
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setActiveEvent(null);
        setIsOpen(false);
    };

    return (
        <>
            <EventDetailsDialog
                isOpen={isOpen}
                onClose={handleCloseDialog}
                activeEvent={activeEvent}
            />

            <div
                className="bg-neutral-900 rounded-lg group hover:scale-[1.025] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform cursor-pointer"
                onClick={() => handleOpenDialog(event)}
            >
                <div className="relative h-48">
                    <Image
                        src={event.banner}
                        alt={event.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform group-hover:scale-[1.025] duration-300 w-full h-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 line-clamp-1">
                        {event.name}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                        {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-500">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            <span>{formatDate(event.eventDate)}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <ClockIcon className="w-4 h-4 mr-2" />
                            <span>{event.eventTime}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            {event.isOnline ? (
                                <>
                                    <GlobeIcon className="w-4 h-4 mr-2" />
                                    <span>Online Event</span>
                                </>
                            ) : (
                                <>
                                    <MapPinIcon className="w-4 h-4 mr-2" />
                                    <span>{event.venue}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
