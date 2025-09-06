'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/languageContext'
import { travelerData } from '@/lib/data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t, locale, isRTL } = useLanguage()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            <i
              className={`fal fa-user-circle text-blue-600 dark:text-blue-400 mr-2 rtl:mr-0 rtl:ml-2`}
            ></i>
            {t("aboutTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={travelerData.images.about}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rtl:md:order-1 ltr:md:order-2 text-start"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {t("aboutTitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t("aboutDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}