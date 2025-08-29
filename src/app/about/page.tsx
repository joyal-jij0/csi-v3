"use client";

import React from "react";
import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { VisionMissionSection } from "./VisionandMission";
import { ObjectivesSection } from "./Objectives";

const AboutCSI: React.FC = () => {
    return (
        <div className=" text-white p-8">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center ">
                    ABOUT CSI
                </h2>
                <p className="mb-20 text-center">
                    The Computer Society of India chapter at MAIT, founded in
                    2009, unites passionate students and faculty. They
                    collaborate to <br className="hidden md:inline" /> explore
                    new business ideas through open discussions, interactive
                    sessions, and practical activities. This fosters critical
                    thinking <br className="hidden md:inline" /> and equips
                    members with valuable business skills.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5 ">
                    <NeonGradientCard className="max-w-[400px] max-h-[700px] items-center justify-center text-center md:relative md:-top-5 sm:relative">
                        <div className="relative w-full h-full">
                            <GlareCard className="flex flex-col items-center justify-center text-center max-w-[370px] h-full">
                                <Image
                                    alt="Event"
                                    width={400}
                                    height={600}
                                    className="object-cover"
                                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722879056/CSI/Screenshot_2024-08-05_230113_dmlxxc.png"
                                />
                            </GlareCard>
                        </div>
                    </NeonGradientCard>

                    <NeonGradientCard className="max-w-[370px] items-center justify-center text-center md:relative md:top-20 ">
                        <div className="">
                            <GlareCard className="flex flex-col items-center justify-center text-center">
                                <Image
                                    alt="Event"
                                    width={400}
                                    height={600}
                                    className="object-contain"
                                    src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1723921999/CSI%20Website/WhatsApp_Image_2024-08-18_at_00.42.54_yx4ndj.jpg"
                                />
                            </GlareCard>
                        </div>
                    </NeonGradientCard>
                    <NeonGradientCard className="max-w-[370px] items-center justify-center text-center  md:relative md:top-5 ">
                        <div className="">
                            <GlareCard className="flex flex-col items-center justify-center text-center">
                                <Image
                                    alt=""
                                    width={400}
                                    height={600}
                                    className="h-full w-full absolute inset-0 object-cover"
                                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722878890/CSI/Screenshot_2024-08-05_225816_krpfvy.png"
                                />
                            </GlareCard>
                        </div>
                    </NeonGradientCard>
                </div>
                {/* Vision & Mission Section */}
                <div className="mb-20 mt-60">
                    <VisionMissionSection />
                </div>
                {/* Objectives Section */}
                <div className="mb-20 mt-20">
                    <ObjectivesSection />
                </div>
                {/* About MATES Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        ABOUT MATES
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                        <div className="flex-1 max-w-xl flex flex-col">
                            <div className="h-full flex flex-col items-center justify-center">
                                <div className="w-[250px] h-[200px] mb-4 mx-auto relative z-10">
                                    <Image
                                        src="/about/image3.png"
                                        alt="MATES Logo"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-lg"
                                    />
                                </div>
                                <p className="text-center max-w-3xl mx-auto text-lg md:text-xl flex-1 flex items-center justify-center min-h-[120px]">
                                    Maharaja Agrasen Technical Education Society
                                    (MATES) is a charitable trust comprising a
                                    group of well-known Educationists,
                                    Industrialists, Businessmen, Professionals,
                                    and Philanthropists with an aim to promote
                                    quality education in the field of
                                    Technology, Management, Law, Pharmacy, and
                                    Health Services to shape the human society
                                    for a better future. With its constant
                                    growth and consistent efforts, MATES has
                                    been able to keep up its commitment to
                                    serving the society and its people.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 max-w-xl flex flex-col">
                            <div className="h-full flex flex-col items-center justify-center">
                                <div className="w-[250px] h-[200px] mb-4 mx-auto relative z-10 flex items-center justify-center">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20%20PSP%20Area,%20Plot%20No-1,%20Sector-22,%20%20%20Rohini,%20%20%20Delhi-110086%20%20%20INDIA%20Delhi+(Maharaja%20Agrasen%20Institute%20of%20Technology)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCSI;
