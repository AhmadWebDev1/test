'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useInstagram } from '@/lib/hooks/useInstagram'
import { useLanguage } from '@/lib/languageContext'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { data, loading, error } = useInstagram()
  const { t, isRTL } = useLanguage()

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          <i className="fal fa-camera text-blue-600 dark:text-blue-400 mr-2 rtl:mr-0 rtl:ml-2"></i> {t('galleryTitle')}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data && data.posts && data.posts.slice(0, 12).map((post: any, index: number) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg relative cursor-pointer">
                <img
                  src={post.url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={`https://instagram.com/${data?.profile?.username || 'ahmad.al.khatib565'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <i className="fas fa-external-link-alt mr-2 rtl:mr-0 rtl:ml-2"></i>
            {t('viewMore')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}