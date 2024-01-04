import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'


const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }   
]

const Navbar = () => {
    return (
        <nav>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <span href={"/"} className='text-5xl text-white font-semibold'>LOGO</span>

                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p=0 sm:flex-row space-x-8'>
                        {
                            navLinks.map((link, index) => (
                                <li key = {index}>
                                    <NavLink href={link.path} title = {link.title}></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar