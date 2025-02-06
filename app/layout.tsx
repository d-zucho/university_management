import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'

const ibmPlexSans = localFont({
  src: [
    {
      path: '/fonts/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-geist-sans',
})

const bebasNeue = localFont({
  src: [
    {
      path: '/fonts/BebasNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--bebas-neue',
})

export const metadata: Metadata = {
  title: 'Bookwise',
  description: 'The Best Borrowing University Library Management Solution',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`antialiased ${ibmPlexSans.className} ${bebasNeue.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
export default RootLayout
