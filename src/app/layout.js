import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
    title: 'guerra.codes',
    description: 'Personal Website of Alex Guerra',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Analytics />
        </html>
    )
}
