"use client";

import React from "react";
import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

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
                    {/* <PlaceholderCard className="md:relative md:-top-5" />
                    <PlaceholderCard className="md:relative md:top-20" />
                    <PlaceholderCard className="md:relative md:top-5" /> */}

                    <NeonGradientCard className="max-w-[400px] max-h-[700px] items-center justify-center text-center md:relative md:-top-5 sm:relative">
                        <div className="relative w-full h-full">
                            <GlareCard className="flex flex-col items-center justify-center text-center max-w-[370px] h-full">
                                <Image
                                    alt="Event"
                                    width={400} // Set the width to match the desired dimensions
                                    height={600} // Set the height to match the desired dimensions
                                    className="object-cover"
                                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722879056/CSI/Screenshot_2024-08-05_230113_dmlxxc.png"
                                />
                            </GlareCard>
                        </div>
                    </NeonGradientCard>

                    <NeonGradientCard className="max-w-[370px] items-center justify-center text-center md:relative md:top-20 ">
                        <div className="">
                            <GlareCard className="flex flex-col items-center justify-center text-center">
                                {/* <video
                                    // src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722879138/CSI/WhatsApp_Video_2024-08-05_at_22.30.24_6dafd9b7_eycnkn.mp4"
                                    src="https://res.cloudinary.com/du0mba5mz/video/upload/v1722879138/CSI/WhatsApp_Video_2024-08-05_at_22.30.24_6dafd9b7_eycnkn.mp4"
                                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                /> */}
                                <Image
                                    alt="Event"
                                    width={400} // Set the width to match the desired dimensions
                                    height={600} // Set the height to match the desired dimensions
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
                                    width={400} // Set the width to match the desired dimensions
                                    height={600} // Set the height to match the desired dimensions
                                    className="h-full w-full absolute inset-0 object-cover"
                                    // src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1709569063/CSI%20Website/Events/hw7nppsn4j9l8qfvcstw.jpg"
                                    src="https://res.cloudinary.com/du0mba5mz/image/upload/v1722878890/CSI/Screenshot_2024-08-05_225816_krpfvy.png"
                                />
                            </GlareCard>
                        </div>
                    </NeonGradientCard>
                </div>
                <div className="mb-20 mt-60">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        VISION
                    </h2>
                    <p className="text-center max-w-2xl mx-auto">
                        CSI envisions a future where innovation, education, and
                        sustainable practices converge to elevate India's
                        trajectory towards progress.
                    </p>
                </div>

                {/* Mission Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        MISSION
                    </h2>
                    <p className="text-center max-w-3xl mx-auto">
                        Our mission revolves around orchestrating a myriad of
                        initiatives: from comprehensive workshops and insightful
                        seminars to dynamic awareness campaigns. These endeavors
                        are meticulously designed to champion skill development,
                        foster entrepreneurial spirit, and champion
                        environmental conservation. Our dedication to these
                        causes stems from a fervent belief in their capacity to
                        catalyze national growth and prosperity.
                    </p>
                </div>
                {/* Objectives Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold mb-24 text-center">
                        OBJECTIVES
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-60 ">
                        <div className="flex flex-col items-center max-w-xs ">
                            <div className="relative w-[250px] h-[200px] mb-4 border">
                                <Image
                                    src="/about/image1.png"
                                    alt="Students collaborating"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <p className="text-center">
                                To cultivate students' interest in the field of
                                management or commerce in a convivial
                                environment, without the pressure of being
                                graded.
                            </p>
                        </div>

                        <div className="flex flex-col items-center max-w-xs">
                            <div className="relative w-[250px] h-[200px] mb-4">
                                <Image
                                    src="/about/image2.png"
                                    alt="Sustainable development"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <p className="text-center">
                                Commitment to Sustainable Development: Central
                                to our mission is the creation of an environment
                                that not only promotes innovation but also
                                ensures sustainable progress.
                            </p>
                        </div>
                    </div>
                </div>
                {/* About MATES Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        ABOUT MATES
                    </h2>
                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 relative mb-8 overflow-hidden top-[17px]">
                            <Image
                                src="/about/image3.png"
                                alt="MATES Logo"
                                layout="fill"
                                objectFit="cover" // 'contain' can also be used, depending on how you want the image to fit
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-center max-w-3xl mx-auto">
                            Maharaja Agrasen Technical Education Society (MATES)
                            is a charitable trust comprising a group of
                            well-known Educationists, Industrialists,
                            Businessmen, Professionals, and Philanthropists with
                            an aim to promote quality education in the field of
                            Technology, Management, Law, Pharmacy, and Health
                            Services to shape the human society for a better
                            future. With its constant growth and consistent
                            efforts, MATES has been able to keep up its
                            commitment to serving the society and its people.
                        </p>
                        <div className="flex justify-center mt-10">
                            <iframe
                                className="w-full h-[300px] sm:w-[520px] sm:h-[400px]"
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
    );
};

export default AboutCSI;
