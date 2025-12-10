import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Heart, Activity } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  onCtaClick: () => void;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, language }) => {
  const t = {
    en: {
      badge: "Available 24/7 for you",
      titleLine1: "Healthcare that",
      titleLine2: "Puts You First",
      desc: "Experience modern medicine with a personal touch. From advanced diagnostics to holistic care, we are dedicated to your well-being every step of the way.",
      cta: "Book Appointment",
      services: "Our Services",
      verified: "Verified",
      doctors: "Expert Doctors",
      fast: "Fast",
      booking: "Quick Booking",
      caring: "Caring",
      focus: "Patient Focus",
      recovered: "Recovered Patients"
    },
    hi: {
      badge: "आपके लिए 24/7 उपलब्ध",
      titleLine1: "स्वास्थ्य सेवा जो",
      titleLine2: "आपको प्राथमिकता देती है",
      desc: "व्यक्तिगत स्पर्श के साथ आधुनिक चिकित्सा का अनुभव करें। उन्नत निदान से लेकर समग्र देखभाल तक, हम हर कदम पर आपकी भलाई के लिए समर्पित हैं।",
      cta: "अपॉइंटमेंट बुक करें",
      services: "हमारी सेवाएँ",
      verified: "सत्यापित",
      doctors: "विशेषज्ञ डॉक्टर",
      fast: "तेज़",
      booking: "त्वरित बुकिंग",
      caring: "देखभाल",
      focus: "रोगी पर ध्यान",
      recovered: "स्वस्थ हुए मरीज़"
    },
    de: {
      badge: "24/7 Für Sie Verfügbar",
      titleLine1: "Gesundheitswesen,",
      titleLine2: "Das Sie An Erste Stelle Setzt",
      desc: "Erleben Sie moderne Medizin mit einer persönlichen Note. Von fortschrittlicher Diagnostik bis hin zu ganzheitlicher Pflege widmen wir uns Ihrem Wohlbefinden bei jedem Schritt.",
      cta: "Termin Buchen",
      services: "Unsere Leistungen",
      verified: "Geprüft",
      doctors: "Expertenärzte",
      fast: "Schnell",
      booking: "Schnelle Buchung",
      caring: "Fürsorglich",
      focus: "Patientenfokus",
      recovered: "Genesene Patienten"
    },
    fr: {
      badge: "Disponible 24/7 Pour Vous",
      titleLine1: "Des Soins De Santé",
      titleLine2: "Qui Vous Mettent En Priorité",
      desc: "Découvrez la médecine moderne avec une touche personnelle. Des diagnostics avancés aux soins holistiques, nous nous consacrons à votre bien-être à chaque étape.",
      cta: "Prendre Rendez-vous",
      services: "Nos Services",
      verified: "Vérifié",
      doctors: "Médecins Experts",
      fast: "Rapide",
      booking: "Réservation Rapide",
      caring: "Attentionné",
      focus: "Priorité Patient",
      recovered: "Patients Rétablis"
    },
    zh: {
      badge: "24/7 为您服务",
      titleLine1: "以您为先的",
      titleLine2: "医疗保健",
      desc: "体验具有个人特色的现代医学。从先进的诊断到全面的护理，我们致力于每一步都为您提供福祉。",
      cta: "预约挂号",
      services: "我们的服务",
      verified: "已验证",
      doctors: "专家医生",
      fast: "快速",
      booking: "快速预约",
      caring: "关怀",
      focus: "患者至上",
      recovered: "康复患者"
    }
  };

  const content = t[language];

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-500/20 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-600/20 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-800 rounded-full px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">{content.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              {content.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                {content.titleLine2}
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              {content.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onCtaClick}
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-900/50 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {content.cta} <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#services"
                onClick={handleScrollToServices}
                className="bg-transparent text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 hover:border-primary hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              >
                {content.services}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>{content.verified}</span>
                </div>
                <p className="text-sm text-slate-500">{content.doctors}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{content.fast}</span>
                </div>
                <p className="text-sm text-slate-500">{content.booking}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>{content.caring}</span>
                </div>
                <p className="text-sm text-slate-500">{content.focus}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 group border border-slate-800">
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
                 alt="Doctor interacting with patient" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
               {/* Floating Card */}
               <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 animate-in slide-in-from-bottom-5 fade-in duration-1000">
                 <div className="flex items-center space-x-4">
                   <div className="h-12 w-12 rounded-full bg-green-900/50 flex items-center justify-center border border-green-800">
                     <Activity className="h-6 w-6 text-green-400" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-400">{content.recovered}</p>
                     <p className="text-2xl font-bold text-white">98.5%</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;