'use client'
import Footer from '@/components/layout/footer'
import './globals.css'
import NavBar from '@/components/layout/navbar'
import { useEffect, useState } from 'react'
import Loading from '@/components/loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const init = async () => {
    setIsLoading(false)
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <html lang='ko'>
      <body className='font-regular'>
        {
          isLoading
          ?
          <>
            <Loading />
          </>
          :
          <>
            <NavBar />
            <div className='pt-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24'>{children}</div>
            <Footer />
          </>
        }
      </body>
    </html>
  )
}
