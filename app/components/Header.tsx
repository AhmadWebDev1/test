'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { travelerData } from '@/lib/data'
import { useLanguage } from '@/lib/languageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setIsScrolled(scrollTop > 50)
      setScrollProgress(scrollPercent)
      
      const sections = ['home', 'about', 'map-section', 'gallery', 'contact']
      const scrollPosition = scrollTop + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', id: 'home', label: t('home'), icon: 'home' },
    { href: '#about', id: 'about', label: t('about'), icon: 'user' },
    { href: '#map-section', id: 'map-section', label: t('travelMap'), icon: 'globe' },
    { href: '#gallery', id: 'gallery', label: t('gallery'), icon: 'camera' },
    { href: '#contact', id: 'contact', label: t('contact'), icon: 'envelope' },
  ]

  const socialLinks = [
    { href: travelerData.social.instagram, icon: 'fab fa-instagram', name: 'Instagram' },
    { href: travelerData.social.twitter, icon: 'fab fa-twitter', name: 'Twitter' },
    { href: travelerData.social.facebook, icon: 'fab fa-facebook', name: 'Facebook' },
    { href: travelerData.social.youtube, icon: 'fab fa-youtube', name: 'YouTube' },
    { href: travelerData.social.tiktok, icon: 'fab fa-tiktok', name: 'TikTok' },
    { href: travelerData.social.whatsapp, icon: 'fab fa-whatsapp', name: 'WhatsApp' },
  ]

  if (!mounted) return null

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-[60] bg-gray-200 dark:bg-gray-800">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md' 
          : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link 
              href="#home" 
              className="flex items-center space-x-2 rtl:space-x-reverse hover:opacity-80 transition-opacity"
            >
              <div className="bg-blue-600 text-white p-2 rounded-lg ml-2 rtl:ml-0 rtl:mr-2">
                <i className="fal fa-compass text-lg"></i>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {t('home1')}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <i className={`fal fa-${link.icon} mr-2 rtl:mr-0 rtl:ml-2`}></i>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              
              {/* Language Switcher - Desktop Only */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <i className="fas fa-sun text-amber-500 text-lg"></i>
                ) : (
                  <i className="fas fa-moon text-gray-700 text-lg"></i>
                )}
              </button>

              {/* Social Links - Desktop Only */}
              <div className="hidden xl:flex items-center space-x-2 rtl:space-x-reverse px-3 border-l rtl:border-r border-gray-200 dark:border-gray-700">
                {socialLinks.slice(0, 5).map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-4 space-y-1">
              
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <i className={`fal fa-${link.icon} mr-3 rtl:mr-0 rtl:ml-3 w-5`}></i>
                  <span className="font-medium">{link.label}</span>
                  {activeSection === link.id && (
                    <i className={`fal fa-check ml-auto rtl:mr-auto text-green-500`}></i>
                  )}
                </Link>
              ))}
              
              {/* Language Switcher - Mobile */}
              <div className="py-3 border-t border-gray-200 dark:border-gray-700">
                <LanguageSwitcher />
              </div>
              
              {/* Social Links - Mobile */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="px-4 pb-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('followMe')}
                </p>
                <div className="flex justify-around">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}