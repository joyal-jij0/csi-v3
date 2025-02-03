import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    people1,
    people2,
    TechinalDeptData,
    executivesData,
} from "@/data/teamData";

export const metadata = {
    title: "Team - CSI V3 | Maharaja Agrasen Institute of Technology",
    description:
      "Meet the talented team behind the Computer Society of India (CSI) at Maharaja Agrasen Institute of Technology. Learn about our faculty coordinators, executives, and technical team.",
    keywords: [
      "CSI Team",
      "Computer Society of India",
      "MAIT Faculty Coordinators",
      "CSI Executives",
      "Technical Team",
      "Student Leaders",
    ],
    openGraph: {
        title: "Team - CSI V3 | Maharaja Agrasen Institute of Technology",
        description:
          "Meet the talented team behind CSI MAIT, including faculty coordinators, executives, and the technical team.",
        url: "https://www.csiinnowave.com/team", 
        type: "website",
        images: [
          {
            url: "/public/csi-innowave.jpg", 
            width: 1200,
            height: 630,
            alt: "CSI MAIT Team Open Graph Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Team - CSI V3 | Maharaja Agrasen Institute of Technology",
        description:
          "Meet the talented team behind CSI MAIT, including faculty coordinators, executives, and the technical team.",
        images: ["/public/csi-innowave.jpg"], 
      },
};

export default function TeamPage() {
    return (
        <div className="flex flex-col space-y-12 overflow-x-hidden">
            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 mx-4 text-pretty font-bold text-2xl lg:text-4xl bg-gradient-to-b from-violet-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    FACULTY COORDINATORS
                </h2>
            </div>
            <div className="flex flex-col w-screen items-center my-8">
                <Avatar className="mb-4 size-36 md:mb-5 lg:size-60 rounded-3xl border-2 border-purple-500">
                    <AvatarImage
                        src={
                            "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131195/csi/team/k7in6h3xqjfzqr9dwcma.jpg"
                        }
                        className="object-cover object-top hover:scale-[1.1] transition-all duration-600"
                    />
                    <AvatarFallback>NK</AvatarFallback>
                </Avatar>
                <div className="text-xs sm:text-xl text-center p-1">
                    <p className="text-center font-medium">
                        Dr. Nand Kishore Garg
                    </p>
                    <p className="text-center text-sm font-light text-muted-foreground text-gray-300">
                        Chief Patron
                    </p>
                </div>
            </div>
            <div className="mt-12 mx-4 md:mx-12 grid gap-x-2 gap-y-6 md:gap-y-16 grid-cols-3 lg:grid-cols-6">
                {people1.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                        <Avatar className="mb-4 size-20 md:mb-5 md:size-28 lg:size-36 border border-purple-500">
                            <AvatarImage
                                src={person.image_source}
                                className="object-cover object-top"
                            />
                            <AvatarFallback>{person.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center text-sm font-medium">
                            {person.name}
                        </p>
                        <p className="text-center text-xs font-light text-muted-foreground text-gray-300">
                            {person.position}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl bg-gradient-to-b from-violet-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    OUR TEAM
                </h2>
            </div>
            <div className="mt-12 mx-8 md:mx-12 flex gap-x-12 md:gap-x-20 lg:gap-x-28 gap-y-6 md:gap-y-16 items-center justify-center flex-wrap">
                {people2.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                        <Avatar className="mb-4 size-32 md:mb-5 lg:size-36 rounded-3xl border border-purple-500">
                            <AvatarImage
                                src={person.image_source}
                                className="object-cover object-top"
                            />
                            <AvatarFallback>{person.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center text-sm font-medium">
                            {person.name}
                        </p>
                        <p className="text-center text-xs font-light text-muted-foreground text-gray-300">
                            {person.position}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Technical Executives
                </h2>
            </div>

            <div className="mt-12 mx-6 md:mx-40 justify-between grid gap-x-4 gap-y-6 md:gap-y-16 grid-cols-2 lg:grid-cols-4">
                {TechinalDeptData.map((executive) => (
                    <div
                        key={executive.name}
                        className="flex flex-col items-center"
                    >
                        <div className="text-center">
                            <p className="font-mono font-bold text-2xl mb-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600  text-transparent bg-clip-text">
                                {executive.name}
                            </p>
                            <p className="font-semibold text-md text-muted-foreground">
                                {executive.lead}
                            </p>
                            <div className="font-light text-md text-muted-foreground">
                                {executive.people &&
                                    executive.people.map((eachExecutive) => (
                                        <p key={eachExecutive}>
                                            {eachExecutive}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Executives
                </h2>
            </div>

            <div className="mt-12 mx-6 md:mx-40 grid gap-x-4 gap-y-16 grid-cols-2 lg:grid-cols-4">
                {executivesData.map((executive) => (
                    <div
                        key={executive.name}
                        className="flex flex-col items-center"
                    >
                        <div className="text-center">
                            <p className="font-mono font-bold text-2xl mb-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600  text-transparent bg-clip-text">
                                {executive.name.replace("Executives", "")}
                            </p>
                            <div className="text-muted-foreground">
                                {executive.people.map((people) => (
                                    <p key={people}>{people}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
