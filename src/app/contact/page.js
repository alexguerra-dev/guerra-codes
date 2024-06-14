import React from 'react'

import Header from '../ui/header'
import Footer from '../ui/footer'

export const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <h1>Contact</h1>
                <p>alexander.a.guerra@gmail.com</p>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage
