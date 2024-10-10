import Infinitescrollbrand from "@/components/landingPage/InfineScroll";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import About from "@/components/landingPage/About";
import { UpdateSection } from "@/components/landingPage/UpdateSection";
import BentoGridLanding from "@/components/landingPage/BentoGridLanding";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/components/landingPage/Orbit";
// import Popup from "@/components/PopupBanner/PopUp";

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
                        <h2 className="text-[#ABABAB] text-[0.7rem] -mt-2 mb-3 md:text-lg md:-mt-3 md:mb-5">
                            WHERE INNOVATON MEETS EXCELLENCE
                        </h2>
                    </div>
                    {/* <Button className="text-[0.7rem] md:text-lg" containerClassName="w-20 lg:w-40 lg:h-14">Join Us</Button> */}
                    <a
                        href="https://forms.gle/AKKuaGPyZgztVUwj7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShimmerButton
                            borderRadius="15px"
                            className="shadow-2xl mt-6"
                        >
                            <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                JOIN US
                            </span>
                        </ShimmerButton>
                    </a>

                    <OrbitingCirclesDemo />

                    <div className="mt-20">
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
