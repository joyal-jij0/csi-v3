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
            <div className="mt-10 text-white flex flex-col lg:flex-row lg:justify-between lg:text-2xl gap-8 lg:gap-10 px-4 lg:px-16">
                <div className="flex flex-col items-center space-y-5 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center text-4xl font-bold">
                        <div>
                            <NumberTicker className="text-white" value={50} />
                        </div>
                        <span className="ml-2 text-3xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl font-medium">MEMBERS</div>
                </div>
                <div className="flex flex-col items-center space-y-5 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center text-4xl font-bold">
                        <div>
                            <NumberTicker className="text-white" value={50} />
                        </div>
                        <span className="ml-2 text-3xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl font-medium">COLLABORATIONS</div>
                </div>
                <div className="flex flex-col items-center space-y-5 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center text-4xl font-bold">
                        <div>
                            <NumberTicker className="text-white" value={14} />
                        </div>
                    </div>
                    <div className="text-sm lg:text-xl font-medium">YEARS OF CSI</div>
                </div>
                <div className="flex flex-col items-center space-y-5 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center text-4xl font-bold">
                        <div>
                            <NumberTicker className="text-white" value={1000} />
                        </div>
                        <span className="ml-2 text-3xl">+</span>
                    </div>
                    <div className="text-sm lg:text-xl font-medium">PARTICIPANTS</div>
                </div>
            </div>
        </>
    );
}
