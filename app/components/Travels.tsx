'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { travels, getLocalizedContent } from '@/lib/data'
import { useLanguage } from '@/lib/languageContext'

export default function Travels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t, locale, isRTL } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Categories for filtering
  const categories = [
    { id: 'all', name: { ar: 'الكل', en: 'All', de: 'Alle' }, icon: 'globe' },
    { id: 'asia', name: { ar: 'آسيا', en: 'Asia', de: 'Asien' }, icon: 'torii-gate' },
    { id: 'europe', name: { ar: 'أوروبا', en: 'Europe', de: 'Europa' }, icon: 'landmark' },
    { id: 'americas', name: { ar: 'الأمريكتين', en: 'Americas', de: 'Amerika' }, icon: 'flag-usa' },
    { id: 'africa', name: { ar: 'أفريقيا', en: 'Africa', de: 'Afrika' }, icon: 'drumstick-bite' }
  ]

  // Enhanced travel data with additional info
  const enhancedTravels = travels.map(travel => ({
    ...travel,
    rating: 4.5 + Math.random() * 0.5,
    highlights: ['highlight1', 'highlight2', 'highlight3'],
    category: ['asia', 'europe', 'americas', 'africa'][Math.floor(Math.random() * 4)],
    season: ['spring', 'summer', 'fall', 'winter'][Math.floor(Math.random() * 4)],
    cost: ['$', '$$', '$$$'][Math.floor(Math.random() * 3)]
  }))

  // Filter travels based on selected category
  const filteredTravels = selectedCategory === 'all' 
    ? enhancedTravels 
    : enhancedTravels.filter(travel => travel.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section
      id="travels"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('travelsTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t('travelsDescription')}
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse mt-6 text-sm">
            <div className="flex items-center">
              <i className="fal fa-globe text-blue-500 mr-2 rtl:mr-0 rtl:ml-2"></i>
              <span className="text-gray-600 dark:text-gray-400">
                {enhancedTravels.length} {locale === 'ar' ? 'وجهة' : locale === 'de' ? 'Reiseziele' : 'Destinations'}
              </span>
            </div>
            <div className="flex items-center">
              <i className="fal fa-map-marked text-green-500 mr-2 rtl:mr-0 rtl:ml-2"></i>
              <span className="text-gray-600 dark:text-gray-400">
                25 {locale === 'ar' ? 'دولة' : locale === 'de' ? 'Länder' : 'Countries'}
              </span>
            </div>
            <div className="flex items-center">
              <i className="fal fa-route text-purple-500 mr-2 rtl:mr-0 rtl:ml-2"></i>
              <span className="text-gray-600 dark:text-gray-400">
                50,000 {locale === 'ar' ? 'كم' : 'km'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10 overflow-x-auto pb-2"
        >
          <div className="flex space-x-2 rtl:space-x-reverse bg-white dark:bg-gray-700 rounded-full p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <i className={`fal fa-${category.icon} text-sm`}></i>
                <span>{category.name[locale]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Travel Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTravels.map((travel, index) => (
            <motion.div
              key={travel.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(travel.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={travel.image}
                    alt={`${getLocalizedContent(travel.city, locale)}, ${getLocalizedContent(travel.country, locale)}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Featured Badge */}
                  {index < 3 && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <i className="fas fa-star mr-1"></i>
                      {locale === 'ar' ? 'مميز' : locale === 'de' ? 'Empfohlen' : 'Featured'}
                    </div>
                  )}
                  
                  {/* Cost Indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-gray-800 dark:text-white">
                    {travel.cost}
                  </div>
                  
                  {/* Quick View Button */}
                  <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                    <i className="fal fa-images text-gray-800 dark:text-white"></i>
                  </button>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {getLocalizedContent(travel.city, locale)}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {getLocalizedContent(travel.country, locale)}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-xs ${
                            i < Math.floor(travel.rating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      {travel.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {getLocalizedContent(travel.description, locale)}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      <i className="fal fa-sun mr-1"></i>
                      {locale === 'ar' ? 'صيف' : locale === 'de' ? 'Sommer' : 'Summer'}
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                      <i className="fal fa-camera mr-1"></i>
                      {locale === 'ar' ? 'تصوير' : locale === 'de' ? 'Fotografie' : 'Photography'}
                    </span>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <i className="fal fa-calendar mr-1"></i>
                      {getLocalizedContent(travel.date, locale)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <i className="fal fa-clock mr-1"></i>
                      {getLocalizedContent(travel.duration, locale)}
                    </div>
                  </div>
                </div>
                
                {/* Hover Action Bar */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-purple-600 p-4 transform transition-transform duration-300 ${
                  hoveredCard === travel.id ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <div className="flex justify-between items-center text-white">
                    <button className="flex items-center space-x-2 hover:scale-105 transition-transform">
                      <i className="fal fa-book-open"></i>
                      <span className="text-sm font-medium">
                        {locale === 'ar' ? 'اقرأ المزيد' : locale === 'de' ? 'Mehr lesen' : 'Read More'}
                      </span>
                    </button>
                    <div className="flex space-x-3">
                      <button className="hover:scale-110 transition-transform">
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button className="hover:scale-110 transition-transform">
                        <i className="fab fa-youtube"></i>
                      </button>
                      <button className="hover:scale-110 transition-transform">
                        <i className="fal fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="fal fa-plus-circle mr-2"></i>
            {locale === 'ar' ? 'عرض المزيد' : locale === 'de' ? 'Mehr anzeigen' : 'Show More'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}