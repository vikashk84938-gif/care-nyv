import React, { useState } from 'react';
import { Plus, Trash2, Sun, Moon, Sunset, Coffee, Pill, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface Medicine {
  id: string;
  name: string;
  time: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  instruction: 'Before Food' | 'After Food' | 'Empty Stomach';
}

interface Props {
  language: Language;
}

const MedicineScheduler: React.FC<Props> = ({ language }) => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: '1', name: 'Multivitamin', time: 'Morning', instruction: 'After Food' },
    { id: '2', name: 'Calcium Supplement', time: 'Night', instruction: 'After Food' }
  ]);
  const [newName, setNewName] = useState('');
  const [newTime, setNewTime] = useState<'Morning' | 'Afternoon' | 'Evening' | 'Night'>('Morning');
  const [newInstruction, setNewInstruction] = useState<'Before Food' | 'After Food' | 'Empty Stomach'>('After Food');

  const t = {
    en: {
      badge: "Health Tools",
      title: "Daily Medicine Scheduler",
      desc: "Never miss a dose. Organize your daily medication schedule and keep track of what to take and when.",
      add: "Add Medicine",
      nameLabel: "Medicine Name",
      placeholder: "e.g. Paracetamol",
      timeLabel: "Best Time to Take",
      instrLabel: "Instructions",
      addButton: "Add to Schedule",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      night: "Night",
      beforeFood: "Before Food",
      afterFood: "After Food",
      emptyStomach: "Empty Stomach",
      meds: "Meds",
      noMeds: "No medicines scheduled"
    },
    hi: {
      badge: "स्वास्थ्य उपकरण",
      title: "दैनिक दवा अनुसूची",
      desc: "कभी भी खुराक न चूकें। अपनी दैनिक दवा अनुसूची व्यवस्थित करें और ट्रैक रखें कि क्या और कब लेना है।",
      add: "दवा जोड़ें",
      nameLabel: "दवा का नाम",
      placeholder: "जैसे पेरासिटामोल",
      timeLabel: "लेने का सबसे अच्छा समय",
      instrLabel: "निर्देश",
      addButton: "अनुसूची में जोड़ें",
      morning: "सुबह",
      afternoon: "दोपहर",
      evening: "शाम",
      night: "रात",
      beforeFood: "खाने से पहले",
      afterFood: "खाने के बाद",
      emptyStomach: "खाली पेट",
      meds: "दवाएं",
      noMeds: "कोई दवा निर्धारित नहीं है"
    },
    de: {
      badge: "Gesundheits-Tools",
      title: "Medikamentenplaner",
      desc: "Verpassen Sie nie eine Dosis. Organisieren Sie Ihren täglichen Medikamentenplan.",
      add: "Medikament hinzufügen",
      nameLabel: "Medikamentenname",
      placeholder: "z.B. Paracetamol",
      timeLabel: "Beste Einnahmezeit",
      instrLabel: "Anweisungen",
      addButton: "Zum Plan hinzufügen",
      morning: "Morgen",
      afternoon: "Nachmittag",
      evening: "Abend",
      night: "Nacht",
      beforeFood: "Vor dem Essen",
      afterFood: "Nach dem Essen",
      emptyStomach: "Auf nüchternen Magen",
      meds: "Medis",
      noMeds: "Keine Medikamente geplant"
    },
    fr: {
      badge: "Outils de Santé",
      title: "Planificateur de Médicaments",
      desc: "Ne manquez jamais une dose. Organisez votre calendrier de médicaments quotidien.",
      add: "Ajouter un Médicament",
      nameLabel: "Nom du Médicament",
      placeholder: "ex: Paracétamol",
      timeLabel: "Meilleur moment pour prendre",
      instrLabel: "Instructions",
      addButton: "Ajouter au Calendrier",
      morning: "Matin",
      afternoon: "Après-midi",
      evening: "Soir",
      night: "Nuit",
      beforeFood: "Avant le repas",
      afterFood: "Après le repas",
      emptyStomach: "À jeun",
      meds: "Médicaments",
      noMeds: "Aucun médicament prévu"
    },
    zh: {
      badge: "健康工具",
      title: "每日药物追踪",
      desc: "绝不错的每一剂。安排您的日常用药计划，追踪服用内容和时间。",
      add: "添加药物",
      nameLabel: "药名",
      placeholder: "例如：扑热息痛",
      timeLabel: "最佳服用时间",
      instrLabel: "说明",
      addButton: "添加到时间表",
      morning: "早上",
      afternoon: "下午",
      evening: "晚上",
      night: "夜间",
      beforeFood: "饭前",
      afterFood: "饭后",
      emptyStomach: "空腹",
      meds: "药物",
      noMeds: "未安排药物"
    }
  };

  const content = t[language];

  const addMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    const newItem: Medicine = {
      id: Date.now().toString(),
      name: newName,
      time: newTime,
      instruction: newInstruction
    };
    setMedicines([...medicines, newItem]);
    setNewName('');
  };

  const removeMedicine = (id: string) => {
    setMedicines(medicines.filter(m => m.id !== id));
  };

  const timeSlots = [
    { label: 'Morning', display: content.morning, icon: Sun, color: 'text-green-400', bg: 'bg-zinc-800', timeRange: '6:00 AM - 11:00 AM' },
    { label: 'Afternoon', display: content.afternoon, icon: Coffee, color: 'text-green-500', bg: 'bg-zinc-800', timeRange: '12:00 PM - 4:00 PM' },
    { label: 'Evening', display: content.evening, icon: Sunset, color: 'text-green-600', bg: 'bg-zinc-800', timeRange: '5:00 PM - 8:00 PM' },
    { label: 'Night', display: content.night, icon: Moon, color: 'text-green-700', bg: 'bg-zinc-800', timeRange: '9:00 PM - 11:00 PM' },
  ];

  return (
    <section id="medicine-tracker" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/10 -skew-x-12 opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-3">{content.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.title}</h3>
          <p className="text-lg text-slate-400">
            {content.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800 p-6 md:p-8 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-900/30 p-2 rounded-lg border border-green-900/50">
                  <Pill className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white">{content.add}</h4>
              </div>

              <form onSubmit={addMedicine} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{content.nameLabel}</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder={content.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-700 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-zinc-800 text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{content.timeLabel}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.label}
                        type="button"
                        onClick={() => setNewTime(slot.label as any)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all flex items-center justify-center gap-2 ${
                          newTime === slot.label
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-zinc-800 text-slate-300 border-zinc-700 hover:border-green-500/50 hover:bg-zinc-700'
                        }`}
                      >
                         <slot.icon className="w-4 h-4" />
                         {slot.display}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{content.instrLabel}</label>
                  <select
                    value={newInstruction}
                    onChange={(e) => setNewInstruction(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-700 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-zinc-800 text-white appearance-none cursor-pointer"
                  >
                    <option value="After Food">{content.afterFood}</option>
                    <option value="Before Food">{content.beforeFood}</option>
                    <option value="Empty Stomach">{content.emptyStomach}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!newName.trim()}
                  className="w-full bg-green-600 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-green-900/40 hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-5 h-5" />
                  {content.addButton}
                </button>
              </form>
            </div>
          </div>

          {/* Display Section */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {timeSlots.map((slot) => {
                const slotMedicines = medicines.filter(m => m.time === slot.label);
                
                return (
                  <div key={slot.label} className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:shadow-lg hover:shadow-green-900/10 transition-shadow duration-300">
                    <div className={`${slot.bg} p-4 border-b border-zinc-700 flex justify-between items-center`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg shadow-sm ${slot.color}`}>
                          <slot.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-white">{slot.display}</h5>
                          <span className="text-xs text-green-400 font-medium">{slot.timeRange}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-zinc-900 px-2 py-1 rounded-md text-green-400 border border-zinc-700">
                        {slotMedicines.length} {content.meds}
                      </span>
                    </div>

                    <div className="p-4 min-h-[160px]">
                      {slotMedicines.length > 0 ? (
                        <div className="space-y-3">
                          {slotMedicines.map((med) => (
                            <div key={med.id} className="flex items-center justify-between group bg-zinc-800/50 p-3 rounded-xl hover:bg-zinc-800 hover:shadow-md border border-transparent hover:border-zinc-700 transition-all">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div>
                                  <p className="font-semibold text-white text-sm">{med.name}</p>
                                  <p className="text-xs text-slate-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {med.instruction}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => removeMedicine(med.id)}
                                className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Remove medicine"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-700 py-6">
                          <CheckCircle2 className="w-8 h-8 mb-2 opacity-50" />
                          <p className="text-sm">{content.noMeds}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineScheduler;