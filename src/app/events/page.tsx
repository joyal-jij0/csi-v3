import { EventCard } from "@/components/landingPage/UpdateSection";
import { EventsDataType } from "@/types/EventData";

export const metadata = {
    title: "Events - CSI V3 | Maharaja Agrasen Institute of Technology",
    description:
      "Explore the latest events organized by the Computer Society of India (CSI) at Maharaja Agrasen Institute of Technology. Stay updated with workshops, seminars, and tech competitions.",
    keywords: [
      "CSI Events",
      "Computer Society of India",
      "MAIT Events",
      "Tech Workshops",
      "Seminars",
      "Tech Competitions",
      "Student Events",
    ],
    openGraph: {
        title: "Events - CSI V3 | Maharaja Agrasen Institute of Technology",
        description:
          "Explore the latest events organized by the Computer Society of India (CSI) at MAIT. Stay updated with workshops, seminars, and tech competitions.",
        url: "https://www.csiinnowave.com/events", 
        type: "website",
        images: [
          {
            url: "https://yourwebsite.com/og-image.jpg", // Replace with actual image URL
            width: 1200,
            height: 630,
            alt: "CSI MAIT Events Open Graph Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Events - CSI V3 | Maharaja Agrasen Institute of Technology",
        description:
          "Explore the latest events organized by the Computer Society of India (CSI) at MAIT. Stay updated with workshops, seminars, and tech competitions.",
        images: ["/public/csi-innowave.jpg"], // Replace with actual image URL
      },
};

async function getEvents() {
    const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://csiinnowave.com' 
        : 'http://localhost:3000';
    
    let res = await fetch(`${baseUrl}/api/events`, {
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
