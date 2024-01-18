import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SEO from '@/seo/seo'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imkon Finans',
  description: 'Mikrokredit moliya tashkiloti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
          color='red'
          initialPosition={0.08}
          height={2}
          crawlSpeed={200}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </html>
  )
}
