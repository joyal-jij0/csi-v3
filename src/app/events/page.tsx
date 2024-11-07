"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ShineBorder from "@/components/magicui/ShineBorder";
import {
    EventCard,
    EventsDataType,
} from "@/components/landingPage/UpdateSection";
import EventDetailsDialog from "@/components/EventDetailsDialog";

export default function EventsPage() {
    const [events, setEvents] = useState<EventsDataType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEvents = async () => {
        try {
            const response = await fetch("/api/events", {
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
            <div className="mt-8 mx-2 md:mx-0 flex items-center justify-center">
                {events.length > 0 ? (
                    <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {events.map((event) => (
                            <Card event={event} key={event.id} />
                        ))}
                    </div>
                ) : (
                    <div className="text-xl text-gray-600">
                        No events available
                    </div>
                )}
            </div>
        </div>
    );
}

const Card: React.FC<{ event: EventsDataType }> = ({ event }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeEvent, setActiveEvent] = useState<EventsDataType | null>(null);

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
            <EventCard
                key={event.id}
                event={event}
                index={1}
                onClick={() => handleOpenDialog(event)}
            />

            <EventDetailsDialog
                isOpen={isOpen}
                onClose={handleCloseDialog}
                activeEvent={activeEvent}
            />
        </>
    );
};
