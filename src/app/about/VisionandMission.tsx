import React from "react";
import { BookOpen, Heart, Users } from "lucide-react";

export const VisionMissionSection: React.FC = () => (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <BookOpen
                    className="inline-block text-indigo-200 mb-2"
                    size={32}
                />
                <h2 className="text-4xl font-bold text-white mb-4">
                    Vision & Mission
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-700 to-indigo-400 mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="group w-full md:w-1/2">
                    <div className="bg-purple-900/60 p-6 rounded-lg transform transition-all hover:-translate-y-2 duration-300 relative before:absolute before:-inset-1 before:rounded-lg before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-gradient-to-r before:from-purple-500 before:to-indigo-400">
                        <div className="flex items-center mb-4 relative z-10">
                            <div className="bg-gradient-to-br from-purple-700 to-indigo-400 p-3 rounded-full mr-4">
                                <Users className="text-indigo-200" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-purple-100">
                                Our Vision
                            </h3>
                        </div>
                        <p className="text-lg text-indigo-100 relative z-10">
                            CSI envisions a future where innovation, education,
                            and sustainable practices converge to elevate
                            India's trajectory towards progress. Nurturing young
                            minds in a learning environment of high academic
                            value and also fostering spiritual and ethical
                            values along with technological and managerial
                            competence.
                        </p>
                        <div className="mt-6 flex justify-end relative z-10">
                            <div className="text-4xl text-indigo-300 opacity-30"></div>
                        </div>
                    </div>
                </div>
                <div className="group w-full md:w-1/2">
                    <div className="bg-purple-900/60 p-6 rounded-lg transform transition-all hover:-translate-y-2 duration-300 relative before:absolute before:-inset-1 before:rounded-lg before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-gradient-to-r before:from-purple-500 before:to-indigo-400">
                        <div className="flex items-center mb-4 relative z-10">
                            <div className="bg-gradient-to-br from-purple-700 to-indigo-400 p-3 rounded-full mr-4">
                                <Heart className="text-indigo-200" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-purple-100">
                                Our Mission
                            </h3>
                        </div>
                        <p className="text-lg text-indigo-100 relative z-10">
                            Our mission revolves around orchestrating a myriad
                            of initiatives: from comprehensive workshops and
                            insightful seminars to dynamic awareness campaigns.
                            These endeavors are meticulously designed to
                            champion skill development, foster entrepreneurial
                            spirit, and champion environmental conservation.
                        </p>
                        <div className="mt-6 flex justify-end relative z-10">
                            <div className="text-4xl text-indigo-300 opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
