'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { travels, stats, getLocalizedContent } from '@/lib/data'
import { useLanguage } from '@/lib/languageContext'

export default function TravelMap() {
  const ref = useRef(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [map, setMap] = useState<any>(null)
  const { locale, t, isRTL } = useLanguage()

  useEffect(() => {
    if (isInView && mapRef.current && !map) {
      import('leaflet').then((L) => {
        const mapInstance = L.map(mapRef.current!).setView([25, 10], 2)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(mapInstance)

        const customIcon = L.divIcon({
          html: '<i class="fas fa-map-marker-alt text-red-500 text-2xl"></i>',
          iconSize: [30, 30],
          className: 'custom-div-icon'
        })

        const markers: any[] = []
        travels.forEach((location, index) => {
          setTimeout(() => {
            const marker = L.marker([location.lat, location.lng], {
              icon: customIcon
            }).addTo(mapInstance)

            const popupContent = `
              <div style="text-align: ${isRTL ? 'right' : 'left'}; direction: ${isRTL ? 'rtl' : 'ltr'}; font-family: ${isRTL ? 'Cairo, sans-serif' : 'system-ui, sans-serif'};">
                <img src="${location.image}" alt="${getLocalizedContent(location.city, locale)}" style="width: 100%; border-radius: 8px; margin-bottom: 8px;">
                <h4 style="font-weight: bold; margin: 8px 0; font-size: 16px;">${getLocalizedContent(location.city, locale)}, ${getLocalizedContent(location.country, locale)}</h4>
                <p style="color: #666; font-size: 14px; margin: 4px 0;">
                  <i class="far fa-calendar" style="margin-${isRTL ? 'left' : 'right'}: 5px;"></i> ${getLocalizedContent(location.date, locale)}
                </p>
              </div>
            `

            marker.bindPopup(popupContent, { maxWidth: 200 })
            markers.push(marker)
          }, index * 100)
        })

        setTimeout(() => {
          const latlngs = travels.map(loc => [loc.lat, loc.lng] as [number, number])
          L.polyline(latlngs, {
            color: '#3B82F6',
            weight: 2,
            opacity: 0.5,
            dashArray: '5, 10'
          }).addTo(mapInstance)

          if (markers.length > 0) {
            const group = L.featureGroup(markers)
            mapInstance.fitBounds(group.getBounds().pad(0.1))
          }
        }, travels.length * 100)

        setMap(mapInstance)
      })
    }
  }, [isInView, map])

  return (
    <section
      id="map-section"
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
          <i className="fal fa-globe-americas text-blue-600 dark:text-blue-400 mr-2 rtl:mr-0 rtl:ml-2"></i>
          {t('travelMap')}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <i className={`fal fa-${stat.icon} text-3xl text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300`}></i>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}{stat.suffix || ''}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{getLocalizedContent(stat.label, locale)}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-2"
        >
          <div
            ref={mapRef}
            className="h-96 md:h-[500px] rounded-lg"
            style={{ zIndex: 1 }}
          />
        </motion.div>

        {/* Map Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
            <i className="fal fa-map-signs text-blue-600 dark:text-blue-400 mr-2 rtl:mr-0 rtl:ml-2"></i>
            {t('mapLegend')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center hover:scale-110 transition-transform duration-300 bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-2">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3 shadow-sm"></span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('visitedCities')}</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-300 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3 shadow-sm"></span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('currentCity')}</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-300 bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-2">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3 animate-pulse shadow-sm"></span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('nextDestination')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}