import React from 'react';
import { Award } from 'lucide-react';

const TrustBar: React.FC = () => {
  const partners = ['N8N', 'MAKE', 'OPENAI', 'HUBSPOT', 'SHOPIFY'];
  // Duplicamos el array para lograr el efecto de scroll infinito sin cortes
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-brand-charcoal border-y border-brand-border py-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Metric (Fixed on Left) */}
        <div className="flex items-center gap-3 min-w-max border-r border-brand-border pr-8 md:pr-12 z-10 bg-brand-charcoal py-2">
           <Award className="text-brand-orange" size={24} />
           <div className="flex flex-col">
             <span className="text-2xl font-bold text-brand-white leading-none">5 AÑOS</span>
             <span className="text-[10px] text-brand-white/50 uppercase tracking-widest">Transformando negocios con IA</span>
           </div>
        </div>

        {/* Infinite Marquee Logos */}
        <div className="flex-1 overflow-hidden relative w-full mask-linear-fade">
          {/* Gradient Masks for smooth fade out at edges */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-brand-charcoal to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-brand-charcoal to-transparent z-10"></div>
          
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {marqueePartners.map((partner, index) => (
               <div key={index} className="mx-8 md:mx-12 flex items-center">
                 <span className="text-xl font-black text-brand-white tracking-tighter hover:text-brand-cyan cursor-default opacity-40 hover:opacity-100 transition-all duration-300">
                   {partner}_
                 </span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;