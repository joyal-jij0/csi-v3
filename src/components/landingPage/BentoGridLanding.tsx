
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

export default function BentoGridLanding() {
    // const Skeleton = () => (
    //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    //     </div>
    // );
    const items = [
        {
            title: "DIGITAL REVOLUTION",
            description:
                "VR gaming stall showcased our tech enthusiasm in Innovation Mela.",
            header: (
                <video
                    src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722877017/CSI/Untitled_design3_cvfszb.mp4"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ),
        },
        {
            title: "THE SPIRIT OF ADVENTURE",
            description: "Our Society proudly embraces the digial revolution by hosting a VR gaming station at Techsurge & Mridang",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722872876/CSI/WhatsApp_Image_2024-08-05_at_14.28.28_95e8cc38_oeaoze.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "THE PURSUIT OF VR INFUSION",
            description:
                "Join the quest for experiencing the thrill of bringing ideas to life.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722872876/CSI/WhatsApp_Image_2024-08-05_at_14.27.21_8391df60_ukn57q.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "THE JOY OF CREATION",
            description:
                "Our entire team came together to uplift the event and create joyous memories!",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722837673/CSI/Screenshot_2024-08-05_113134_vueyzc.png" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "THE POWER OF COMMUNICATION",
            description:
                "Communication and planning are crucial for any successful event.",
            header: (
                <video
                    src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722875836/CSI/Untitled_design2_y9ylh7.mp4"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ),
        },
        {
            title: "The Art of Design",
            description:
                "Our team hand-printed this to leave a lasting mark on MindForge!",
            header: (
                <video
                    src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722875071/CSI/Recording_2024-08-05_215455_anz67d.mp4"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ),
        },
        {
            title: "THE IMPORTANCE OF TEAM COLLABORATION",
            description:
                "The people who became family, always there through our highs and lows.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722877884/CSI/Screenshot_2024-08-05_224149_cdr5aj.png" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-[550px] h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
    ];

    return (
        <>
            <div className="text-4xl font-bold text-center mb-7">HIGHLIGHTS</div>
            <BentoGrid className="max-w-4xl mx-5 md:mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </>
    );
}
