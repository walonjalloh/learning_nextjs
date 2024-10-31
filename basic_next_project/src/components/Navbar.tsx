'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Search from './Search'
 
export default function Navbar(){
    const [isOpended, setIsOpended]  = useState<boolean>(false)

    const handleMobileMenu = () => {
        setIsOpended(!isOpended)
    }
    return(
        <header className='sticky top-2 z-50 my-2 mx-4'>
            <nav className='flex flex-row justify-between items-center '>
                <div>
                    <Link href='/'><p className='font-extrabold text-3xl text-blue-500'>Wiki-Rocket🚀</p></Link>
                </div>
                <div className='hidden md:flex'>
                    <Search/>
                </div>
              
                <div className='md:hidden'>
                    <Menu onClick={handleMobileMenu}/>
                </div>
            </nav>
            {isOpended && (
                <div className='flex flex-col md:hidden mt-2 items-center justify-center'>
                    <Search/>
                </div>
            )}
        </header>
    )
}