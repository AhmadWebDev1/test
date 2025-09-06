'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { travelerData } from '@/lib/data'
import { useLanguage } from '@/lib/languageContext'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t, locale, isRTL } = useLanguage()

  const contactMethods = [
    {
      icon: 'fal fa-envelope',
      title: t('contactEmail'),
      value: travelerData[locale].email,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: `mailto:${travelerData[locale].email}`
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'واتساب',
      value: travelerData[locale].phone,
      color: 'bg-green-600 hover:bg-green-700',
      href: travelerData.social.whatsapp
    },
    {
      icon: 'fab fa-instagram',
      title: 'إنستغرام',
      value: '@ahmed_traveler',
      color: 'bg-purple-600 hover:bg-purple-700',
      href: travelerData.social.instagram
    }
  ]

  const socialPlatforms = [
    { href: travelerData.social.twitter, icon: 'fab fa-twitter', label: 'تويتر', color: 'bg-blue-600 hover:bg-blue-700' },
    { href: travelerData.social.facebook, icon: 'fab fa-facebook', label: 'فيسبوك', color: 'bg-blue-800 hover:bg-blue-900' },
    { href: travelerData.social.youtube, icon: 'fab fa-youtube', label: 'يوتيوب', color: 'bg-red-600 hover:bg-red-700' }
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            <i className="fal fa-envelope text-blue-400 mr-2 rtl:mr-0 rtl:ml-2"></i>
            {t('contactTitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-12 text-gray-300 text-center"
          >
            {t('contactDescription')}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center transform hover:scale-105 transition-transform duration-300 block"
              >
                <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300`}>
                  <i className={`${method.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-300 hover:text-white transition-colors duration-300">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6 rtl:space-x-reverse"
          >
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className={`${platform.color} text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <i className={`${platform.icon} mr-2 rtl:mr-0 rtl:ml-2`}></i>{platform.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}