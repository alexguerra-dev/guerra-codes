import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

export const metadata = {
    title: 'guerra.codes',
    description: 'Personal Website of Alex Guerra',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="">{children}</body>
            {/* <SpeedInsights /> */}
            <Analytics />
        </html>
    )
}
