
import React from 'react';
import { Check, ShieldCheck, Ticket, Zap, Lock } from 'lucide-react';
import ContactForm from './ContactForm';

const CTA: React.FC = () => {
  return (
    <section id="cta-final" className="w-full py-24 px-6 bg-brand-black relative overflow-hidden scroll-mt-32">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
             <Ticket size={14} /> Access Level 1
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-white uppercase tracking-tighter hover-glow-brand cursor-default transition-all mb-4">
            Agenda tu <span className="text-brand-orange">Auditoría</span>
          </h2>
          <p className="text-brand-white/60 max-w-xl mx-auto">
            No contrates una agencia a ciegas. Solicita una Sesión de Viabilidad Tecnológica y descubre el potencial real de tu canal directo.
          </p>
        </div>

        {/* THE TICKET CONTAINER */}
        <div className="flex flex-col lg:flex-row bg-brand-charcoal border border-brand-border rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group">
          
          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange/50 shadow-[0_0_15px_#F97316] animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 z-30 pointer-events-none"></div>

          {/* LEFT: THE VALUE STACK (Visual) */}
          <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border relative">
             <div className="absolute top-0 left-0 bg-brand-orange text-brand-black font-bold text-[10px] px-3 py-1 uppercase tracking-widest rounded-br">
               High Value / Low Risk
             </div>

             <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-3">
               <span className="w-8 h-8 bg-brand-charcoal border border-brand-orange rounded flex items-center justify-center text-brand-orange">1</span>
               Sesión de Viabilidad Tecnológica
             </h3>

             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-cyan/10 p-1 rounded">
                   <Check size={14} className="text-brand-cyan" />
                 </div>
                 <div>
                   <p className="text-brand-white font-bold text-sm">Auditoría de Reservas & Margen (90 min)</p>
                   <p className="text-brand-white/50 text-xs text-balance">Analizamos tus métricas reales de PMS y fugas de margen por OTAs.</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-cyan/10 p-1 rounded">
                   <Check size={14} className="text-brand-cyan" />
                 </div>
                 <div>
                   <p className="text-brand-white font-bold text-sm">Plan de Independencia OTA</p>
                   <p className="text-brand-white/50 text-xs text-balance">Te llevas el PDF con la estrategia exacta para recuperar tu canal directo.</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-orange/10 p-1 rounded">
                   <Zap size={14} className="text-brand-orange" />
                 </div>
                 <div>
                   <p className="text-brand-orange font-bold text-sm">BONUS: Calculadora de Margen Turístico</p>
                   <p className="text-brand-white/50 text-xs text-balance">Acceso vitalicio a nuestras herramientas internas de cálculo de rentabilidad neta.</p>
                 </div>
               </li>
             </ul>

             <div className="flex items-center gap-2 text-brand-white/30 text-[10px] font-mono">
               <ShieldCheck size={14} />
               <span>Garantía de Calidad: Si no aportamos valor, te devolvemos el 100%.</span>
             </div>
          </div>

          {/* RIGHT: THE FORM (Action) */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-brand-black/50 flex flex-col justify-center relative">
             <div className="mb-6">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest">Solicitud de Acceso</span>
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-white/20"></div>
                 </div>
               </div>
               <h4 className="text-xl font-bold text-brand-white uppercase tracking-tighter">Formulario de Auditoría</h4>
             </div>

             <ContactForm />

             <div className="mt-6 flex justify-between items-center text-[9px] text-brand-white/30 font-mono uppercase">
               <div className="flex items-center gap-1">
                 <Lock size={10} /> Transmisión Encriptada
               </div>
               <div className="flex items-center gap-1 text-brand-cyan/70">
                 <div className="w-1 h-1 rounded-full bg-brand-cyan"></div>
                 Conexión Segura
               </div>
             </div>
          </div>

        </div>
        
        <p className="mt-8 text-center text-[10px] text-brand-white/30 font-mono max-w-2xl mx-auto leading-relaxed">
          // SYSTEM_NOTE: Al enviar el formulario, un Vasallo de Métrica analizará tu perfil. Si no eres un alojamiento o experiencia premium con potencial de escalado, la solicitud será descartada.
        </p>

      </div>
    </section>
  );
};

export default CTA;
