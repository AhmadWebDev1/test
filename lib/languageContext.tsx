'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, getTranslation } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['ar', 'en', 'de'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLocale('ar');
      } else if (browserLang === 'de') {
        setLocale('de');
      } else {
        setLocale('en');
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale);
      // Update document attributes
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale, mounted]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const t = (key: string): string => {
    return getTranslation(key, locale);
  };

  const value: LanguageContextType = {
    locale,
    setLocale: handleSetLocale,
    t,
    isRTL: locale === 'ar',
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
