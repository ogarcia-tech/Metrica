import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PainPoint {
  id: number;
  question: string;
  solutions: string[];
}

const points: PainPoint[] = [
  {
    id: 1,
    question: "¿Tu margen se está evaporando en comisiones del 20% a Booking y Expedia?",
    solutions: [
      "Analizamos tu flujo de reservas y encontramos oportunidades para desviar tráfico a tu canal directo.",
      "Optimizamos el Customer Journey del turista para incrementar la reserva directa y reducir el coste de adquisición.",
      "Creamos sistemas que convierten al huésped de OTA en cliente recurrente de tu canal directo."
    ]
  },
  {
    id: 2,
    question: "¿Pierdes reservas porque nadie responde un WhatsApp a las 3AM a un turista extranjero?",
    solutions: [
      "Implementamos agentes de IA que responden en 4 idiomas y cierran reservas directamente en tu PMS.",
      "Automatizamos la cualificación del huésped para que tu equipo solo gestione casos complejos.",
      "Eliminamos la fricción entre la consulta y el pago, acelerando el ciclo de reserva."
    ]
  },
  {
    id: 3,
    question: "¿Tomas decisiones basadas en la ocupación, sin ver el margen neto real tras comisiones?",
    solutions: [
      "Creamos dashboards que fusionan datos de Ads con el ahorro en comisiones y el coste operativo.",
      "Optimizamos cada mercado emisor basándonos en el Margen Neto, no solo en el volumen de reservas.",
      "Te damos visibilidad total sobre los euros exactos que recuperas de los intermediarios."
    ]
  }
];

const PainPoints: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-6 bg-brand-charcoal border-b border-brand-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-brand-white mb-4 hover-glow-brand cursor-default transition-all">
             ¿Tienes estos problemas? <span className="text-brand-cyan">Te damos la solución.</span>
           </h2>
        </div>

        <div className="space-y-4">
          {points.map((point) => (
            <div 
              key={point.id} 
              className={`border transition-all duration-300 rounded-lg overflow-hidden ${openId === point.id ? 'bg-brand-black border-brand-orange shadow-[0_0_15px_rgba(255,95,0,0.15)]' : 'bg-brand-charcoal border-brand-border hover:border-brand-white/30'}`}
            >
              <button 
                onClick={() => toggle(point.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 w-8 h-8 rounded flex items-center justify-center transition-colors ${openId === point.id ? 'bg-brand-orange/20 text-brand-orange' : 'bg-brand-black/50 text-brand-white/30 group-hover:text-brand-orange'}`}>
                    <AlertTriangle size={16} />
                  </div>
                  <span className={`font-bold md:text-lg transition-colors ${openId === point.id ? 'text-brand-orange' : 'text-brand-white group-hover:text-brand-white/90'}`}>
                    {point.question}
                  </span>
                </div>
                {openId === point.id ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-brand-white/30 group-hover:text-brand-orange" />}
              </button>

              {openId === point.id && (
                <div className="px-6 pb-8 pt-0 animate-in slide-in-from-top-2 fade-in duration-300">
                  <div className="h-px w-full bg-brand-border mb-6 opacity-50"></div>
                  <ul className="space-y-4 pl-2 md:pl-12">
                    {point.solutions.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-brand-white/80 text-sm md:text-base leading-relaxed">
                        <CheckCircle size={18} className="text-brand-cyan mt-1 shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;