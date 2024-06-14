import Link from 'next/link.js'
import Image from 'next/image.js'

import Header from './ui/header.js'
import Navbar from './ui/navbar.js'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>

            <main className="flex-grow">
                <h1>Hello, World!</h1>
                <Image
                    src="/images/profile/woman.avif"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                />
                <p>
                    “One Ring to rule them all, One Ring to find them, One Ring
                    to bring them all and in the darkness bind them.”
                </p>
                <Link href="/people">
                    <a>People</a> {/* This is a link to the People page */}{' '}
                </Link>

                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="sm:flex sm:items-center px-6 py-4">
                        <Image
                            width={100}
                            height={100}
                            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                            src="/images/profile/woman.avif"
                            alt="Profile Picture"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                            <p className="text-xl font-semibold text-gray-800">
                                John Doe
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                                Frontend Developer
                            </p>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed cursus ante dapibus diam.
                                Sed nisi nulla, lacinia ac nunc a, tincidunt
                                tincidunt mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-auto pt-6 bg-green-400">
                <p>© 2021 Alex Guerra</p>
            </footer>
        </div>
    )
}
