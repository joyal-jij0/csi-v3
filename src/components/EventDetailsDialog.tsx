import React from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { EventsDataType } from "@/types/EventData";

interface EventDetailsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    activeEvent: EventsDataType | null;
}

function formatDate(dateInput: string | Date): string {
    const date =
        typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export default function EventDetailsDialog({
    isOpen,
    onClose,
    activeEvent,
}: EventDetailsDialogProps) {
    if (!activeEvent) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="md:max-w-4xl overflow-y-auto bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-gray-700/50 shadow-2xl text-white rounded-2xl max-h-[90vh] p-6"
                onInteractOutside={onClose}
                onEscapeKeyDown={onClose}
            >
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {activeEvent.name}
                    </DialogTitle>
                    <DialogDescription asChild>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="w-full">
                                <ImageCarousel images={activeEvent.imageUrls} />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-neutral-300">
                                        {activeEvent.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        className={`${
                                            activeEvent.isPaid
                                                ? "bg-gradient-to-r from-red-500 to-red-600"
                                                : "bg-gradient-to-r from-green-500 to-green-600"
                                        } text-white shadow-lg backdrop-blur-sm px-3 py-1`}
                                    >
                                        {activeEvent.isPaid ? "Paid" : "Free"}
                                    </Badge>
                                    <Badge
                                        className={`${
                                            activeEvent.isOnline
                                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                                : "bg-gradient-to-r from-purple-500 to-purple-600"
                                        } text-white shadow-lg backdrop-blur-sm px-3 py-1`}
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

                                <div className="space-y-2 text-sm">
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
                                </div>

                                {activeEvent.guest && (
                                    <div className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                        <div className="flex items-center gap-2 text-emerald-400">
                                            <Users className="w-4 h-4" />
                                            <span className="font-semibold ">
                                                Special Guest
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-300 text-left">
                                            {activeEvent.guest}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
