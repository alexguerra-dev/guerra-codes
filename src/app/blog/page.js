import React from 'react'

import Header from '../ui/header'
import Footer from '../ui/footer'

const BlogPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <h1>My blog.</h1>
            </main>
            <Footer />
        </div>
    )
}

export default BlogPage
