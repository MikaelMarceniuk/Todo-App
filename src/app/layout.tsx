import type { Metadata, NextPage } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
}

interface IProps {
  children: React.ReactNode
}

const RootLayout: NextPage<IProps> = ({ children }) => {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon-32x32.png"
        sizes="any"
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
