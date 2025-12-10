import React, { useState } from 'react';
import { Language } from '../types';

interface DoctorsProps {
  onBook: (doctorName: string) => void;
  language: Language;
}

const allDoctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Chief Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    specialty: "Cardiology"
  },
  {
    name: "Dr. Anjali Desai",
    role: "Senior Neurologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    specialty: "Neurology"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Head of Pediatrics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    specialty: "Pediatrics"
  },
  {
    name: "Dr. Priya Patel",
    role: "General Practitioner",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400",
    specialty: "Primary Care"
  },
  {
    name: "Dr. Arjun Kumar",
    role: "Dermatologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    specialty: "Dermatology"
  },
  {
    name: "Dr. Meera Reddy",
    role: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1651008325506-71d380891f19?auto=format&fit=crop&q=80&w=400",
    specialty: "Orthopedics"
  },
  {
    name: "Dr. Sanjay Gupta",
    role: "Psychiatrist",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400",
    specialty: "Psychiatry"
  },
  {
    name: "Dr. Neha Verma",
    role: "Ophthalmologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    specialty: "Ophthalmology"
  }
];

const Doctors: React.FC<DoctorsProps> = ({ onBook, language }) => {
  const [showAll, setShowAll] = useState(false);
  
  const t = {
    en: {
      badge: "Our Team",
      title: "Meet Our Specialists",
      desc: "Our doctors are leaders in their fields, dedicated to providing compassionate and personalized care to every patient.",
      showLess: "Show Less",
      viewAll: "View All Doctors",
      available: "Available Today",
      book: "Book Now"
    },
    hi: {
      badge: "हमारी टीम",
      title: "हमारे विशेषज्ञों से मिलें",
      desc: "हमारे डॉक्टर अपने क्षेत्रों में अग्रणी हैं, जो हर रोगी को दयालु और व्यक्तिगत देखभाल प्रदान करने के लिए समर्पित हैं।",
      showLess: "कम दिखाएं",
      viewAll: "सभी डॉक्टर देखें",
      available: "आज उपलब्ध",
      book: "अभी बुक करें"
    },
    de: {
      badge: "Unser Team",
      title: "Treffen Sie unsere Spezialisten",
      desc: "Unsere Ärzte sind führend auf ihrem Gebiet und widmen sich der einfühlsamen und persönlichen Betreuung jedes Patienten.",
      showLess: "Weniger anzeigen",
      viewAll: "Alle Ärzte anzeigen",
      available: "Heute verfügbar",
      book: "Jetzt buchen"
    },
    fr: {
      badge: "Notre Équipe",
      title: "Rencontrez Nos Spécialistes",
      desc: "Nos médecins sont des leaders dans leurs domaines, dédiés à fournir des soins compatissants et personnalisés à chaque patient.",
      showLess: "Montrer Moins",
      viewAll: "Voir Tous Les Médecins",
      available: "Disponible Aujourd'hui",
      book: "Réserver"
    },
    zh: {
      badge: "我们的团队",
      title: "认识我们的专家",
      desc: "我们的医生是各自领域的领导者，致力于为每一位患者提供富有同情心和个性化的护理。",
      showLess: "收起",
      viewAll: "查看所有医生",
      available: "今日可用",
      book: "立即预约"
    }
  };

  const content = t[language];
  const displayedDoctors = showAll ? allDoctors : allDoctors.slice(0, 4);

  return (
    <section id="doctors" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{content.badge}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.title}</h3>
            <p className="text-lg text-slate-400">
              {content.desc}
            </p>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-transparent border border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap min-w-[140px]"
          >
            {showAll ? content.showLess : content.viewAll}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedDoctors.map((doctor, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-green-900/10 transition-all duration-300 group flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards border border-zinc-800" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="aspect-[4/5] overflow-hidden bg-zinc-800 relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=random`;
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-primary text-sm font-semibold mb-1">{doctor.specialty}</p>
                <h4 className="text-lg font-bold text-white mb-1">{doctor.name}</h4>
                <p className="text-slate-400 text-sm mb-4">{doctor.role}</p>
                
                <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">
                  <span className="text-xs text-slate-500">{content.available}</span>
                  <button 
                    onClick={() => onBook(doctor.name)}
                    className="text-sm font-medium text-slate-300 hover:text-primary transition-colors z-10 relative bg-zinc-800 px-3 py-1.5 rounded-md hover:bg-zinc-700"
                  >
                    {content.book}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;