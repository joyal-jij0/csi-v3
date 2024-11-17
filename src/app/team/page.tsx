import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    people1,
    people2,
    TechinalDeptData,
    executivesData,
} from "@/data/teamData";

export default function TeamPage() {
    return (
        <div className="flex flex-col space-y-12">
            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 mx-4 text-pretty font-bold text-2xl lg:text-4xl">
                    FACULTY COORDINATORS
                </h2>
            </div>
            <div className="flex flex-col w-screen items-center my-8">
                <Avatar className="mb-4 size-36 md:mb-5 lg:size-60 rounded-3xl">
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
                    <p className="text-center text-sm font-light text-muted-foreground">
                        Chief Patron
                    </p>
                </div>
            </div>
            <div className="mt-12 mx-4 md:mx-12 grid gap-x-2 gap-y-6 md:gap-y-16 grid-cols-3 lg:grid-cols-6">
                {people1.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                        <Avatar className="mb-4 size-20 md:mb-5 lg:size-36">
                            <AvatarImage
                                src={person.image_source}
                                className="object-cover object-top"
                            />
                            <AvatarFallback>{person.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center text-sm font-medium">
                            {person.name}
                        </p>
                        <p className="text-center text-xs font-light text-muted-foreground">
                            {person.position}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl">
                    OUR TEAM
                </h2>
            </div>
            <div className="mt-12 mx-8 md:mx-12 grid gap-x-4 gap-y-6 md:gap-y-16 grid-cols-2 lg:grid-cols-5">
                {people2.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                        <Avatar className="mb-4 size-32 md:mb-5 lg:size-36 rounded-3xl">
                            <AvatarImage
                                src={person.image_source}
                                className="object-cover object-top"
                            />
                            <AvatarFallback>{person.name}</AvatarFallback>
                        </Avatar>
                        <p className="text-center text-sm font-medium">
                            {person.name}
                        </p>
                        <p className="text-center text-xs font-light text-muted-foreground">
                            {person.position}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl">
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
                            <p className="font-mono font-bold text-2xl mb-2">
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
                <h2 className="mt-6 text-pretty font-bold text-3xl lg:text-4xl">
                    Executives
                </h2>
            </div>

            <div className="mt-12 mx-6 md:mx-40 grid gap-x-4 gap-y-16 grid-cols-2 lg:grid-cols-5">
                {executivesData.map((executive) => (
                    <div
                        key={executive.name}
                        className="flex flex-col items-center"
                    >
                        <div className="text-center">
                            <p className="font-mono font-bold text-2xl mb-2">
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
