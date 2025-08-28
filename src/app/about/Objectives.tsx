import React from "react";
import Image from "next/image";

export const ObjectivesSection: React.FC = () => (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Objectives
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-700 to-indigo-400 mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                <div className="group flex-1 max-w-xl flex flex-col">
                    <div className="bg-purple-900/60 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2 relative before:absolute before:-inset-1 before:rounded-lg before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-gradient-to-r before:from-green-500 before:to-indigo-400 shadow-lg h-full flex flex-col">
                        <div className="relative w-[250px] h-[200px] mb-4 mx-auto z-10">
                            <Image
                                src="/about/image1.png"
                                alt="Students collaborating"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-indigo-100 relative z-10 text-center text-lg md:text-xl flex-1 flex items-center justify-center min-h-[120px]">
                            To cultivate students' interest in the field of
                            management or commerce in a convivial environment,
                            without the pressure of being graded.
                        </div>
                    </div>
                </div>
                <div className="group flex-1 max-w-xl flex flex-col">
                    <div className="bg-purple-900/60 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2 relative before:absolute before:-inset-1 before:rounded-lg before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-gradient-to-r before:from-green-500 before:to-indigo-400 shadow-lg h-full flex flex-col">
                        <div className="relative w-[250px] h-[200px] mb-4 mx-auto z-10">
                            <Image
                                src="/about/image2.png"
                                alt="Sustainable development"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-indigo-100 relative z-10 text-center text-lg md:text-xl flex-1 flex items-center justify-center min-h-[120px]">
                            Commitment to Sustainable Development: Central to
                            our mission is the creation of an environment that
                            not only promotes innovation but also ensures
                            sustainable progress.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ObjectivesSection;
