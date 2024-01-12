import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Image from 'next/legacy/image'
import DarkBG from '../assets/DarkBG.svg'
import Dark_BG from '../assets/Dark_BG.png'
import { CSSProperties } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatPrep',
  description: 'Ace the Current Affairs: Daily Curated Quizzes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen font-metropolis">
          {/* <div className="absolute inset-0 z-0"> */}
            <Image
              src={DarkBG} // Adjust the path to your SVG file
              layout="fill"
              objectFit="cover" // or 'contain' based on your preference
              alt="Background"
              className='z-0'
            />
          {/* </div> */}
          <div className="relative z-10 w-full min-h-screen">
            <NavBar/>
            {children}
          </div>
        </div>
      </body>
    </html>
    
  )
}
