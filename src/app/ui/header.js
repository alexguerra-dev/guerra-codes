'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex flex-row items-center justify-between sm:justify-around">
            <Link
                href="/"
                className="flex items-center 
                h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to gray-500
                rounded-tl-full rounded-br-full
                font-bold uppercase italic text-white
                hover:opacity-90 "
            >
                Home
            </Link>
            <nav className="hidden sm:flex flex-row justify-between items-center gap-4 font-semibold">
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

                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
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
