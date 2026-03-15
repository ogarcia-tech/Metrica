import React, { useState } from 'react';
import { BookOpen, Download, ArrowRight, Lock, CheckCircle2, FileText, Zap } from 'lucide-react';

const resources = [
  {
    id: 1,
    tag: "GUÍA TÉCNICA",
    title: "El Manifiesto de la Reserva Directa 2026",
    desc: "Cómo recuperar un 25% de tu inventario de las OTAs usando agentes de IA de última generación.",
    type: "PDF · 12 Páginas",
    image: "https://picsum.photos/seed/manuscript/800/600",
    isPremium: true
  },
  {
    id: 2,
    tag: "FRAMEWORK",
    title: "Calculadora de Margen Real vs. Ocupación",
    desc: "La plantilla de Excel que usan los hoteles de lujo para medir la salud financiera de cada habitación.",
    type: "XLSX · Herramienta",
    image: "https://picsum.photos/seed/abacus/800/600",
    isPremium: true
  },
  {
    id: 3,
    tag: "CASE STUDY",
    title: "De 0 a 1M€ en Reservas Directas",
    desc: "Análisis técnico del despliegue en un Agroturismo de Mallorca y cómo la IA cerró ventas en 5 idiomas.",
    type: "Guía Interactiva",
    image: "https://picsum.photos/seed/castle/800/600",
    isPremium: false
  }
];

const Resources: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="recursos" className="w-full py-24 px-6 bg-brand-charcoal relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block border border-brand-cyan/30 bg-brand-cyan/5 px-3 py-1 rounded text-brand-cyan text-xs font-mono tracking-widest uppercase">
            Inteligencia Compartida
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-white tracking-tighter">
            GUÍAS Y <span className="text-brand-orange">RECURSOS</span> DE ÉLITE
          </h2>
          <p className="text-brand-white/60 max-w-2xl mx-auto text-lg">
            Documentación técnica y herramientas de ingeniería para hoteles que no se conforman con las sobras de las OTAs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {resources.map((res) => (
            <div key={res.id} className="group bg-brand-black border border-brand-border hover:border-brand-cyan transition-all duration-500 flex flex-col h-full overflow-hidden">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={res.image} 
                  alt={res.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md border border-brand-white/10 px-2 py-1 text-[10px] font-mono font-bold text-brand-cyan tracking-widest uppercase">
                  {res.tag}
                </div>
                {res.isPremium && (
                  <div className="absolute top-4 right-4 bg-brand-orange px-2 py-1 text-[10px] font-mono font-bold text-brand-black tracking-widest uppercase flex items-center gap-1">
                    <Lock size={10} /> PREMIUM
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-bold text-brand-white group-hover:text-brand-cyan transition-colors leading-tight">
                  {res.title}
                </h3>
                <p className="text-brand-white/50 text-sm leading-relaxed flex-grow">
                  {res.desc}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-brand-white/5">
                  <span className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest flex items-center gap-2">
                    <FileText size={12} className="text-brand-orange" /> {res.type}
                  </span>
                  <button className="text-brand-cyan hover:text-brand-orange transition-colors flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-tighter">
                    Acceder <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Magnet / Newsletter Section */}
        <div className="relative bg-brand-black border border-brand-orange/30 p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 text-brand-orange">
                <Zap size={24} className="animate-pulse" />
                <span className="font-mono text-sm font-bold tracking-widest uppercase">Acceso Prioritario al Gremio</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-brand-white leading-tight">
                Únete a los +500 hoteleros que ya están <span className="text-brand-cyan">automatizando su libertad</span>.
              </h3>
              <ul className="space-y-3">
                {['Reportes semanales de mercado emisor', 'Alertas de nuevas actualizaciones de IA', 'Invitaciones a webinars privados'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-brand-cyan" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              {isSuccess ? (
                <div className="bg-brand-cyan/10 border border-brand-cyan/30 p-8 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={48} className="text-brand-cyan mx-auto" />
                  <h4 className="text-2xl font-bold text-brand-white">¡Bienvenido al Gremio!</h4>
                  <p className="text-brand-white/60">Revisa tu bandeja de entrada. La primera guía técnica ya está en camino.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-brand-white/40 text-xs font-mono uppercase tracking-widest mb-2">Introduce tu email corporativo para desbloquear los recursos premium</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="email" 
                      required
                      placeholder="tu@hotel.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-brand-charcoal border border-brand-border px-6 py-4 text-brand-white focus:outline-none focus:border-brand-orange transition-colors font-mono"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-orange text-brand-black px-8 py-4 font-bold uppercase font-mono text-sm hover:bg-brand-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'PROCESANDO...' : 'DESBLOQUEAR AHORA'}
                      {!isSubmitting && <Download size={18} />}
                    </button>
                  </div>
                  <p className="text-[10px] text-brand-white/30 text-center md:text-left">
                    Respetamos tu privacidad. Sin spam, solo ingeniería de valor. Al suscribirte aceptas nuestra política de datos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
