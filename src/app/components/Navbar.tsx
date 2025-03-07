'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HamburgerMenuIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faSpotify, faThreads} from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 w-full flex items-center justify-between px-4 md:px-16 py-6 z-50">
            {/* Dropdown Menu on Small Screens */}
            <div className='flex md:hidden'>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                        <HamburgerMenuIcon height={18} width={18}/>
                    </MenubarTrigger>
                    <MenubarContent className='w-[calc(100vw-2rem)] left-0 right-0 bg-white rounded-lg shadow-none border-none bg-gray-100/75 backdrop-blur-md p-4 space-y-2'>
                        <MenubarItem className="flex justify-between items-center rounded-lg bg-white transition-colors duration-300 ease-in-out">
                            <Link href='/' className='p-4 w-full h-full text-gray-600'>
                                Work
                            </Link>
                        </MenubarItem>
                        <MenubarItem className="flex justify-between items-center rounded-lg bg-white transition-colors duration-300 ease-in-out">
                            <Link href='/about' className='p-4 w-full h-full text-gray-600'>
                                About
                            </Link>
                        </MenubarItem>

                        {/* Footer Links */}
                        <div className="flex justify-around text-gray-500 text-sm mt-18">
                            <Link href="https://www.instagram.com/rastinrashidi1" target="_blank" className='hover:bg-white/20 p-2 rounded-lg transition-colors duration-300 ease-in-out'>
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </Link>
                            <Link href="https://www.threads.net/@rastinrashidi1" target="_blank" className='hover:bg-white/20 p-2 rounded-lg transition-colors duration-300 ease-in-out'>
                                <FontAwesomeIcon icon={faThreads} size="lg" />
                            </Link>
                            <Link href="https://open.spotify.com/user/itz_rastin" target="_blank" className='hover:bg-white/20 p-2 rounded-lg transition-colors duration-300 ease-in-out'>
                                <FontAwesomeIcon icon={faSpotify} size="lg" />
                            </Link>
                        </div>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
            </div>

            {/* Logo - Centered on Small Screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <h1 className="text-green-800 text-2xl md:text-3xl font-bold">
                    <Link href='/'>smilewithease</Link>
                </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
                <Link href='/' className={`text-gray-600 text-sm px-4 py-2 rounded-xl hover:bg-gray-100/70 hover:backdrop-blur-md transition-colors duration-300 ease-in-out ${pathname == ("/") && "bg-gray-100/70 backdrop-blur-md"}`}>
                    Work
                </Link>
                <Link href='/about' className={`text-gray-600 text-sm px-4 py-2 rounded-xl hover:bg-gray-100/70 hover:backdrop-blur-md transition-colors duration-300 ease-in-out ${pathname == ("/about") && "bg-gray-100/70 backdrop-blur-md"}`}>
                    About
                </Link>
            </div>

            {/* Social Media Links (Visible on Desktop) */}
            <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
                <Link href='https://www.instagram.com/rastinrashidi1' target="_blank" className="text-gray-600 px-2 py-2 rounded-xl hover:bg-gray-100/70 hover:backdrop-blur-md transition-colors duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faInstagram} size="lg"/>
                </Link>
                <Link href='https://www.threads.net/@rastinrashidi1' target="_blank" className="text-gray-600 px-2 py-2 rounded-xl hover:bg-gray-100/70 hover:backdrop-blur-md transition-colors duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faThreads} size="lg" />
                </Link>
                <Link href='https://open.spotify.com/user/itz_rastin' target="_blank" className="text-gray-600 px-2 py-2 rounded-xl hover:bg-gray-100/70 hover:backdrop-blur-md transition-colors duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faSpotify} size="lg" />
                </Link>
            </div>
        </nav>
    );
}
