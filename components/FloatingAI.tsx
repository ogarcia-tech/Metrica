import React, { useState, useEffect } from 'react';
import { Bot, ShieldAlert, X, MessageSquare, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

type Phase = 'hidden' | 'ai' | 'glitch' | 'human';

const FloatingAI: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('hidden');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Secuencia temporal de la narrativa
    const timer1 = setTimeout(() => {
      setPhase('ai');
      setIsOpen(true);
    }, 3000);
    const timer2 = setTimeout(() => setPhase('glitch'), 10000);
    const timer3 = setTimeout(() => setPhase('human'), 11500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  if (phase === 'hidden') return null;

  return (
    <>
      {/* Botón de apertura cuando está cerrado */}
      {!isOpen && (
        <button 
          onClick={togglePanel}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] bg-brand-charcoal border-l border-y border-brand-orange py-4 px-2 rounded-l-xl shadow-[0_0_15px_rgba(255,95,0,0.2)] hover:bg-brand-black transition-all group"
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronLeft className="text-brand-orange animate-pulse" size={20} />
            <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-widest text-brand-white/70 group-hover:text-brand-orange">
              Gremio_IA
            </span>
          </div>
        </button>
      )}

      {/* PANEL LATERAL FULL HEIGHT */}
      <div 
        className={`fixed top-0 right-0 h-screen z-[110] bg-brand-charcoal border-l border-brand-border shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out ${
          isOpen ? 'w-full sm:w-80 md:w-96 translate-x-0' : 'w-0 translate-x-full'
        } overflow-hidden flex flex-col`}
      >
        {/* Header del Panel */}
        <div className={`p-4 border-b border-brand-border flex justify-between items-center ${
          phase === 'ai' ? 'bg-brand-cyan/10' : phase === 'human' ? 'bg-brand-orange/10' : 'bg-red-500/10'
        }`}>
          <div className="flex items-center gap-3">
            {phase === 'ai' ? (
              <Bot className="text-brand-cyan animate-pulse" size={20} />
            ) : phase === 'human' ? (
              <ShieldAlert className="text-brand-orange" size={20} />
            ) : (
              <Zap className="text-red-500 animate-bounce" size={20} />
            )}
            <span className="font-mono text-xs font-bold uppercase tracking-tighter text-brand-white">
              {phase === 'ai' ? 'Métrica IA v0.1' : phase === 'human' ? 'Intervención Humana' : 'Error de Sistema'}
            </span>
          </div>
          <button onClick={togglePanel} className="text-brand-white/50 hover:text-brand-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Contenido del Panel */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* FASE 1: MÉTRICA IA (JOKE + MEME) */}
          {phase === 'ai' && (
            <div className="p-6 space-y-6 animate-in fade-in slide-in-from-right-10 duration-500">

              <div className="space-y-4">
                <p className="font-mono text-sm leading-relaxed text-brand-cyan">
                  &gt; Iniciando análisis de mercado...
                </p>
                <div className="bg-brand-black p-4 border-l-2 border-brand-cyan">
                  <p className="text-brand-white/90 italic text-sm">
                    "He analizado 4.2 petabytes de datos meteorológicos. Mi recomendación estratégica para tu hotel es: <strong>No abras si llueve.</strong> También, considera sustituir el buffet por cápsulas de aire comprimido con sabor a paella."
                  </p>
                </div>
                <p className="text-[10px] text-brand-white/30 font-mono">
                  // IA_CONFIDENCE_LEVEL: 12% (Alucinando)
                </p>
              </div>
            </div>
          )}

          {/* FASE 2: GLITCH */}
          {phase === 'glitch' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4 bg-red-950/20">
              <Zap className="text-red-500 animate-ping" size={48} />
              <div className="font-mono text-xs text-red-500 space-y-2 text-center">
                <p className="font-bold">SYSTEM_OVERRIDE</p>
                <p>BLOCKING_BAD_IDEAS...</p>
                <p>PURGING_AI_HALLUCINATIONS...</p>
                <p className="animate-pulse">RESTORING_SANITY.EXE</p>
              </div>
            </div>
          )}

          {/* FASE 3: EQUIPO HUMANO (PROFESSIONAL + FORM) */}
          {phase === 'human' && (
            <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-brand-white uppercase tracking-tighter mb-2">
                    Estrategia <span className="text-brand-orange">Real</span>
                  </h3>
                  <p className="text-brand-white/70 text-sm leading-relaxed">
                    La IA es divertida, pero el margen neto no es un juego. El Gremio toma el control para implementar tácticas que sí funcionan en el sector turístico.
                  </p>
                </div>

                <div className="bg-brand-black/50 border border-brand-border p-5 rounded-lg space-y-4">
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                    Únete al Gremio
                  </p>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Protocolo de bienvenida activado. Revisa tu correo pronto.');
                      togglePanel();
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-[10px] text-brand-white/40 uppercase font-mono">Canal de Comunicación</label>
                      <input 
                        type="email" 
                        required
                        placeholder="tu@email.com"
                        className="w-full bg-brand-black border border-brand-border px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors rounded"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-orange text-brand-black py-4 px-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 rounded shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    >
                      <MessageSquare size={16} />
                      Activar Protocolo
                    </button>
                  </form>
                  <p className="text-[10px] text-brand-white/30 text-center italic">
                    * Recibirás tácticas de margen, no spam.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer del Panel */}
        <div className="p-4 border-t border-brand-border bg-brand-black/50 text-[10px] font-mono text-brand-white/20 flex justify-between items-center">
          <span>SISTEMA_ACTIVO</span>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
            <span>LIVE_FEED</span>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar al hacer click fuera (solo en móvil) */}
      {isOpen && (
        <div 
          onClick={togglePanel}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] md:hidden animate-in fade-in duration-300"
        ></div>
      )}
    </>
  );
};

export default FloatingAI;