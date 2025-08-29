export const metadata = {
    title: "About CSI V3 - Maharaja Agrasen Institute of Technology",
    description: "Learn about the Computer Society of India (CSI) at Maharaja Agrasen Institute of Technology. Discover our mission, achievements, and how we explore the intersection of technology and society.",
    keywords: [
        "CSI",
        "Computer Society of India",
        "Maharaja Agrasen Institute of Technology",
        "Technology Society",
        "Student Society",
        "Tech Events",
        "Collaborations",
      ],
      openGraph: {
        title: "About CSI V3 - Maharaja Agrasen Institute of Technology",
        description:
          "Discover the mission, achievements, and impact of the Computer Society of India (CSI) at MAIT.",
        url: "https://csi-v3.vercel.app/about", 
        type: "website",
        images: [
          {
            url: "https://yourwebsite.com/about-og-image.jpg", // Replace with the actual image URL
            width: 1200,
            height: 630,
            alt: "CSI MAIT About Page Open Graph Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "About CSI V3 - Maharaja Agrasen Institute of Technology",
        description:
          "Discover the mission, achievements, and impact of the Computer Society of India (CSI) at MAIT.",
        images: ["https://yourwebsite.com/about-og-image.jpg"], // Replace with the actual image URL
      },
};

import NumberTicker from "../magicui/NumberTicker";

export default function About() {
    return (
        <>
            {/* <Head>
                <title>About CSI V3 - Maharaja Agrasen Institute of Technology</title>
                <meta name="description" content="Learn about the Computer Society of India (CSI) at Maharaja Agrasen Institute of Technology." />
                <meta name="keywords" content="CSI, MAIT, Computer Society, Technology, Students" />
                <meta name="author" content="CSI MAIT" />
            </Head> */}
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
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-green-950 via-green-900 to-green-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
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
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-green-950 via-green-900 to-green-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
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
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-green-950 via-green-900 to-green-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
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
                    className=" group relative overflow-hidden flex flex-col items-center space-y-5 group-hover:space-y-2 bg-gradient-to-r from-green-950 via-green-900 to-green-950 p-6 rounded-lg shadow-lg w-full lg:w-[250px] h-[200px]">
                    <div className=" flex group-hover:space-x-5 items-center text-4xl font-bold justify-center h-full">
                        <div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
                        <div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-2 blur-lg w-44 h-44 bg-gradient-to-b from-green-600 via-green-800 to-green-950 rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-0 transition-all duration-300"></div>
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
