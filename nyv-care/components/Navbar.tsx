import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, HeartPulse, Phone, Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  onOpenBot: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBot, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const t = {
    en: {
      home: 'Home',
      services: 'Services',
      doctors: 'Doctors',
      tracker: 'Medicine Tracker',
      testimonials: 'Testimonials',
      bot: 'Talk to AI Assistant'
    },
    hi: {
      home: 'होम',
      services: 'सेवाएँ',
      doctors: 'डॉक्टर्स',
      tracker: 'दवा ट्रैकर',
      testimonials: 'प्रशंसापत्र',
      bot: 'AI सहायक से बात करें'
    },
    de: {
      home: 'Startseite',
      services: 'Leistungen',
      doctors: 'Ärzte',
      tracker: 'Medikamente',
      testimonials: 'Bewertungen',
      bot: 'KI-Assistent'
    },
    fr: {
      home: 'Accueil',
      services: 'Services',
      doctors: 'Docteurs',
      tracker: 'Médicaments',
      testimonials: 'Avis',
      bot: 'Assistant IA'
    },
    zh: {
      home: '首页',
      services: '服务',
      doctors: '医生',
      tracker: '药物追踪',
      testimonials: '评价',
      bot: 'AI 助手'
    }
  };

  const navLinks = [
    { name: t[language].home, href: '#' },
    { name: t[language].services, href: '#services' },
    { name: t[language].doctors, href: '#doctors' },
    { name: t[language].tracker, href: '#medicine-tracker' },
    { name: t[language].testimonials, href: '#testimonials' },
  ];

  const languages: { code: Language; name: string; native: string }[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'de', name: 'German', native: 'Deutsch' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'zh', name: 'Chinese', native: '中文' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md shadow-green-900/10 py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-gradient-to-br from-primary to-emerald-600 p-2.5 rounded-xl shadow-lg shadow-primary/25">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              NYV<span className="text-primary">Care</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-primary font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white px-3 py-2 rounded-full border border-zinc-700 hover:border-primary transition-all bg-zinc-900/50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-zinc-950/50">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-zinc-800 transition-colors ${
                        language === lang.code ? 'text-primary bg-primary/5' : 'text-slate-300'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-xs text-slate-500">{lang.native}</span>
                      </div>
                      {language === lang.code && <Check className="w-4 h-4 text-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenBot}
              className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg shadow-green-900/50 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t[language].bot}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 absolute top-full left-0 w-full shadow-lg border-t border-zinc-800 h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-zinc-800 hover:text-primary rounded-md"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="border-t border-zinc-800 pt-4 mt-2 mb-2">
              <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Language / भाषा</p>
              <div className="grid grid-cols-2 gap-3 px-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      language === lang.code 
                        ? 'border-primary text-primary bg-primary/10' 
                        : 'border-zinc-700 text-slate-400 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <span>{lang.native}</span>
                    {language === lang.code && <Check className="w-3 h-3" />}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBot();
              }}
              className="w-full mt-4 bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
               <Phone className="w-5 h-5" />
               <span>{t[language].bot}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;