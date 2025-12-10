import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';

interface HealthBotProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  onMessageProcessed: () => void;
  language: Language;
}

const HealthBot: React.FC<HealthBotProps> = ({ isOpen, onClose, initialMessage, onMessageProcessed, language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasProcessedInitial = useRef(false);

  const t = {
    en: {
      initial: 'Hello! I am NYV AI. How can I assist you with your health questions or appointment booking today?',
      noteLabel: 'Note:',
      note: 'I am an AI assistant, not a doctor. Please consult a professional for medical advice.',
      placeholder: 'Type your health question...',
      error: "I'm having trouble connecting right now. Please try again later.",
      typing: 'Typing...',
      powered: 'Powered by Gemini 2.5 Flash. Not for emergencies.'
    },
    hi: {
      initial: 'नमस्ते! मैं NYV AI हूँ। मैं आज आपके स्वास्थ्य संबंधी प्रश्नों या अपॉइंटमेंट बुकिंग में आपकी कैसे सहायता कर सकता हूँ?',
      noteLabel: 'नोट:',
      note: 'मैं एक AI सहायक हूँ, डॉक्टर नहीं। कृपया चिकित्सा सलाह के लिए किसी पेशेवर से परामर्श लें।',
      placeholder: 'अपना स्वास्थ्य प्रश्न टाइप करें...',
      error: "मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।",
      typing: 'टाइप कर रहा है...',
      powered: 'Gemini 2.5 Flash द्वारा संचालित। आपात स्थिति के लिए नहीं।'
    },
    de: {
      initial: 'Hallo! Ich bin NYV AI. Wie kann ich Ihnen heute bei Gesundheitsfragen oder Terminbuchungen helfen?',
      noteLabel: 'Hinweis:',
      note: 'Ich bin ein KI-Assistent, kein Arzt. Bitte konsultieren Sie bei medizinischen Fragen einen Fachmann.',
      placeholder: 'Stellen Sie Ihre Gesundheitsfrage...',
      error: "Ich habe Verbindungsprobleme. Bitte versuchen Sie es später erneut.",
      typing: 'Schreibt...',
      powered: 'Angetrieben von Gemini 2.5 Flash. Nicht für Notfälle.'
    },
    fr: {
      initial: "Bonjour! Je suis NYV AI. Comment puis-je vous aider aujourd'hui pour vos questions de santé ou la prise de rendez-vous ?",
      noteLabel: 'Note:',
      note: 'Je suis un assistant IA, pas un médecin. Veuillez consulter un professionnel pour des conseils médicaux.',
      placeholder: 'Tapez votre question de santé...',
      error: "J'ai du mal à me connecter pour le moment. Veuillez réessayer plus tard.",
      typing: 'Écrit...',
      powered: 'Propulsé par Gemini 2.5 Flash. Pas pour les urgences.'
    },
    zh: {
      initial: '你好！我是 NYV AI。今天我能为您解答健康问题或协助预约挂号吗？',
      noteLabel: '注意:',
      note: '我是 AI 助手，不是医生。请咨询专业人士以获取医疗建议。',
      placeholder: '输入您的健康问题...',
      error: "我现在无法连接。请稍后再试。",
      typing: '输入中...',
      powered: '由 Gemini 2.5 Flash 提供支持。不适用于紧急情况。'
    }
  };

  const content = t[language];

  // Set initial message on mount or language change if empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: content.initial }]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Handle initial automated message
  useEffect(() => {
    if (isOpen && initialMessage && !hasProcessedInitial.current) {
      hasProcessedInitial.current = true;
      handleSend(initialMessage);
      onMessageProcessed();
    }
    
    // Reset the ref when closed so it can run again if re-opened with a message
    if (!isOpen) {
      hasProcessedInitial.current = false;
    }
  }, [isOpen, initialMessage]);

  const handleSend = async (textToSend: string = input) => {
    const userMessage = textToSend.trim();
    if (!userMessage || isLoading) return;

    // Only clear input if it was typed by user
    if (textToSend === input) {
      setInput('');
    }

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Append language instruction to the prompt context if needed
      let promptSuffix = "";
      if (language === 'hi') promptSuffix = " (Please reply in Hindi)";
      else if (language === 'de') promptSuffix = " (Please reply in German)";
      else if (language === 'fr') promptSuffix = " (Please reply in French)";
      else if (language === 'zh') promptSuffix = " (Please reply in Chinese)";

      const response = await sendMessageToGemini(userMessage + promptSuffix);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: content.error, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full md:w-[400px] h-[600px] max-h-[90vh] flex flex-col shadow-2xl rounded-t-2xl md:rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 animate-in slide-in-from-bottom-10 fade-in duration-300">
      
      {/* Header */}
      <div className="bg-primary p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">NYV AI</h3>
            <p className="text-xs text-green-100 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
        <div className="p-3 bg-green-900/20 border border-green-800 rounded-lg text-xs text-green-400 mb-4">
          <strong>{content.noteLabel}</strong> {content.note}
        </div>
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-2`}>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-zinc-700' : 'bg-primary'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-300" /> : <Bot className="w-5 h-5 text-white" />}
              </div>

              <div className={`p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-zinc-800 text-white rounded-tr-none border border-zinc-700' 
                  : 'bg-zinc-800 border border-zinc-700 text-slate-200 rounded-tl-none shadow-sm'
              } ${msg.isError ? 'bg-red-900/20 text-red-400 border-red-900/50' : ''}`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 p-3 rounded-2xl rounded-tl-none shadow-sm">
               <Loader2 className="w-4 h-4 text-primary animate-spin" />
               <span className="text-xs text-slate-400">{content.typing}</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={content.placeholder}
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-slate-500"
            disabled={isLoading}
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="bg-primary text-white p-2.5 rounded-full hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-500 mt-2">
          {content.powered}
        </p>
      </div>
    </div>
  );
};

export default HealthBot;