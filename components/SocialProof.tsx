
import React, { useEffect, useState, useRef } from 'react';
import { SocialProof as SPType } from '../types';

const proofs: SPType[] = [
  { client: 'Hotel Boutique Palma', result: '+45% Reservas Directas' },
  { client: 'Agroturismo Mallorca', result: '+200% Margen Neto' },
  { client: 'Villas Menorca', result: '+140% Conversión IA' },
  { client: 'Charter Luxury Ibiza', result: '+85% Cierre Directo' },
  { client: 'Yacht Experience', result: 'x3 Reservas Online' },
];

// Hook simple para detectar cuando el elemento entra en pantalla
const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Solo animar una vez
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};

// Componente individual para animar números
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  
  // Extraer el número y los caracteres no numéricos
  const numberMatch = value.match(/\d+/);
  const number = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const prefix = value.startsWith('+') ? '+' : value.startsWith('x') ? 'x' : '';
  const suffix = value.replace(prefix, '').replace(number.toString(), '');

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 segundos
    const increment = number / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setDisplayValue(number.toString());
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start).toString());
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold text-brand-white font-mono">
      <span className="text-brand-orange">{prefix}</span>
      {displayValue}
      <span className="text-brand-orange">{suffix}</span>
    </span>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section id="casos" className="w-full py-16 bg-brand-black border-y border-brand-border scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center font-mono text-brand-white/40 text-sm mb-8 tracking-widest uppercase hover-glow-brand cursor-default transition-all">
          Casos de Éxito Turístico (Datos Auditados)
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {proofs.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Animated Counter */}
              <AnimatedCounter value={item.result.split(' ')[0]} />
              
              {/* Rest of the text (if any description was split) */}
              <span className="text-sm text-brand-white/60 mt-1 uppercase tracking-wide group-hover:text-brand-white transition-colors">
                {item.client}
                {item.result.split(' ').length > 1 && (
                  <span className="block text-[10px] text-brand-white/30 lowercase">
                    {item.result.substring(item.result.indexOf(' '))}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
