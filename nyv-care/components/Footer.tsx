import React from 'react';
import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = {
    en: {
      desc: "Providing world-class healthcare with a personal touch. Your health is our priority, today and everyday.",
      links: "Quick Links",
      about: "About Us",
      services: "Our Services",
      findDoc: "Find a Doctor",
      book: "Book Appointment",
      portal: "Patient Portal",
      depts: "Departments",
      cardio: "Cardiology",
      neuro: "Neurology",
      peds: "Pediatrics",
      ortho: "Orthopedics",
      derma: "Dermatology",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    hi: {
      desc: "एक व्यक्तिगत स्पर्श के साथ विश्व स्तरीय स्वास्थ्य सेवा प्रदान करना। आपका स्वास्थ्य हमारी प्राथमिकता है, आज और हर दिन।",
      links: "त्वरित लिंक",
      about: "हमारे बारे में",
      services: "हमारी सेवाएँ",
      findDoc: "डॉक्टर खोजें",
      book: "अपॉइंटमेंट बुक करें",
      portal: "रोगी पोर्टल",
      depts: "विभाग",
      cardio: "हृदय रोग",
      neuro: "तंत्रिका विज्ञान",
      peds: "बाल चिकित्सा",
      ortho: "हड्डी रोग",
      derma: "त्वचा रोग",
      contact: "संपर्क करें",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें"
    },
    de: {
      desc: "Weltklasse-Gesundheitsversorgung mit persönlicher Note. Ihre Gesundheit ist unsere Priorität.",
      links: "Schnelllinks",
      about: "Über Uns",
      services: "Unsere Leistungen",
      findDoc: "Arzt Finden",
      book: "Termin Buchen",
      portal: "Patientenportal",
      depts: "Abteilungen",
      cardio: "Kardiologie",
      neuro: "Neurologie",
      peds: "Pädiatrie",
      ortho: "Orthopädie",
      derma: "Dermatologie",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "AGB"
    },
    fr: {
      desc: "Fournir des soins de santé de classe mondiale avec une touche personnelle. Votre santé est notre priorité.",
      links: "Liens Rapides",
      about: "À Propos",
      services: "Nos Services",
      findDoc: "Trouver un Médecin",
      book: "Prendre Rendez-vous",
      portal: "Portail Patient",
      depts: "Départements",
      cardio: "Cardiologie",
      neuro: "Neurologie",
      peds: "Pédiatrie",
      ortho: "Orthopédie",
      derma: "Dermatologie",
      contact: "Contactez-nous",
      privacy: "Confidentialité",
      terms: "Conditions"
    },
    zh: {
      desc: "以个人风格提供世界级的医疗保健服务。您的健康是我们的首要任务。",
      links: "快速链接",
      about: "关于我们",
      services: "我们的服务",
      findDoc: "查找医生",
      book: "预约挂号",
      portal: "患者门户",
      depts: "科室",
      cardio: "心脏病学",
      neuro: "神经内科",
      peds: "儿科",
      ortho: "骨科",
      derma: "皮肤科",
      contact: "联系我们",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  };

  const content = t[language];

  return (
    <footer className="bg-black text-slate-300 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-white">NYV<span className="text-primary">Care</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {content.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{content.links}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">{content.about}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{content.services}</a></li>
              <li><a href="#doctors" className="hover:text-primary transition-colors">{content.findDoc}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.book}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.portal}</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{content.depts}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">{content.cardio}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.neuro}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.peds}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.ortho}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{content.derma}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{content.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Patna, 800001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>8294644190</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>nishantyadavmdp@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} NYV Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{content.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{content.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;