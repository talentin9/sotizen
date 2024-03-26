import Footer from '@/components/layout/footer'
import './globals.css'
import NavBar from '@/components/layout/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className='font-regular'>
        <NavBar />
        <div className='pt-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
