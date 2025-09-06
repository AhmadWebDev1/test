'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { stats, travelerData, getLocalizedContent } from '@/lib/data'
import { useLanguage } from '@/lib/languageContext'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const { t, locale, isRTL } = useLanguage()
  const fullText = travelerData[locale].name

  useEffect(() => {
    let index = 0
    setTypedText('')
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${travelerData.images.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center text-white px-4 z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src={travelerData.images.picture}
            alt={t('heroTitle')}
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {typedText}
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 opacity-90"
        >
          {travelerData[locale].title}
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto"
        >
          {t('heroDescription')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`flex justify-center space-x-6 rtl:space-x-reverse mb-8`}
        >
          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-3xl font-bold"
              >
                {stat.value}{stat.suffix || ''}
              </motion.div>
              <div className="text-sm opacity-80">{getLocalizedContent(stat.label, locale)}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center`}
        >
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <i className={`fal fa-arrow-down mr-2 rtl:mr-0 rtl:ml-2`}></i>
            {t('exploreJourney')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}