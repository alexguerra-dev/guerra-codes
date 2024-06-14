import React from 'react'

import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Guerra Codes</h1>
                <ul className="flex">
                    <li className="ml-4">
                        <Link href="/resume" className="p-2">
                            Resume
                        </Link>
                    </li>
                    <li className="ml-4">
                        <Link href="/projects" className="p-2">
                            Projects
                        </Link>
                    </li>

                    <li className="ml-4">
                        <Link href="/blog" className="p-2">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
