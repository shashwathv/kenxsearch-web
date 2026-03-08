import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'KenxSearch — Circle to Search for Linux',
  description:
    'Draw a circle around anything on your screen and search it instantly. Text, images, translations, shopping — one gesture, four modes.',
  keywords: ['linux', 'circle to search', 'screen search', 'google lens', 'desktop tool'],
  openGraph: {
    title: 'KenxSearch — Circle to Search for Linux',
    description: 'The Android Circle-to-Search experience, brought natively to Linux.',
    url: 'https://kenxsearch.vercel.app',
    siteName: 'KenxSearch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KenxSearch — Circle to Search for Linux',
    description: 'The Android Circle-to-Search experience, brought natively to Linux.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}