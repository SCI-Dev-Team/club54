'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { setSiteLanguage, useSiteLanguage } from '@/app/lib/useSiteLanguage';

const NAV_LABELS = {
  en: { menu: 'Overview', events: 'Events', community: 'Community', book: 'Contact' },
  km: {
    menu: 'សង្ខេប',
    events: 'ព្រឹត្តិការណ៍',
    community: 'សហគមន៍',
    book: 'ទំនាក់ទំនង',
  },
} as const;

function LanguageToggle() {
  const lang = useSiteLanguage();
  return (
    <div
      className="flex items-center rounded-lg border border-white/25 bg-white/5 p-0.5 text-sm font-medium"
      role="group"
      aria-label="Site language"
    >
      <button
        type="button"
        onClick={() => setSiteLanguage('en')}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          lang === 'en' ? 'bg-white text-black' : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setSiteLanguage('km')}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          lang === 'km' ? 'bg-white text-black' : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={lang === 'km'}
      >
        ខ្មែរ
      </button>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useSiteLanguage();
  const t = NAV_LABELS[lang];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/white-logo.png" 
              alt="Club54" 
              width={120} 
              height={60}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/#overview" className="text-white hover:text-red transition-colors font-medium">
              {t.menu}
            </Link>
            <Link href="/events" className="text-white hover:text-red transition-colors font-medium">
              {t.events}
            </Link>
            <Link href="/community" className="text-white hover:text-red transition-colors font-medium">
              {t.community}
            </Link>
            <LanguageToggle />
            <Link href="/contact" className="bg-red text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-red transition-colors font-medium shrink-0">
              {t.book}
            </Link>
          </div>

          {/* Mobile: language + menu */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#overview"
                className="text-white hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.menu}
              </Link>
              <Link
                href="/events"
                className="text-white hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.events}
              </Link>
              <Link
                href="/community"
                className="text-white hover:text-red transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.community}
              </Link>
              <Link
                href="/contact"
                className="bg-red text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-red transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.book}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
