import { Inter } from 'next/font/google'
import "../saas/main.scss"
import Header from"./_components/Layout/Header"
import Footer from './_components/Layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jaliyadda somalida istanbul',
  description: 'jaliyadda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Toaster />
       <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
