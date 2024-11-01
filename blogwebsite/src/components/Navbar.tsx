'use client'


import Link from "next/link"
import { FaWhatsapp, FaTwitter, FaGithub,FaLaptop } from "react-icons/fa"
import { Menu } from 'lucide-react'
import { useState } from "react"


export default function Navbar(){
    const [isOpened, setIsOpened] = useState<boolean>(false)

    const handdleMobileMenu = ():void => {
        setIsOpened(!isOpened)
    }
    return(
        <header className="bg-slate-600 sticky top-0 p-2 z-50 mx-auto drop-shadow-2xl">
            <nav>
                <div className=" flex justify-between items-center flex-row">
                    <Link href='/' className="no-underline"><p className="text-black/90 hover:text-black ">
                        Walon-Jalloh
                    </p></Link>
                    <div className="md:flex  items-center gap-2 hidden">
                        <FaWhatsapp/>
                        <FaTwitter/>
                        <FaGithub/>
                        <FaLaptop/>
                    </div>
                    <div className="md:hidden">
                        <Menu onClick={handdleMobileMenu}/>
                    </div>
                </div>
            </nav>
            {isOpened && (
                <div className="md:hidden flex flex-row items-center justify-center gap-2 ">
                    <FaWhatsapp className="h-10 w-10"/>
                        <FaTwitter className="h-10 w-10"/>
                        <FaGithub  className="h-10 w-10"/>
                        <FaLaptop  className="h-10 w-10"/>
                </div>
            )}
        </header>
    )
}