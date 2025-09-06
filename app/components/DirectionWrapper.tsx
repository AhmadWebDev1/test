'use client'

import { useLanguage } from '@/lib/languageContext'
import { useEffect } from 'react'

export default function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { locale, isRTL } = useLanguage()

  useEffect(() => {
    // Force update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
    document.body.style.direction = isRTL ? 'rtl' : 'ltr'
    
    // Add CSS class for additional styling
    document.body.className = document.body.className.replace(/\b(rtl-mode|ltr-mode)\b/g, '')
    document.body.classList.add(isRTL ? 'rtl-mode' : 'ltr-mode')
  }, [locale, isRTL])

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {children}
    </div>
  )
}
