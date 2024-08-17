import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {Icons} from '../Icons'
export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[48rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <span className="pointer-events-none hidden whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"></span>
            <div className="bg-gradient-radial from-[#AF54B1] from-10% via-[#1E1033] via-30% to-transparent to-80% h-[800px] w-[800px] blur-lg rounded-full flex justify-center items-center"></div>
            <div className="absolute w-40 h-40 bg-gradient-to-t rounded-full from-blue-600 to-white rotate-45"></div>
            {/* Orbit 1 */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={40}
                radius={80}
            >
                <Icons.whatsapp />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-white"
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.notion />
            </OrbitingCircles>

            {/* Orbit 2 */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <Icons.vite />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                delay={20}
                duration={20}
                reverse
            >
                <Icons.cpp />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none "
                radius={190}
                duration={20}
                delay={15}
                reverse
            >
                <Icons.gitHub />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={25}
                reverse
            >
                <Icons.openai />
            </OrbitingCircles>
            {/* Orbit 3 */}
            <OrbitingCircles
                className="size-[60px] border-none bg-white"
                radius={290}
                duration={30}
                delay={0}
            >
                <Icons.googleDrive />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-transparent"
                radius={290}
                delay={5}
                duration={30}
            >
                <Icons.angular />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-white"
                radius={290}
                duration={30}
                delay={10}
            >
                <Icons.nextjs />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-transparent"
                radius={290}
                duration={30}
                delay={15}
            >
                <Icons.react />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-transparent"
                radius={290}
                duration={30}
                delay={20}
            >
                <Icons.js />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-white"
                radius={290}
                duration={30}
                delay={25}
            >
                <Icons.java />
            </OrbitingCircles>
        </div>
    );
}


