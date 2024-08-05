
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

export default function BentoGridLanding() {
    // const Skeleton = () => (
    //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    //     </div>
    // );
    const items = [
        {
            title: "The Dawn of Innovation",
            description:
                "Explore the birth of groundbreaking ideas and inventions.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "The Art of Design",
            description:
                "Discover the beauty of thoughtful and functional design.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "The Power of Communication",
            description:
                "Understand the impact of effective communication in our lives.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "The Pursuit of Knowledge",
            description: "Join the quest for understanding and enlightenment.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                />
            ),
        },
        {
            title: "The Joy of Creation",
            description: "Experience the thrill of bringing ideas to life.",
            header: (
                <video
                    src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722840256/CSI/5955965-uhd_3840_2160_30fps_tynrwo.mp4"
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ),
        },
        {
            title: "The Spirit of Adventure",
            description:
                "Embark on exciting journeys and thrilling discoveries.",
            header: (
                <Image
                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722841985/CSI/pexels-pixabay-158063_nzlxr5.jpg" // Path to your image file
                    alt="The Dawn of Innovation"
                    width={400}
                    height={600}
                    // layout="fill" // Adjust layout as needed
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
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
