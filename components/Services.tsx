import React, { useState } from 'react';
import { Service } from '../types';
import { Rocket, Cpu, ShieldAlert, Check, Zap } from 'lucide-react';

const services: Service[] = [
  {
    id: '01',
    name: 'INFRAESTRUCTURA',
    subtitle: '(The Foundation)',
    concept: 'Cimentación Digital: Tu canal directo bajo control.',
    humanTruth: 'Deja de ser un rehén de las OTAs. Recuperamos la propiedad de tu cliente y de tus datos desde el primer día.',
    price: 'Desde 3.000€ (Setup)',
    description: 'Instalación de la arquitectura base para la independencia. Conectamos tu PMS con un motor de reservas optimizado y desplegamos tu primer agente de IA.',
    details: [
      'Creación del Funnel de Venta Directa',
      'Integración PMS + Motor de Reservas',
      'Agente IA Nivel 1: Atención 24/7',
      'Configuración de Tracking de Rentabilidad'
    ],
    highlight: 'Propiedad total de la infraestructura'
  },
  {
    id: '02',
    name: 'GROWTH PARTNER',
    subtitle: '(The Monthly Engine)',
    concept: 'Escalado de Margen: Tráfico propio y cierre automático.',
    humanTruth: 'No solo traemos visitas, traemos reservas. Inyectamos demanda orgánica desde nuestra red de portales para que el retorno sea directo.',
    price: 'Desde 1.500€/mes (Fee)',
    description: 'El motor de crecimiento continuo. Gestión de captación, IA de ventas proactiva y reporting en tiempo real para dominar tu mercado.',
    details: [
      'Inyección de Demanda Orgánica (Red de Portales)',
      'Gestión de Captación (Ads Internacional)',
      'Agente IA Nivel 2: Cierre y Upselling',
      'Reporting de Margen Real-Time'
    ],
    highlight: 'Tráfico Orgánico Exclusivo'
  },
  {
    id: '03',
    name: 'ELITE',
    subtitle: '(Full Gremio)',
    concept: 'Dominio de Mercado: Fidelización y Revenue Algorítmico.',
    humanTruth: 'Convertimos tu alojamiento o empresa de experiencias en una máquina de generar beneficio recurrente sin intervención humana.',
    price: 'Consultar Proyecto',
    description: 'La solución definitiva para grupos hoteleros y empresas de experiencias de lujo. Delegación total de la estrategia de crecimiento.',
    details: [
      'Todo lo de Growth Partner',
      'Estrategia de Retención Automatizada',
      'Revenue Management Algorítmico',
      'Soporte Prioritario de "Los Vasallos"'
    ],
    highlight: 'Máximo rendimiento del activo'
  }
];

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicios" className="w-full py-24 px-6 bg-brand-black relative scroll-mt-32">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
       
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-brand-white mb-12 flex items-center gap-4 uppercase tracking-tighter hover-glow-brand cursor-default transition-all">
          <span className="text-brand-orange text-5xl">///</span> El Arsenal de Métrica
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className={`group relative bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,0,0.1)] ${expandedId === service.id ? 'border-brand-orange' : 'hover:border-brand-orange'}`}>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl font-mono font-bold text-brand-border group-hover:text-brand-orange transition-colors duration-300 opacity-50">
                    {service.id}
                  </span>
                  {index === 0 && <Rocket className="text-brand-cyan" />}
                  {index === 1 && <Cpu className="text-brand-cyan" />}
                  {index === 2 && <ShieldAlert className="text-brand-cyan" />}
                </div>
                <h3 className="text-2xl font-bold text-brand-white">{service.name}</h3>
                <p className="text-brand-cyan font-mono text-sm mb-4">{service.subtitle}</p>
                <p className="text-brand-white/80 italic border-l-2 border-brand-cyan pl-3 py-1 mb-4">
                  "{service.concept}"
                </p>
              </div>

              {/* Human Truth */}
              <div className="bg-brand-black/50 p-4 border border-brand-border mb-6">
                 <p className="text-xs text-brand-orange uppercase font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
                   La Verdad Humana:
                 </p>
                 <p className="text-sm text-brand-white/70">
                   {service.humanTruth}
                 </p>
              </div>

              {/* EXPANDED CONTENT */}
              {expandedId === service.id && (service.description || service.details) && (
                <div className="mb-6 pt-4 border-t border-brand-border/50 animate-in slide-in-from-top-4 fade-in duration-300">
                  {service.description && (
                    <p className="text-sm text-brand-white/80 mb-4 leading-relaxed font-light">
                      {service.description}
                    </p>
                  )}
                  
                  {service.details && (
                    <ul className="space-y-2 mb-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-brand-white/70">
                          <Check size={14} className="text-brand-orange mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.highlight && (
                    <div className="bg-brand-cyan/10 border border-brand-cyan/30 p-3 rounded flex items-center gap-3">
                      <Zap size={16} className="text-brand-cyan" />
                      <span className="text-xs font-bold text-brand-cyan uppercase tracking-wide">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-brand-border group-hover:border-brand-orange/30 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-brand-white font-mono font-bold">{service.price}</span>
                  <button 
                    onClick={() => toggleExpand(service.id)}
                    className="text-brand-orange text-sm font-bold uppercase hover:underline flex items-center gap-1"
                  >
                    {expandedId === service.id ? 'Colapsar' : 'Desplegar'} {expandedId === service.id ? '↑' : '→'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;