"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/moving-border";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <nav className="flex justify-between items-center text-[0.7rem] md:-mt-3 pl-2 md:pl-5 md:text-xl">
                <Link href="/">
                    <Image
                        src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1721929345/CSI%20Website/logo_f1pruv.jpg"
                        alt="Logo"
                        width={130}
                        height={130}
                    />
                </Link>
                <div className="flex items-center  space-x-4">
                    <div className="flex justify-center  font-medium bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-600  text-transparent bg-clip-text space-x-4 md:space-x-10">
                        <Link href="/">
                            <div
                                className={`${pathname === "/" ? "" : "text-gray-500"
                                    } hidden md:block`}
                            >
                                {
                                    pathname === "/" ? "HOME" : "HOME"
                                }
                            </div>
                        </Link>
                        <Link href="/team">
                            <div
                                className={
                                    pathname === "/team" ? "" : "text-gray-500"
                                }
                            >
                                {
                                    pathname === "/team" ? "TEAM" : "TEAM"
                                }
                            </div>
                        </Link>
                        <Link href="/events">
                            <div
                                className={
                                    pathname === "/events"
                                        ? ""
                                        : "text-gray-500"
                                }
                            >
                                {
                                    pathname === "/events" ? "EVENTS" : "EVENTS"
                                }
                            </div>
                        </Link>
                        <Link href="/gallery">
                            <div
                                className={
                                    pathname === "/gallery"
                                        ? ""
                                        : "text-gray-500"
                                }
                            >
                                {
                                    pathname === "/gallery" ? "GALLERY" : "GALLERY"
                                }
                            </div>
                        </Link>
                        <Link href="/about">
                            <div
                                className={
                                    pathname === "/about" ? "" : "text-gray-500"
                                }
                            >
                                {
                                    pathname === "/about" ? "ABOUT" : "ABOUT"
                                }
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="pl-2 z-10 w-8/12 items-center justify-center">
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1BgcnhzFb_Q0ed2aLFJKaH5rwMzs1DLvL/view"
                        >
                            <Button
                                className="text-[0.7rem] lg:text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                   hover:from-pink-500 hover:via-red-500 hover:to-purple-600
                   text-white font-semibold 
                   transform transition-all duration-500 ease-in-out 
                   hover:scale-110 hover:rotate-2 hover:shadow-3xl hover:brightness-125 
                   hover:ring-2 hover:ring-purple-400 hover:ring-offset-2
                   hover:animate-pulse"
                                containerClassName="w-20 lg:w-40 lg:h-14 mx-2 rounded-lg overflow-hidden"
                            >
                                <span className="transition-colors duration-300 ease-in-out hover:text-white-300">
                                    BROCHURE
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
