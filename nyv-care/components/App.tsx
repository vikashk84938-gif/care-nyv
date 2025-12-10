import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HealthBot from './components/HealthBot';
import MedicineScheduler from './components/MedicineScheduler';
import { Language } from './types';

const App: React.FC = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [initialBotMessage, setInitialBotMessage] = useState<string>('');
  const [language, setLanguage] = useState<Language>('en');

  const openBot = (message?: string) => {
    if (message) {
      setInitialBotMessage(message);
    }
    setIsBotOpen(true);
  };

  const closeBot = () => {
    setIsBotOpen(false);
    // Delay clearing the message slightly so it doesn't disappear during close animation
    setTimeout(() => setInitialBotMessage(''), 300);
  };

  const botMessages = {
    en: {
      book: "I'd like to book an appointment.",
      consult: (service: string) => `I would like to know more about ${service}.`,
      bookDoc: (doctor: string) => `I would like to book an appointment with ${doctor}.`
    },
    hi: {
      book: "मैं अपॉइंटमेंट बुक करना चाहता हूँ।",
      consult: (service: string) => `मैं ${service} के बारे में अधिक जानना चाहता हूँ।`,
      bookDoc: (doctor: string) => `मैं ${doctor} के साथ अपॉइंटमेंट बुक करना चाहता हूँ।`
    },
    de: {
      book: "Ich möchte einen Termin vereinbaren.",
      consult: (service: string) => `Ich möchte mehr über ${service} erfahren.`,
      bookDoc: (doctor: string) => `Ich möchte einen Termin bei ${doctor} buchen.`
    },
    fr: {
      book: "Je souhaite prendre rendez-vous.",
      consult: (service: string) => `Je souhaite en savoir plus sur ${service}.`,
      bookDoc: (doctor: string) => `Je souhaite prendre rendez-vous avec ${doctor}.`
    },
    zh: {
      book: "我想预约。",
      consult: (service: string) => `我想了解更多关于${service}的信息。`,
      bookDoc: (doctor: string) => `我想预约${doctor}。`
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar 
        onOpenBot={() => openBot()} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <main className="flex-grow">
        <Hero 
          onCtaClick={() => openBot(botMessages[language].book)} 
          language={language}
        />
        <Services 
          onConsult={(service) => openBot(botMessages[language].consult(service))} 
          language={language}
        />
        <Doctors 
          onBook={(doctor) => openBot(botMessages[language].bookDoc(doctor))} 
          language={language}
        />
        <MedicineScheduler language={language} />
        <Testimonials language={language} />
      </main>

      <Footer language={language} />

      {/* Floating AI Assistant */}
      <HealthBot 
        isOpen={isBotOpen} 
        onClose={closeBot} 
        initialMessage={initialBotMessage}
        onMessageProcessed={() => setInitialBotMessage('')}
        language={language}
      />
    </div>
  );
};

export default App;