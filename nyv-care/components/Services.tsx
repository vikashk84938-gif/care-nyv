import React from 'react';
import { HeartPulse, Stethoscope, Microscope, Baby, Activity, Brain } from 'lucide-react';
import { Language } from '../types';

interface ServicesProps {
  onConsult: (serviceName: string) => void;
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ onConsult, language }) => {
  const t = {
    en: {
      badge: "Our Expertise",
      title: "Comprehensive Care for Your Life",
      desc: "We bring together the best medical professionals and advanced technology to provide you with top-tier healthcare services.",
      consult: "Consult AI Assistant",
      services: {
        primary: { title: "Primary Care", desc: "Comprehensive general health services for individuals and families, focusing on prevention and wellness." },
        cardio: { title: "Cardiology", desc: "Expert heart care including diagnostics, treatment, and ongoing management of cardiovascular conditions." },
        peds: { title: "Pediatrics", desc: "Compassionate care for infants, children, and adolescents, ensuring healthy growth and development." },
        neuro: { title: "Neurology", desc: "Advanced diagnosis and treatment for disorders of the nervous system, brain, and spinal cord." },
        lab: { title: "Laboratory", desc: "State-of-the-art diagnostic testing with quick turnaround times to support accurate treatment plans." },
        emergency: { title: "Emergency", desc: "24/7 emergency services equipped to handle critical medical situations with speed and expertise." },
      }
    },
    hi: {
      badge: "हमारी विशेषज्ञता",
      title: "आपके जीवन के लिए व्यापक देखभाल",
      desc: "हम आपको शीर्ष स्तरीय स्वास्थ्य सेवाएँ प्रदान करने के लिए सर्वोत्तम चिकित्सा पेशेवरों और उन्नत तकनीक को एक साथ लाते हैं।",
      consult: "AI सहायक से परामर्श करें",
      services: {
        primary: { title: "प्राथमिक देखभाल", desc: "व्यक्तियों और परिवारों के लिए व्यापक सामान्य स्वास्थ्य सेवाएं, जो रोकथाम और कल्याण पर केंद्रित हैं।" },
        cardio: { title: "हृदय रोग", desc: "विशेषज्ञ हृदय देखभाल जिसमें निदान, उपचार और हृदय संबंधी स्थितियों का निरंतर प्रबंधन शामिल है।" },
        peds: { title: "बाल चिकित्सा", desc: "शिशुओं, बच्चों और किशोरों के लिए दयालु देखभाल, स्वस्थ विकास और विकास सुनिश्चित करना।" },
        neuro: { title: "तंत्रिका विज्ञान", desc: "तंत्रिका तंत्र, मस्तिष्क और रीढ़ की हड्डी के विकारों के लिए उन्नत निदान और उपचार।" },
        lab: { title: "प्रयोगशाला", desc: "सटीक उपचार योजनाओं का समर्थन करने के लिए त्वरित परिणामों के साथ अत्याधुनिक नैदानिक परीक्षण।" },
        emergency: { title: "आपातकालीन", desc: "24/7 आपातकालीन सेवाएँ जो गति और विशेषज्ञता के साथ गंभीर चिकित्सा स्थितियों को संभालने के लिए सुसज्जित हैं।" },
      }
    },
    de: {
      badge: "Unsere Expertise",
      title: "Umfassende Pflege für Ihr Leben",
      desc: "Wir bringen die besten medizinischen Fachkräfte und fortschrittliche Technologie zusammen, um Ihnen erstklassige Gesundheitsdienstleistungen zu bieten.",
      consult: "KI-Assistent konsultieren",
      services: {
        primary: { title: "Allgemeinmedizin", desc: "Umfassende allgemeine Gesundheitsdienste für Einzelpersonen und Familien mit Schwerpunkt auf Prävention." },
        cardio: { title: "Kardiologie", desc: "Experten-Herzpflege einschließlich Diagnostik, Behandlung und laufendem Management." },
        peds: { title: "Pädiatrie", desc: "Einfühlsame Pflege für Säuglinge, Kinder und Jugendliche für ein gesundes Wachstum." },
        neuro: { title: "Neurologie", desc: "Fortschrittliche Diagnose und Behandlung von Erkrankungen des Nervensystems und Gehirns." },
        lab: { title: "Labor", desc: "Modernste diagnostische Tests mit schnellen Durchlaufzeiten." },
        emergency: { title: "Notaufnahme", desc: "24/7 Notdienste, ausgestattet für kritische medizinische Situationen." },
      }
    },
    fr: {
      badge: "Notre Expertise",
      title: "Soins Complets Pour Votre Vie",
      desc: "Nous réunissons les meilleurs professionnels médicaux et une technologie de pointe pour vous fournir des services de santé de premier ordre.",
      consult: "Consulter l'Assistant IA",
      services: {
        primary: { title: "Soins Primaires", desc: "Services de santé générale complets pour les individus et les familles, axés sur la prévention." },
        cardio: { title: "Cardiologie", desc: "Soins cardiaques experts incluant diagnostic, traitement et gestion continue." },
        peds: { title: "Pédiatrie", desc: "Soins compatissants pour nourrissons, enfants et adolescents." },
        neuro: { title: "Neurologie", desc: "Diagnostic avancé et traitement des troubles du système nerveux." },
        lab: { title: "Laboratoire", desc: "Tests diagnostiques de pointe avec des délais d'exécution rapides." },
        emergency: { title: "Urgence", desc: "Services d'urgence 24/7 équipés pour gérer les situations médicales critiques." },
      }
    },
    zh: {
      badge: "我们的专长",
      title: "为您的一生提供全面护理",
      desc: "我们汇集了最好的医疗专业人员和先进技术，为您提供顶级的医疗保健服务。",
      consult: "咨询 AI 助手",
      services: {
        primary: { title: "初级保健", desc: "为个人和家庭提供全面的综合健康服务，重点是预防和健康。" },
        cardio: { title: "心脏病学", desc: "专家心脏护理，包括诊断、治疗和心血管疾病的持续管理。" },
        peds: { title: "儿科", desc: "为婴儿、儿童和青少年提供富有同情心的护理，确保健康成长和发育。" },
        neuro: { title: "神经内科", desc: "神经系统、大脑和脊髓疾病的高级诊断和治疗。" },
        lab: { title: "实验室", desc: "最先进的诊断测试，周转时间快，支持准确的治疗计划。" },
        emergency: { title: "急诊", desc: "配备齐全的 24/7 急诊服务，以速度和专业知识处理危急医疗情况。" },
      }
    }
  };

  const content = t[language];

  const services = [
    {
      Icon: Stethoscope,
      title: content.services.primary.title,
      description: content.services.primary.desc,
      color: 'bg-blue-600'
    },
    {
      Icon: HeartPulse,
      title: content.services.cardio.title,
      description: content.services.cardio.desc,
      color: 'bg-rose-600'
    },
    {
      Icon: Baby,
      title: content.services.peds.title,
      description: content.services.peds.desc,
      color: 'bg-yellow-600'
    },
    {
      Icon: Brain,
      title: content.services.neuro.title,
      description: content.services.neuro.desc,
      color: 'bg-purple-600'
    },
    {
      Icon: Microscope,
      title: content.services.lab.title,
      description: content.services.lab.desc,
      color: 'bg-emerald-600'
    },
    {
      Icon: Activity,
      title: content.services.emergency.title,
      description: content.services.emergency.desc,
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{content.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.title}</h3>
          <p className="text-lg text-slate-400">
            {content.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-green-600/50 hover:shadow-xl hover:shadow-green-900/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
              <button 
                onClick={() => onConsult(service.title)}
                className="inline-flex items-center text-primary font-medium mt-6 hover:text-green-400 focus:outline-none"
              >
                {content.consult} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;