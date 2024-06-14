'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex flex-row items-center justify-between">
            <Link href="/">Home</Link>
            <nav>
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
            </nav>

            <nav>
                <button onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? 'Close' : 'Menu'}
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
