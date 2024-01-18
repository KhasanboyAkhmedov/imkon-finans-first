"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () =>{
         setMenuOpen(!menuOpen)
    }
  return (
    <header className='flex items-center px-3 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>
        <div className="container mx-auto flex justify-between p-2 md:flex-row items-center ">
            <Link href={"/"}>
                <Image
                    src={'/logo.png'}
                    alt='logo' 
                    width={220}
                    height={40}/>
            </Link>
            
            <nav className="md:ml-auto md:mr-auto  hidden md:flex flex-wrap items-center text-base justify-center">
                <Link href={'/'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Home</Link>
                <Link href={'/vacancies'}className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>Vacancies +</Link>
                <Link href={'/about'} className='mr-5 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 '>About us</Link>
            </nav>
            <div onClick={handleNav} className='md:hidden cursor-pointer p-2 items-center justify-end border rounded-lg'>
                    {menuOpen ? <AiOutlineClose size={25}/> : <AiOutlineMenu  size={25}/> }
            </div>
            <div className='hidden md:flex flex-row items-center'>
                <AiOutlineInstagram size={30} className='cursor-pointer mx-[5px]'/>
                <AiOutlineFacebook size={30} className='cursor-pointer mx-[5px]'/>
                <AiOutlineTwitter size={30} className='cursor-pointer mx-[5px]'/>
            </div>
        </div>    

            {/* Mobile Navbar */}
        <div className={
            menuOpen ? 'fixed left-0 mt-[71.28px] top-0 w-[100%] md:hidden h-screen bg-[#ecf0f3] p-5 ease-in-out duration-500'
            : 'fixed mt-[71.28px] left-[-100%] top-0 ease-out duration-500'
        }>
            <nav className="flex flex-col py-4">
                <Link href={'/'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Home</Link>
                <Link href={'/vacancies'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>Vacancies <svg path='./down-arrow.svg'></svg></Link>
                <Link href={'/about'} onClick={() => setMenuOpen(!menuOpen)} className='py-4 uppercase hover:border-b-2 hover:border-red-900 hover:text-red-900 font-600'>About us</Link>
            </nav>
            <div className='flex flex-row justify-start pt-10  items-center'>
                <AiOutlineInstagram size={30} className='cursor-pointer mx-[5px]'/>
                <AiOutlineFacebook size={30} className='cursor-pointer mx-[5px]'/>
                <AiOutlineTwitter size={30} className='cursor-pointer mx-[5px]'/>
            </div>
        </div>
        
    </header>
  )
}

export default Navbar