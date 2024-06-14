import React from 'react'

import Header from '../ui/header'
import Footer from '../ui/footer'

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow container mx-auto">
                <h1 className="text-4xl pb-4">About Me</h1>
                <p>
                    Hi, I'm Alex Guerra, a passionate software developer with a
                    focus on frontend technologies. I grew up in the vibrant
                    city of San Antonio, Texas, and earned my degree in
                    Mechanical Engineering from the Massachusetts Institute of
                    Technology (MIT) in Cambridge, Massachusetts. My journey
                    through the world of engineering sparked a deep passion for
                    making things, and eventually led me to the exciting field
                    of software development.
                </p>

                <h2 className="text-2xl pt-4 pb-2">My Expertise</h2>
                <p>
                    I specialize in frontend development, bringing designs to
                    life with clean, efficient code. My toolkit includes:
                </p>

                <ul>
                    <li>React: Building dynamic, responsive interfaces.</li>
                    <li>
                        JavaScript: Crafting interactive and engaging user
                        experiences.
                    </li>
                    <li>Node.js: Developing robust backend services.</li>
                    <li>Git: Version control and collaborative development.</li>
                    <li>Python: Scripting and automating tasks.</li>
                    <li>
                        Linux: Leveraging the power of open-source operating
                        systems.
                    </li>
                </ul>

                <h2 className="text-2xl pt-4 pb-2">Hobbies and Interests</h2>
                <p>
                    When I'm not coding, you'll often find me immersed in the
                    world of music. I have a deep love for music production,
                    DJing, and sound design. Creating unique sounds and
                    exploring new musical landscapes is a true passion of mine.
                </p>

                <h2 className="text-2xl pt-4 pb-2">Meet Ada</h2>
                <p>
                    I'd be remiss if I didn't mention Ada, my loyal and lovable
                    dog. She's a very good girl and a constant source of joy in
                    my life.
                </p>
            </main>

            <Footer></Footer>
        </div>
    )
}

export default AboutPage
