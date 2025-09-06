import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from '@/lib/languageContext'

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'رحلاتي حول العالم - البروفايل الشخصي',
  description: 'موقع شخصي يعرض رحلاتي ومغامراتي حول العالم',
  keywords: 'سفر, رحلات, مغامرات, سياحة, استكشاف',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={cairo.variable}  suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v7.0.1/css/pro.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
        />
      </head>
      <body className="font-cairo">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}