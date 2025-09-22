import Infinitescrollbrand from "@/components/landingPage/InfineScroll";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import About from "@/components/landingPage/About";
import { UpdateSection } from "@/components/landingPage/UpdateSection";
import BentoGridLanding from "@/components/landingPage/BentoGridLanding";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/components/landingPage/Orbit";
// import Popup from "@/components/PopupBanner/PopUp";

export const metadata = {
    title: "CSI - INNOWAVE | Technocultural Society of MAIT",
    description:
        "Join MAIT's premier technocultural society. Experience workshops, internships, and innovative initiatives fostering skill development and entrepreneurial spirit.",
    keywords: [
        "CSI INNOWAVE",
        "Computer Society of India",
        "MAIT",
        "hackathon",
        "internships",
        "innovation",
        "Tech Workshops",
        "Seminars",
        "Tech Competitions",
        "Student Events",
        "technocultural society",
    ],
    openGraph: {
        title: "CSI - INNOWAVE | Beyond the Known, Journey to the Unexplored",
        description:
            "🚀 MAIT's Technocultural Society fostering innovation and sustainable progress. Join us for workshops, internships, and transformative initiatives. ✨",
        url: "https://www.csiinnowave.com/",
        type: "website",
        images: [
            {
                url: "/public/csi-innowave.jpg",
                width: 1200,
                height: 630,
                alt: "CSI MAIT Open Graph Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CSI - INNOWAVE | Beyond the Known, Journey to the Unexplored",
        description:
            "🚀 MAIT's Technocultural Society fostering innovation and sustainable progress. Join us for workshops, internships, and transformative initiatives.✨",
        images: ["/public/csi-innowave.jpg"],
    },
};

export default function Home() {
    return (
        <>
            {/* <Popup/> */}
            <div>
                <div className="flex flex-col justify-start items-center pt-6 md:pt-14">
                    <div>
                        <h1
                            className="text-gradient-border font-bold text-4xl  md:text-8xl "
                            data-text="&lt; CSI INNOWAVE /&gt;"
                        >
                            &lt; CSI INNOWAVE /&gt;
                        </h1>
                    </div>
                    <div>
                        <h2 className="text-[#ABABAB] text-[0.7rem] -mt-2 mb-3 md:text-lg md:mt-5 md:mb-5">
                            WHERE INNOVATON MEETS EXCELLENCE
                        </h2>
                    </div>
                    {/* <Button className="text-[0.7rem] md:text-lg" containerClassName="w-20 lg:w-40 lg:h-14">Join Us</Button> */}
                    <a
                        href="https://forms.gle/oynZTTsJxGzPNyV76"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShimmerButton
                            borderRadius="15px"
                            className="shadow-2xl mt-6 transform transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-3xl hover:brightness-110 
                   hover:rotate-1 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                   hover:text-white hover:ring-2 hover:ring-purple-400 hover:ring-offset-2"
                        >
                            <span
                                className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight 
                         text-white dark:from-white dark:to-slate-900/10 lg:text-lg 
                         transition-colors duration-300 ease-in-out hover:animate-pulse"
                            >
                                JOIN US
                            </span>
                        </ShimmerButton>
                    </a>

                    <OrbitingCirclesDemo />

                    <div className="mt-20 w-full overflow-x-hidden">
                        <Infinitescrollbrand />
                    </div>
                    <div className="mt-24 mb-28">
                        <UpdateSection />
                    </div>
                    <div>
                        <About />
                    </div>
                </div>
                <div className="mt-16">
                    <BentoGridLanding />
                </div>
            </div>
        </>
    );
}
