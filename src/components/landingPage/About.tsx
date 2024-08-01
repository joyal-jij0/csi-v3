import NumberTicker from "../magicui/NumberTicker";

export default function About() {
    return (
        <>
            <div className="lg:-mt-56 text-white">
                <div className="text-4xl font-bold text-center">ABOUT</div>
                <div className="text-center mt-3">
                    The Computer Society of India (CSI) at Maharaja Agrasen
                    Institute of Technology is a prestigious student society
                    focused on the intersection of <br /> technology and
                    society. Established in 2009, it aims to explore
                    advancements and social needs to build a better future. Join
                    us to discover <br />
                    discussions and resolutions at the forefront of technology
                    and its impact on society.
                </div>
            </div>
            <div className="flex justify-between lg:text-2xl mt-10 text-white">
            <div className="flex flex-col items-center space-y-5">
                    <div className="flex">
                        <div>
                            <NumberTicker className="text-white" value={50} />
                        </div>{" "}
                        <span>+</span>
                    </div>
                    <div className="text-[0.6rem] lg:text-2xl">MEMEBERS</div>
                </div>
                <div className="flex flex-col items-center space-y-5">
                    <div className="flex">
                        <div>
                            <NumberTicker className="text-white" value={50} />
                        </div>{" "}
                        <span>+</span>
                    </div>
                    <div className="text-[0.6rem] lg:text-2xl">COLLABORATIONS</div>
                </div>
                <div className="space-y-5">
                <div className="flex flex-col items-center ">
                        <div >
                            <NumberTicker className="text-white" value={14} />
                        </div>
                    </div>
                    <div  className="text-[0.6rem] lg:text-2xl">YEARS OF CSI</div>
                </div>
                <div className="flex flex-col items-center space-y-5">
                    <div className="flex">
                        <div>
                            <NumberTicker className="text-white" value={1000} />
                        </div>{" "}
                        <span>+</span>
                    </div>
                    <div  className="text-[0.6rem] lg:text-2xl">PARTICIPANTS</div>
                </div>
            </div>
        </>
    );
}
