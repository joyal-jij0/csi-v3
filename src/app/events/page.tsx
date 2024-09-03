"use client";
import { useRouter } from "next/navigation";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import eventData from "@/data/eventData";
import ShineBorder from "@/components/magicui/ShineBorder";
import prisma from "@/lib/prisma";
import getEvents from "@/events.actions";
// Define the type for the card object
interface CardProps {
    id: number;
    title: string;
    posterLink: string;
    date: string;
    formLink: string;
    description: string;
}

// Define the type for the Card component props
interface CardComponentProps {
    card: CardProps;
}

const Example: React.FC = () => {
    return (
        <div>
            <div className="font-bold relative text-[72px] text-center bg-gradient-to-r from-blue-600 to-indigo-200 bg-clip-text text-transparent">
                Events
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel: React.FC = () => {
    const [events,setevents]=useState()
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-77%"]);
    // const x = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["0%", window.innerWidth < [768px] ? "-92%" : "-77%"]
    // );

     const [transformValue, setTransformValue] = useState("-77%");

     useEffect(() => {
        async function getevent(){
            const events = await getEvents()
            setevents(events)
        }
        getevent()
         const handleResize = () => {
             setTransformValue(window.innerWidth < 768 ? "-92%" : "-77%");
         };

         handleResize(); // Set the initial value
         window.addEventListener("resize", handleResize);

         return () => {
             window.removeEventListener("resize", handleResize);
         };
     }, []);

     const x = useTransform(scrollYProgress, [0, 1], ["0%", transformValue]);


    return (
        <>
            <section ref={targetRef} className="relative h-[300vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                    <motion.div style={{ x }} className="flex gap-4 ">
                        {
                        events && events.map((card) => (
                            <Card card={card} key={card.id} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

const Card: React.FC<CardComponentProps> = ({ card }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/eventPhotos/${card.id}`);
    };

    return (
        <motion.div
            onClick={handleClick}
            className={`group relative h-[400px] w-[340px] md:h-[500px] md:w-[450px] overflow-hidden rounded-lg
                ${
                    card.id % 2 === 0
                        ? "rotate-3 -translate-y-4"
                        : "-rotate-3 translate-y-4"
                } m-8`}
        >
            <ShineBorder
                className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
                color={["#fc0303", "#2563eb", "#FFBE7B"]}
            >
                <div
                    // style={{
                    //     width: "340px",
                    //     height: "380px",
                    //     backgroundImage: `url(${card.posterLink})`,
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center",
                    // }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-lg md:mt-[2px] md:ml-[3px] bg-cover bg-center mt-[3px] ml-[3px] w-[335px] h-[395px] md:w-[443px] md:h-[495px] "
                    style={{ backgroundImage: `url(${card.banner})` }}
                ></div>
            </ShineBorder>
        </motion.div>
    );
};

export default Example;
