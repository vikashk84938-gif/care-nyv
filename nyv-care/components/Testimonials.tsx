import React, { useState } from 'react';
import { Star, Quote, MessageSquarePlus, X, Send, User } from 'lucide-react';
import { Testimonial, Language } from '../types';

const initialData: Testimonial[] = [
  {
    id: '1',
    name: "Alex Robinson",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The care I received at NYV Care was exceptional. The doctors took the time to listen to my concerns and explained everything clearly. I felt truly cared for.",
    rating: 5
  },
  {
    id: '2',
    name: "Maria Garcia",
    role: "Mother of two",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Booking an appointment for my kids was so easy with their AI assistant. The pediatric department is wonderful, warm, and very professional.",
    rating: 5
  },
  {
    id: '3',
    name: "Robert Chen",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=68",
    content: "State-of-the-art facilities and a very welcoming staff. I would highly recommend NYV Care to anyone looking for reliable healthcare.",
    rating: 4
  }
];

interface TestimonialsProps {
  language: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [reviews, setReviews] = useState<Testimonial[]>(initialData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: 5
  });
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const t = {
    en: {
      badge: "Testimonials",
      title: "What Our Patients Say",
      share: "Share Your Experience",
      close: "Close Feedback Form",
      write: "Write a Review",
      rate: "Rate your experience",
      nameLabel: "Your Name",
      feedbackLabel: "Your Feedback",
      placeholderName: "John Doe",
      placeholderFeedback: "Tell us about your visit...",
      submit: "Submit Review"
    },
    hi: {
      badge: "प्रशंसापत्र",
      title: "हमारे मरीज़ क्या कहते हैं",
      share: "अपना अनुभव साझा करें",
      close: "फीडबैक फॉर्म बंद करें",
      write: "समीक्षा लिखें",
      rate: "अपने अनुभव को रेट करें",
      nameLabel: "आपका नाम",
      feedbackLabel: "आपकी प्रतिक्रिया",
      placeholderName: "आपका नाम",
      placeholderFeedback: "हमें अपनी यात्रा के बारे में बताएं...",
      submit: "समीक्षा जमा करें"
    },
    de: {
      badge: "Bewertungen",
      title: "Was unsere Patienten sagen",
      share: "Teilen Sie Ihre Erfahrung",
      close: "Formular schließen",
      write: "Bewertung schreiben",
      rate: "Bewerten Sie Ihre Erfahrung",
      nameLabel: "Ihr Name",
      feedbackLabel: "Ihr Feedback",
      placeholderName: "Max Mustermann",
      placeholderFeedback: "Erzählen Sie uns von Ihrem Besuch...",
      submit: "Bewertung absenden"
    },
    fr: {
      badge: "Témoignages",
      title: "Ce que disent nos patients",
      share: "Partagez votre expérience",
      close: "Fermer le formulaire",
      write: "Écrire un avis",
      rate: "Évaluez votre expérience",
      nameLabel: "Votre Nom",
      feedbackLabel: "Votre Avis",
      placeholderName: "Jean Dupont",
      placeholderFeedback: "Parlez-nous de votre visite...",
      submit: "Soumettre l'avis"
    },
    zh: {
      badge: "推荐语",
      title: "我们的患者怎么说",
      share: "分享您的体验",
      close: "关闭反馈表",
      write: "写评论",
      rate: "评价您的体验",
      nameLabel: "您的名字",
      feedbackLabel: "您的反馈",
      placeholderName: "张三",
      placeholderFeedback: "告诉我们您的就诊经历...",
      submit: "提交评论"
    }
  };

  const content = t[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.content.trim()) return;

    const newReview: Testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      role: "Verified Visitor",
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&color=fff`,
      content: formData.content,
      rating: formData.rating
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', content: '', rating: 5 });
    setIsFormOpen(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-green-500/10 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{content.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.title}</h3>
          
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="inline-flex items-center space-x-2 text-primary font-medium hover:text-green-400 transition-colors bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-800"
          >
            {isFormOpen ? <X className="w-4 h-4" /> : <MessageSquarePlus className="w-4 h-4" />}
            <span>{isFormOpen ? content.close : content.share}</span>
          </button>
        </div>

        {/* Feedback Form */}
        {isFormOpen && (
          <div className="max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800">
              <h4 className="text-xl font-bold text-white mb-6 text-center">{content.write}</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Rating Input */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-sm font-medium text-slate-400">{content.rate}</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            star <= (hoveredStar || formData.rating) 
                              ? 'text-yellow-500 fill-yellow-500' 
                              : 'text-zinc-700'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">{content.nameLabel}</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white placeholder-slate-500"
                      placeholder={content.placeholderName}
                    />
                  </div>
                </div>

                {/* Content Input */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-slate-300 mb-1">{content.feedbackLabel}</label>
                  <textarea
                    id="content"
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none text-white placeholder-slate-500"
                    placeholder={content.placeholderFeedback}
                  />
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center space-x-2 shadow-lg shadow-green-900/40"
                  >
                    <span>{content.submit}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div key={item.id} className="bg-zinc-900 p-8 rounded-2xl relative hover:shadow-lg hover:shadow-green-900/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-800 flex flex-col">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-zinc-800" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-8 italic relative z-10 text-lg leading-relaxed flex-grow">"{item.content}"</p>

              <div className="flex items-center space-x-4 pt-4 border-t border-zinc-800">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 shadow-md bg-zinc-700"
                />
                <div>
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;