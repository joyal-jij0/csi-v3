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
                                className={`${
                                    pathname === "/" ? "" : "text-gray-500"
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
                            rel="noopener nonreferrer"
                            href="https://drive.google.com/file/d/1vVOrrGA8Mlr0lUY0wBkKG12Pt9ZaQX7X/view"
                        >
                            <Button
                                className="text-[0.7rem] lg:text-lg bg-gradient-to-b from-black to-zinc-950 hover:to-zinc-900 transition-all  duration-500"
                                containerClassName="w-20 lg:w-40 lg:h-14 mx-2 "
                            >
                                BROCHURE
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
