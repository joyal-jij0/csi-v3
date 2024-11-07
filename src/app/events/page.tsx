"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ShineBorder from "@/components/magicui/ShineBorder";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { EventsDataType } from "@/components/landingPage/UpdateSection";
import EventDetailsDialog from "@/components/EventDetailsDialog";

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
    const [events, setEvents] = useState<EventsDataType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

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
            <HorizontalScrollCarousel events={events} />
        </div>
    );
}

const HorizontalScrollCarousel: React.FC<{ events: Event[] }> = ({
    events,
}) => {
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
                        <div className="text-xl text-gray-600">
                            No events available
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const Card: React.FC<{ event: Event }> = ({ event }) => {
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

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <>
            <motion.div
                onClick={() => handleOpenDialog(event)}
                className={`group relative h-[400px] w-[340px] md:h-[500px] md:w-[450px] overflow-hidden rounded-lg
                    ${
                        Number(event.id) % 2 === 0
                            ? "rotate-3 -translate-y-4"
                            : "-rotate-3 translate-y-4"
                    } m-8`}
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

            <EventDetailsDialog
                isOpen={isOpen}
                onClose={handleCloseDialog}
                activeEvent={activeEvent}
            />
        </>
    );
};
