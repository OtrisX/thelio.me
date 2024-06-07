"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Nav = ({
        isOpen,
        toggleMenu,
}: {
        isOpen: boolean;
        toggleMenu: () => void;
}) => {
        const navClasses = `${isOpen ? "absolute top-8 pt-8 left-0 w-full bg-background" : "hidden lg:flex lg:static lg:w-auto lg:bg-transparent lg:pt-0"}`;

        const ulClasses = `${isOpen ? "flex flex-col space-y-2" : "hidden lg:flex lg:flex-row lg:space-y-0 lg:gap-4"}`;

        const navLinks = [
                { href: "#home", text: "Home" },
                { href: "#projects", text: "Projetos" },
                { href: "#experience", text: "Experiência" },
                { href: "#contact", text: "Contato" },
        ];

        return (
                <nav className={navClasses}>
                        <ul className={ulClasses}>
                                {navLinks.map(({ href, text }) => (
                                        <li key={href} className="pl-4 lg:pl-0">
                                                <a href={href} onClick={toggleMenu}>
                                                        {text}
                                                </a>
                                        </li>
                                ))}
                        </ul>
                </nav>
        );
};

export const Header = () => {

        const [isOpen, setOpen] = useState(false)

        const toggleMenu = () => {
                setOpen(!isOpen)
        }



        return (
                <header className=' bg-background '>
                        <div className='text-white flex items-center justify-between px-4 py-2 font-jakart max-w-5xl mx-auto'>
                                <h1 className='font-bold font-sans'>Thélio</h1>
                                <button onClick={toggleMenu} className='lg:hidden'>
                                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                                <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
                        </div>
                </header>
        )
}
