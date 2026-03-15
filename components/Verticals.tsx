
import React, { useState } from 'react';
import { Hotel, Ship, Home, ChevronRight, Loader2, Layers } from 'lucide-react';

const verticals = [
  {
    id: 'hotel',
    title: 'Alojamientos Premium',
    subtitle: 'Hoteles & Agroturismos',
    icon: <Hotel />,
    desc: 'Para hoteles boutique y agroturismos que quieren dejar de pagar comisiones abusivas. Implementamos arquitectura de reserva directa, agentes de IA multilingües y fidelización automatizada.',
    tags: ['PMS Integration', 'Direct Booking', 'Margen Neto']
  },
  {
    id: 'exp',
    title: 'Experiencias de Lujo',
    subtitle: 'Yates & Actividades',
    icon: <Ship />,
    desc: 'Automatización real para empresas de charter y experiencias exclusivas. Desde la captación del lead internacional hasta la reserva y el upselling, todo orquestado por sistemas.',
    tags: ['Charter Funnels', 'IA Sales', 'High Ticket']
  },
  {
    id: 'real',
    title: 'Real Estate Turístico',
    subtitle: 'Villas & Inversión',
    icon: <Home />,
    desc: 'Para inmobiliarias de lujo en Baleares. Creamos un flujo constante de leads cualificados (HNI) para que tu equipo solo hable con quien está listo para invertir.',
    tags: ['Lead Gen IA', 'HNI Targeting', 'CRM Automation']
  }
];

const Verticals: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  return (
    <section id="versiones" className="w-full py-24 px-6 bg-brand-charcoal border-b border-brand-border relative overflow-hidden scroll-mt-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Connecting the Narrative */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-cyan/10 text-brand-cyan font-mono text-xs tracking-widest uppercase mb-4">
             <Layers size={14} /> Paso 1: Configuración de Arquitectura
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6 uppercase tracking-tighter hover-glow-brand cursor-default transition-all">
            No todo vale para todos. <br/>
            Elige tu <span className="text-brand-orange">Protocolo</span>
          </h2>
          <p className="text-brand-white/60 font-mono text-sm max-w-xl mx-auto">
            Las agencias genéricas fallan porque usan la misma estrategia para todo. Nosotros desplegamos una infraestructura dedicada a tu modelo de negocio.
          </p>
        </div>

        {/* Vertical Tabs Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Selectors Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {verticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`text-left p-6 border transition-all duration-300 group relative overflow-hidden rounded-sm ${
                  activeTab === v.id 
                    ? 'bg-brand-black border-brand-orange shadow-soft-glow' 
                    : 'bg-brand-black/30 border-brand-border hover:border-brand-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${activeTab === v.id ? 'text-brand-orange' : 'text-brand-white/50'}`}>
                    {v.subtitle}
                  </span>
                  {activeTab === v.id && <ChevronRight size={16} className="text-brand-orange" />}
                </div>
                <h3 className={`text-xl font-bold relative z-10 transition-colors ${activeTab === v.id ? 'text-brand-white' : 'text-brand-white/70 group-hover:text-brand-white'}`}>
                  {v.title}
                </h3>
                {/* Active Background Glow */}
                {activeTab === v.id && (
                  <div className="absolute inset-0 bg-brand-orange/5 z-0"></div>
                )}
              </button>
            ))}
            
            {/* Future Version Placeholder */}
            <div className="p-6 border border-brand-border border-dashed rounded bg-brand-charcoal/30 flex items-center justify-between opacity-40 cursor-not-allowed select-none">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-white/30">Cargando v4.0...</span>
                <h3 className="text-xl font-bold text-brand-white/30 blur-[1px]">Enterprise IA</h3>
              </div>
              <Loader2 className="animate-spin text-brand-white/30" size={20} />
            </div>
          </div>

          {/* Content Display Column */}
          <div className="md:col-span-8">
            {verticals.map((v) => (
               activeTab === v.id && (
                 <div key={v.id} className="h-full bg-brand-black border border-brand-border p-8 md:p-12 flex flex-col animate-in fade-in slide-in-from-right-8 duration-500 relative rounded-sm shadow-card">
                   
                   {/* Giant Background Icon */}
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none text-brand-white">
                     {React.cloneElement(v.icon as React.ReactElement<any>, { size: 200, strokeWidth: 1 })}
                   </div>

                   <div className="mb-6 relative z-10">
                     <div className="w-16 h-16 bg-brand-charcoal border border-brand-orange/50 rounded flex items-center justify-center mb-6 text-brand-orange shadow-soft-glow">
                       {React.cloneElement(v.icon as React.ReactElement<any>, { size: 32 })}
                     </div>
                     <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">{v.title}</h3>
                     <p className="text-lg text-brand-white/70 leading-relaxed mb-8 max-w-lg">
                       {v.desc}
                     </p>
                   </div>

                   <div className="mt-auto relative z-10">
                     <div className="flex flex-wrap gap-2 mb-8">
                       {v.tags.map(tag => (
                         <span key={tag} className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/20">
                           {tag}
                         </span>
                       ))}
                     </div>
                     
                     <a href="#cta-final" className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider hover:text-brand-white transition-colors group text-sm md:text-base">
                       Desplegar esta Arquitectura <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </a>
                   </div>
                 </div>
               )
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Verticals;
