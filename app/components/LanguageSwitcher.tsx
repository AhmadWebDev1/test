'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { Locale } from '@/lib/translations';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'ar' as Locale, name: 'العربية', flag: '🇸🇦' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
    { code: 'de' as Locale, name: 'Deutsch', flag: '🇩🇪' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors ml-2 rtl:ml-0 rtl:mr-2"
      >
        <span>{languages.find(l => l.code === locale)?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">
          {languages.find(l => l.code === locale)?.name}
        </span>
        <i className={`fas fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 left-0 rtl:left-auto rtl:right-0">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                locale === lang.code ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
              {locale === lang.code && (
                <i className="fas fa-check text-blue-600 ml-auto rtl:mr-auto"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;