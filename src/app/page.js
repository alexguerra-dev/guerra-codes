import Link from 'next/link'
import Image from 'next/image'

import Header from './ui/header'
import Footer from './ui/footer'
import Navbar from './ui/navbar'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow container mx-auto">
                <p>
                    “One Ring to rule them all, One Ring to find them, One Ring
                    to bring them all and in the darkness bind them.”
                </p>
                <Link href="/people">People</Link>

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

                <Link
                    href="/about"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    About
                </Link>

                <Link
                    href="/contact"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Contact
                </Link>
            </main>
            <Footer />
        </div>
    )
}
