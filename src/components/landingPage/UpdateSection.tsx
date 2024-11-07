"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import EventDetailsDialog from "../EventDetailsDialog";
import {
    CalendarIcon,
    ClockIcon,
    DollarSignIcon,
    GlobeIcon,
    LockIcon,
    MapPinIcon,
    UsersIcon,
} from "lucide-react";

export interface EventsDataType {
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
                    {/* {events.map((event) => (
                        // <p>{event.name}</p>
                        <motion.div
                            layoutId={`event-${event.name}-${id}`}
                            key={event.id}
                            // onClick={() => setActiveEvent(event)}
                            onClick={() => handleOpenDialog(event)}
                            className="p-4 flex flex-col hover:bg-neutral-900 rounded-xl cursor-pointer w-full lg:w-1/3 border border-white mx-2 sm:mx-4 md:mx-6 lg:mx-6 mb-4 lg:mb-0 h-[500px]" // Ensure all cards have the same height
                        >
                            <motion.div
                                layoutId={`image-${event.name}-${id}`}
                                className="relative flex-shrink-0"
                            >
                                <Image
                                    width={300}
                                    height={200}
                                    src={event.banner}
                                    alt={event.name}
                                    className="h-[400px] lg:h-auto w-full rounded-lg object-contain"
                                />
                            </motion.div>

                            <div className="flex flex-col flex-grow justify-between mt-2">
                                <motion.h3
                                    layoutId={`title-${event.name}-${id}`}
                                    className="font-medium text-white text-center text-lg"
                                >
                                    {event.name}
                                </motion.h3>
                                <p className="text-gray-300 text-center text-s mt-1">
                                    {formatDate(event.eventDate)}
                                </p>
                            </div>
                        </motion.div>
                    ))} */}

                    {events.map((event, index) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            index={index}
                            onClick={() => handleOpenDialog(event)}
                        />
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
    onClick,
}: {
    event: EventsDataType;
    index: number;
    onClick: (event: EventsDataType) => void;
}) {
    return (
        <div
            className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform cursor-pointer"
            onClick={() => onClick(event)}
        >
            <div className="relative h-48">
                <Image
                    src={event.banner}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                />
                {/* <div className="absolute top-2 right-2 flex space-x-2">
                    {event.isPaid && (
                        <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            <DollarSignIcon className="w-3 h-3 inline-block mr-1" />
                            Paid
                        </span>
                    )}
                    {event.isPrivate && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 txt-ce rounded-full">
                            <MapPinIcon className="w-3.5 h-3.5 inline-block mr-1" />
                            MAIT
                        </span>
                    )}
                </div> */}
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
                    {/* {event.guest && (
                        <div className="flex items-center text-gray-500">
                            <UsersIcon className="w-4 h-4 mr-2" />
                            <span>Guest: {event.guest}</span>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}
