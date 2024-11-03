"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import eventData from "../../data/eventData";
import { Dialog, DialogContent } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";

interface EventData {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    date: string;
    posterLink: string;
    formLink: string;
    eventPhotos?: string[];
}

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

function formatDate(isoString: Date): string {
    const date: Date = new Date(isoString);
    const day: string = String(date.getDate()).padStart(2, "0");
    const month: string = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year: number = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export function UpdateSection() {
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isOpen, setIsOpen] = useState(false);

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
            setError("Failed to load events");
        } finally {
            setLoading(false);
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

    // useEffect(() => {
    //     function onKeyDown(event: KeyboardEvent) {
    //         if (event.key === "Escape") {
    //             setActiveEvent(null);
    //         }
    //     }

    //     if (activeEvent) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }

    //     window.addEventListener("keydown", onKeyDown);
    //     return () => window.removeEventListener("keydown", onKeyDown);
    // }, [activeEvent]);

    useOutsideClick(ref, () => setActiveEvent(null));

    const visibleEvents = eventData.slice(0, 3);

    return (
        <div className="bg-black text-white py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
                UPDATES & EVENTS
            </h2>

            <Dialog
                modal
                open={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
            >
                <DialogContent
                    className="max-w-4xl p-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl text-white"
                    onInteractOutside={() => setIsOpen(false)}
                    onEscapeKeyDown={() => setIsOpen(false)}
                >
                    {activeEvent && (
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
                                    src={activeEvent.banner}
                                    alt={activeEvent.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Title positioned over the image */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
                                        {activeEvent.name}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            className={`
                                        ${
                                            activeEvent.isPaid
                                                ? "bg-gradient-to-r from-red-500 to-red-600"
                                                : "bg-gradient-to-r from-green-500 to-green-600"
                                        } 
                                        text-white shadow-lg backdrop-blur-sm px-3 py-1
                                    `}
                                        >
                                            {activeEvent.isPaid
                                                ? "Paid"
                                                : "Free"}
                                        </Badge>
                                        <Badge
                                            className={`
                                        ${
                                            activeEvent.isOnline
                                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                                : "bg-gradient-to-r from-purple-500 to-purple-600"
                                        }
                                        text-white shadow-lg backdrop-blur-sm px-3 py-1
                                    `}
                                        >
                                            {activeEvent.isOnline
                                                ? "Online"
                                                : "In-person"}
                                        </Badge>
                                        {activeEvent.isPrivate && (
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
                                        {activeEvent.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                                <Calendar className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <p className="text-sm text-gray-400">
                                                        Date
                                                    </p>
                                                    <p className="text-white">
                                                        {formatDate(
                                                            activeEvent.eventDate
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                                <Clock className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <p className="text-sm text-gray-400">
                                                        Time
                                                    </p>
                                                    <p className="text-white">
                                                        {activeEvent.eventTime}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                                <MapPin className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <p className="text-sm text-gray-400">
                                                        Venue
                                                    </p>
                                                    <p className="text-white">
                                                        {activeEvent.venue}
                                                    </p>
                                                </div>
                                            </div>
                                            {activeEvent.guest && (
                                                <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg transition-all hover:bg-gray-700/50">
                                                    <Users className="w-6 h-6 text-blue-400" />
                                                    <div>
                                                        <p className="text-sm text-gray-400">
                                                            Special Guest
                                                        </p>
                                                        <p className="text-white">
                                                            {activeEvent.guest}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {events.length > 0 ? (
                <ul className="max-w-6xl mx-auto w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
                    {events.map((event) => (
                        // <p>{event.name}</p>
                        <motion.div
                            layoutId={`event-${event.name}-${id}`}
                            key={event.id}
                            // onClick={() => setActiveEvent(event)}
                            onClick={() => {
                                setActiveEvent(event);
                                setIsOpen(true);
                            }}
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

export const CloseIcon: React.FC = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
