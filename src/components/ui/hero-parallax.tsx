"use client";
import React, { useState, useEffect, useId, useRef } from "react";

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
    id: number;
    title: string;
    posterLink: string;
    date: string;
    formLink: string;
    description: string;
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
    // const [active, setActive] = useState<Product | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    const firstRow = products.slice(0, products.length / 2);
    const secondRow = products.slice(products.length / 2, products.length);
    
    const scrollRef = React.useRef<HTMLDivElement>(null!);
    
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    // useEffect(() => {
    //     function onKeyDown(event: KeyboardEvent) {
    //         if (event.key === "Escape") {
    //             setActive(null);
    //         }
    //     }

    //     if (active) {
    //         document.body.style.overflow = "hidden";
    //         document.body.style.height = "100vh";
    //         window.addEventListener("keydown", onKeyDown);
    //     } else {
    //         document.body.style.overflow = "";
    //         document.body.style.height = "";
    //         window.removeEventListener("keydown", onKeyDown);
    //     }

    //     return () => {
    //         document.body.style.overflow = "";
    //         document.body.style.height = "";
    //         window.removeEventListener("keydown", onKeyDown);
    //     };
    // }, [active]);

    // useOutsideClick(ref, () => setActive(null));

    return (
        <div
            ref={scrollRef}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div 
                style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    gap: '5rem', // Equivalent to `space-x-20` in Tailwind (20 * 0.25rem)
                    marginBottom: '5rem', // Equivalent to `mb-20` in Tailwind (20 * 0.25rem)
                }}
                >
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.id}
                            // setActive={setActive}
                            id={id}
                            
                        />

                    ))}
                </motion.div>
                <motion.div 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '5rem', // Equivalent to `mb-20` (20 * 0.25rem = 5rem)
                        gap: '5rem', // Equivalent to `space-x-20` (20 * 0.25rem = 5rem)
                    }}
                >
                    {secondRow.map((product) => (

                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.id}
                            // setActive={setActive}
                            id={id}
                        />
                        
                    ))}
                </motion.div>
            </motion.div>
            {/* <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={() => setActive(null)}
                    />
                )}
            </AnimatePresence> */}
            {/* <AnimatePresence>
                {active && (
                    <ExpandedCard
                        active={active}
                        setActive={setActive}
                        id={id}
                        ref={ref}
                    />
                )}
            </AnimatePresence> */}
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold text-white">
                Our Notable <br /> Events
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
                Discover our journey through captivating visuals of past
                milestone Events
            </p>
        </div>
    );
};

const ProductCard = ({
    product,
    translate,
    id,
}: {
    product: Product;
    translate: MotionValue<number>;
    id: string;
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/eventPhotos/${product.id}`);
    };

    return (
        <div onClick={handleClick}>
        <motion.div
            style={{
                x: translate,
                height: '24rem', // Equivalent to `h-96` (96 * 0.25rem = 24rem)
                width: '30rem', // Equivalent to `w-[30rem]`
                position: 'relative', // Equivalent to `relative`
                flexShrink: 0, // Equivalent to `flex-shrink-0`
            }}
            key={product.id}
            // className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <div className="block">
                <Image
                    src={product.posterLink}
                    height="3200"
                    width="800"
                    className="object-contain object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        </motion.div>
        </div>
    );
};

// const ExpandedCard = React.forwardRef<
//     HTMLDivElement,
//     {
//         active: Product;
//         setActive: (product: Product | null) => void;
//         id: string;
//     }
// >(({ active, setActive, id }, ref) => {
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//     useEffect(() => {
//         function handleResize() {
//             setWindowSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         }

//         window.addEventListener("resize", handleResize);
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <motion.div
//             className="fixed inset-0 flex items-start justify-center z-[100] p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             style={{
//                 paddingTop: `${window.scrollY}px`,
//             }}
//         >
//             <motion.div
//                 layoutId={`card-${active.id}-${id}`}
//                 ref={ref}
//                 className="w-full bg-slate-900 dark:bg-neutral-800 rounded-3xl overflow-hidden border border-white relative"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: 50, opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 style={{
//                     maxWidth: `${Math.min(500, windowSize.width * 0.9)}px`,
//                     maxHeight: `${windowSize.height * 0.8}px`,
//                 }}
//             >
//                 <motion.button
//                     className="absolute top-2 right-2 z-10 p-2 bg-red-800 rounded-full"
//                     onClick={() => setActive(null)}
//                 >
//                     <CloseIcon />
//                 </motion.button>
//                 <motion.div
//                     layoutId={`image-${active.id}-${id}`}
//                     className="w-full h-60 relative"
//                 >
//                     <Image
//                         priority
//                         src={active.posterLink}
//                         alt={active.title}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-t-3xl"
//                     />
//                 </motion.div>

//                 <div
//                     className="overflow-y-auto"
//                     style={{
//                         maxHeight: `calc(${windowSize.height * 0.8}px - 15rem)`,
//                     }}
//                 >
//                     <div className="p-4">
//                         <div className="flex justify-between">
//                             <motion.h3
//                                 layoutId={`title-${active.title}-${id}`}
//                                 className="font-medium text-white text-xl mb-2"
//                             >
//                                 {active.title}
//                             </motion.h3>

//                             <motion.a
//                                 layout
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 href={active.formLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
//                                 onClick={(e) => {
//                                     e.preventDefault();

//                                     window.open(
//                                         active.formLink,
//                                         "_blank",
//                                         "noopener,noreferrer"
//                                     );
//                                 }}
//                             >
//                                 Google Form
//                             </motion.a>

//                             {/* <motion.button className="bg-green-500 font-bold text-slate-100 p-2 rounded-full">
//                                     Google Form
//                                 </motion.button> */}
//                         </div>
//                         <motion.h4
//                             layoutId={`title-${active.date}-${id}`}
//                             className="font-medium text-white text-xl mb-2"
//                         >
//                             {active.date}
//                         </motion.h4>
//                         {active.description && (
//                             <motion.p
//                                 layoutId={`description-${active.description}-${id}`}
//                                 className="text-white dark:text-gray-300 text-base mb-4"
//                             >
//                                 {active.description}
//                             </motion.p>
//                         )}
//                     </div>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// });
// ExpandedCard.displayName = "ExpandedCard";

// const CloseIcon: React.FC = () => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6 text-white"
//         >
//             <path d="M18 6L6 18" />
//             <path d="M6 6l12 12" />
//         </svg>
//     );
// };
