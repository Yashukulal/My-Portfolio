import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yashaswini Kulal - Data Science Engineer',
  description: 'Data Science Engineer specializing in data engineering, machine learning, and analytics. Experienced with Snowflake, DBT, Python, and SQL.',
  generator: 'v0.app',
  keywords: ['Data Science', 'Data Engineer', 'Machine Learning', 'SQL', 'Python', 'Snowflake', 'DBT'],
  authors: [{ name: 'Yashaswini Kulal' }],
  creator: 'Yashaswini Kulal',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yashaswini-portfolio.com',
    title: 'Yashaswini Kulal - Data Science Engineer',
    description: 'Data Science Engineer specializing in data engineering, machine learning, and analytics.',
    siteName: 'Yashaswini Kulal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
