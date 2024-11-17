import { EventCard } from "@/components/landingPage/UpdateSection";
import { EventsDataType } from "@/types/EventData";

async function getEvents() {
    let res = await fetch(`https://csiinnowave.com/api/events`, {
        cache: "force-cache",
        next: { tags: ['events'], revalidate: 60 },
    });
    let post: EventsDataType[] = await res.json();
    return post;
}

export default async function EventsPage() {
    let events = await getEvents();

    if (!events) return <div>Loading...</div>;

    return (
        <div>
            <div className="font-bold relative text-[72px] text-center bg-gradient-to-r from-blue-600 to-indigo-200 bg-clip-text text-transparent">
                Events
            </div>
            <div className="mt-8 mx-4 flex  items-center justify-center">
                {events.length > 0 ? (
                    <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} index={1} />
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
