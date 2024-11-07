import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import { EventsDataType } from "@/components/landingPage/UpdateSection";

interface EventDetailsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    activeEvent: EventsDataType | null;
}

const EventDetailsDialog: FC<EventDetailsDialogProps> = ({
    isOpen,
    onClose,
    activeEvent,
}) => {
    if (!activeEvent) return null;

    function formatDate(dateInput: string | Date): string {
        const date =
            typeof dateInput === "string" ? new Date(dateInput) : dateInput;
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    return (
        <Dialog modal open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="overflow-hidden max-w-4xl p-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl text-white"
                onInteractOutside={onClose}
                onEscapeKeyDown={onClose}
                isClosable={false}
            >
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    <div className="relative h-72">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10" />
                        <img
                            src={activeEvent.banner}
                            alt={activeEvent.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
                                {activeEvent.name}
                            </h2>
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
                        </div>
                    </div>

                    <div className="p-8">
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
                                            {formatDate(activeEvent.eventDate)}
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
            </DialogContent>
        </Dialog>
    );
};

export default EventDetailsDialog;
