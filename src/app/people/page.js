import React from 'react'

import Header from '../ui/header'
import Footer from '../ui/footer'

const PeoplePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <h1>People</h1>

                <ul>
                    <li>Teresa</li>
                    <li>Dad</li>
                    <li>Ada</li>
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default PeoplePage
