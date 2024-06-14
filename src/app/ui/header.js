'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex flex-row items-center justify-between sm:justify-around bg-zinc-600">
            <Link
                href="/"
                className="flex items-center 
                h-10 px-10 bg-gradient-to-r from-gray-900 via-green-600 to gray-500
                rounded-tl-full rounded-br-full
                font-bold uppercase italic text-white
                hover:opacity-90 "
            >
                Home
            </Link>
            <nav className="hidden sm:flex flex-row justify-between items-center gap-4 font-semibold">
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/legal">Legal</Link>
            </nav>

            <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
                <button onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <GrClose /> : <GiHamburgerMenu />}
                </button>
                {showMenu && (
                    <ul>
                        <li>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header
