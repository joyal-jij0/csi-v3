import NumberTicker from "../magicui/NumberTicker";

export default function About() {
    return (
        <>
            <div className="text-white px-4 lg:px-16 py-8 bg-black">
                <h2 className="text-4xl font-bold text-center mb-4">ABOUT</h2>
                <p className="text-center text-lg lg:text-xl leading-relaxed">
                    The Computer Society of India (CSI) at Maharaja Agrasen
                    Institute of Technology is a prestigious student society
                    focused on the intersection of technology and society. Established in 2009, it aims to explore
                    advancements and social needs to build a better future. Join
                    us to discover discussions and resolutions at the forefront of technology
                    and its impact on society.
                </p>
            </div>
            <div className="mt-10 text-white flex flex-col lg:flex-row lg:justify-between lg:text-2xl gap-8 lg:gap-10 px-10 lg:px-16">
                <div
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div className={'z-20 group-hover:scale-125 transition-all duration-300'}>
                            <NumberTicker className="text-white " value={50}/>
                        </div>
                        <span className=" z-20 ml-2 text-3xl group-hover:scale-125 transition-all duration-300">+</span>
                    </div>
                    <div
                        className="z-20 text-sm lg:text-xl font-medium group-hover:scale-125 transition-all duration-300">MEMBERS
                    </div>
                </div>

                <div
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div className={'z-20 group-hover:scale-125 transition-all duration-300'}>
                            <NumberTicker className="text-white " value={50}/>
                        </div>
                        <span className=" z-20 ml-2 text-3xl group-hover:scale-125 transition-all duration-300">+</span>
                    </div>
                    <div
                        className="z-20 text-sm lg:text-xl font-medium group-hover:scale-125 transition-all duration-300">COLLABORATIONS
                    </div>
                </div>

                <div
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div className={'z-20 group-hover:scale-125 transition-all duration-300'}>
                            <NumberTicker className="text-white " value={14}/>
                        </div>
                    </div>
                    <div
                        className="z-20 text-sm lg:text-xl font-medium group-hover:scale-125 transition-all duration-300">YEARS
                        OF CSI
                    </div>
                </div>

                <div
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex group-hover:space-x-5 items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div className={'z-20 group-hover:scale-125 transition-all duration-300'}>
                            <NumberTicker className="text-white " value={1000}/>
                        </div>
                        <span className=" z-20 ml-2 text-3xl group-hover:scale-125 transition-all duration-300">+</span>
                    </div>
                    <div
                        className="z-20 text-sm lg:text-xl font-medium group-hover:scale-125 transition-all duration-300">PARTICIPANTS
                    </div>
                </div>

            </div>

        </>
    );
}
