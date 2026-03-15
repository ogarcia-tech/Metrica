
import React, { useState } from 'react';
import { TrendingUp, Zap, BarChart3, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Calculator } from 'lucide-react';

interface MethodCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  problemQuestion: string;
  solutions: string[];
}

const cards: MethodCard[] = [
  {
    id: 1,
    icon: <TrendingUp className="text-brand-orange" size={28} />,
    title: "Más Margen Directo, Menos Comisiones",
    description: "Pasamos de la dependencia de OTAs a la ingeniería de reservas directas. Adquisición eficiente, fidelización brutal.",
    problemQuestion: "¿Tu margen se está evaporando en comisiones del 20% a Booking y Expedia?",
    solutions: [
      "Analizamos tu flujo de reservas y encontramos oportunidades para desviar tráfico a tu canal directo.",
      "Optimizamos el Customer Journey del turista para incrementar la reserva directa y reducir el coste de adquisición.",
      "Creamos sistemas que convierten al huésped de OTA en cliente recurrente de tu canal directo."
    ]
  },
  {
    id: 2,
    icon: <Zap className="text-brand-orange" size={28} />,
    title: "IA 24/7 & Conexión PMS",
    description: "Sincronizamos tu PMS con nuestra IA para respuestas y cierres en tiempo real. Eliminamos la pérdida de reservas nocturnas.",
    problemQuestion: "¿Pierdes reservas porque nadie responde un WhatsApp a las 3AM a un turista extranjero?",
    solutions: [
      "Implementamos agentes de IA que responden en 4 idiomas y cierran reservas directamente en tu PMS.",
      "Automatizamos la cualificación del huésped para que tu equipo solo gestione casos complejos.",
      "Eliminamos la fricción entre la consulta y el pago, acelerando el ciclo de reserva."
    ]
  },
  {
    id: 3,
    icon: <BarChart3 className="text-brand-orange" size={28} />,
    title: "Dashboard de Margen Turístico",
    description: "Dashboards de Margen Neto por habitación/experiencia, no de ocupación bruta. Si no es dinero en el banco, es vanidad.",
    problemQuestion: "¿Tomas decisiones basadas en la ocupación, sin ver el margen neto real tras comisiones?",
    solutions: [
      "Creamos dashboards que fusionan datos de Ads con el ahorro en comisiones y el coste operativo.",
      "Optimizamos cada mercado emisor basándonos en el Margen Neto, no solo en el volumen de reservas.",
      "Te damos visibilidad total sobre los euros exactos que recuperas de los intermediarios."
    ]
  }
];

const Methodology: React.FC = () => {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section className="w-full py-24 px-6 bg-brand-black scroll-mt-32 border-t border-brand-border" id="metodologia">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-white/5 border border-brand-white/10 text-brand-white/50 font-mono text-xs tracking-widest uppercase mb-4">
             <Calculator size={14} /> El Código Fuente
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-6 hover-glow-brand cursor-default transition-all">
            La Matemática del <span className="text-brand-orange underline decoration-brand-orange/30 underline-offset-8">Margen</span>
          </h2>
          <p className="text-xl text-brand-white/70 max-w-2xl mx-auto font-mono">
            Todo lo que hacemos se reduce a una ecuación simple: <br/>
            <span className="text-brand-cyan">LTV:CAC ratio &gt; 5:1</span>. Si no se cumple, no escalamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const isOpen = openCardId === card.id;
            
            return (
              <div 
                key={card.id} 
                className={`flex flex-col p-8 bg-brand-charcoal border transition-all duration-300 group ${isOpen ? 'border-brand-orange shadow-[0_0_20px_rgba(255,95,0,0.15)]' : 'border-brand-border hover:border-brand-orange'}`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-14 h-14 bg-brand-black border rounded flex items-center justify-center mb-6 transition-transform ${isOpen ? 'border-brand-orange scale-110' : 'border-brand-orange group-hover:scale-110'}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3">{card.title}</h3>
                  <p className="text-brand-white/60 mb-6 min-h-[4rem]">
                    {card.description}
                  </p>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-brand-border/50">
                    <div className="flex gap-3 mb-4 bg-brand-black/50 p-3 rounded border border-brand-orange/20">
                      <AlertTriangle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      <p className="text-sm font-bold text-brand-white/90 italic leading-snug">
                        {card.problemQuestion}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {card.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-brand-white/80">
                          <CheckCircle size={14} className="text-brand-cyan mt-1 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard(card.id)}
                  className={`mt-auto w-full py-3 flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold tracking-widest border transition-colors ${isOpen ? 'bg-brand-orange text-brand-black border-brand-orange' : 'bg-transparent text-brand-white border-brand-white/20 hover:border-brand-orange hover:text-brand-orange'}`}
                >
                  {isOpen ? 'Ocultar Análisis' : 'Ver Diagnóstico'}
                  {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
