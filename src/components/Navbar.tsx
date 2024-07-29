"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import ShimmerButton from "./magicui/ShimmerButton"
import { Button } from "./ui/moving-border"

export default function Navbar() {

    const pathname = usePathname()
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
          <div className="flex items-center space-x-4">
            <div className="flex justify-center text-white space-x-4 md:space-x-10">
              <Link href="/team">
                <div className={pathname === "/team" ? "text-blue-500" : ""}>TEAM</div>
              </Link>
              <Link href="/events">
                <div className={pathname === "/events" ? "text-blue-500" : ""}>EVENTS</div>
              </Link>
              <Link href="/gallery">
                <div className={pathname === "/gallery" ? "text-blue-500" : ""}>GALLERY</div>
              </Link>
              <Link href="/about">
                <div className={pathname === "/about" ? "text-blue-500" : ""}>ABOUT</div>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="pl-2 z-10 w-8/12 items-center justify-center">
              {/* <ShimmerButton borderRadius="15px" className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  BROCHURE
                </span>
              </ShimmerButton> */}
              <Button className="text-[0.7rem] md:text-lg" containerClassName="w-20 lg:w-40 lg:h-14">BROSHURE</Button>
            </div>
          </div>
        </nav>
    </>
    
  )
}
