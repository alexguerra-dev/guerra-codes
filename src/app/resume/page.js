import React from 'react'

import Header from '../ui/header'
import Footer from '../ui/footer'

const ResumePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <h1>ResumePage</h1>
                {/* Contact information */}
                <p>Alexander A Guerra</p>
                <h2>Education</h2>
                <h2>Work Experience</h2>
            </main>
            <Footer />
        </div>
    )
}

export default ResumePage
