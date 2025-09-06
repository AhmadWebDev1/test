'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/languageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400"
        >
          © 2024 {t('heroTitle')}. {t('allRightsReserved')}. {t('footerDescription')}{' '}
          <i className="fal fa-heart text-red-500 animate-pulse"></i>
        </motion.p>
      </div>
    </footer>
  )
}