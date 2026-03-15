import React from 'react';
import { Terminal, Zap, TrendingUp, Cpu, Crown, Sword, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('cta-final');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 pt-12 pb-20 overflow-hidden bg-brand-black scroll-mt-32 border-b border-brand-border/50">

      {/* Electronic Heraldry Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
           

           <h1 className="text-5xl md:text-7xl font-black text-brand-white leading-[0.9] tracking-tighter animate-in slide-in-from-bottom-6 fade-in duration-1000 delay-100">
             LA NUEVA <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-red-500 to-brand-orange bg-300% animate-gradient">NOBLEZA TURÍSTICA</span>
           </h1>

           <p className="text-lg md:text-xl text-brand-white/70 max-w-xl leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">
             Deja de alquilar clientes a las OTAs. Construye tu propia <strong className="text-brand-white">máquina autónoma de reservas directas</strong> para tu hotel o empresa de experiencias. <br/>
             <span className="text-brand-cyan">Más margen, menos comisiones.</span>
           </p>

           <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300">
             <a 
               href="#cta-final" 
               onClick={scrollToCta}
               className="group relative px-8 py-4 bg-brand-orange text-brand-black font-bold uppercase tracking-widest clip-path-tech hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
             >
               <Sword size={18} className="group-hover:rotate-45 transition-transform" />
               Auditoría de Reservas Directas
             </a>
             <a 
               href="#metodologia"
               className="px-8 py-4 border border-brand-white/20 text-brand-white font-mono text-sm uppercase tracking-widest hover:border-brand-cyan hover:text-brand-cyan transition-colors flex items-center justify-center gap-2 bg-brand-black/50 backdrop-blur-sm"
             >
               <Cpu size={16} />
               Ver Protocolos
             </a>
           </div>

        </div>

        {/* Right Column: Visual Artifact */}
        <div className="relative flex justify-center items-center h-[400px] lg:h-[600px] animate-in zoom-in-50 duration-1000 delay-300">
           <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-brand-border/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-brand-cyan/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-t-brand-cyan"></div>
              <div className="absolute inset-16 border border-brand-orange/20 rounded-full animate-[spin_20s_linear_infinite] border-b-brand-orange"></div>

              {/* Center Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 bg-brand-charcoal border border-brand-white/10 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.15)] backdrop-blur-md z-10 group overflow-hidden">
                   
                   {/* Inner Hologram Effect */}
                   <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay"></div>
                   <div className="absolute w-full h-[2px] bg-brand-cyan/50 top-0 animate-scan-fast opacity-50"></div>

                   <Crown size={64} className="text-brand-white group-hover:text-brand-orange transition-colors duration-500 relative z-10" strokeWidth={1} />
                   
                   <div className="absolute bottom-10 text-[10px] text-brand-cyan font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     Margen Real
                   </div>
                </div>
              </div>

              {/* Floating Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border border-dashed border-brand-white/5 rounded-full animate-spin-slow pointer-events-none">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-brand-black border border-brand-cyan rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></div>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
         <span className="text-[10px] font-mono text-brand-white uppercase tracking-widest">Scroll</span>
         <ChevronRight size={16} className="text-brand-orange rotate-90" />
      </div>

    </section>
  );
};

export default Hero;