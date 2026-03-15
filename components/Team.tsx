
import React, { useState } from 'react';
import { TeamMember } from '../types';
import { ShieldAlert, RefreshCw } from 'lucide-react';
import { useTeamImages } from '../src/hooks/useTeamImages';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Vasallo Estratega',
    role: 'CEO & Revenue Strategy',
    title: 'El Arquitecto de Reservas',
    mount: 'Halcón de Datos (Data Falcon)',
    power: 'Visión de Margen Neto',
    imageStr: 'https://picsum.photos/seed/metrica-ceo-falcon/600/800'
  },
  {
    id: 2,
    name: 'Vasallo Analista',
    role: 'Data & Analytics',
    title: 'El Centinela de Datos',
    mount: 'Esfinge de Cristal (Crystal Sphinx)',
    power: 'Predicción de Demanda',
    imageStr: 'https://picsum.photos/seed/metrica-analyst-sphinx/600/800'
  },
  {
    id: 3,
    name: 'Vasallo Creativo',
    role: 'UX/UI & Conversion',
    title: 'El Alquimista de Conversión',
    mount: 'Camaleón de Píxeles (Pixel Chameleon)',
    power: 'Hipnosis de Reserva',
    imageStr: 'https://picsum.photos/seed/metrica-creative-chameleon/600/800'
  },
  {
    id: 4,
    name: 'Vasallo de Tráfico',
    role: 'Ads & Market Acquisition',
    title: 'El Heraldo de Mercados',
    mount: 'Pantera de Sombras (Shadow Panther)',
    power: 'Captación Internacional',
    imageStr: 'https://picsum.photos/seed/metrica-traffic-panther/600/800'
  },
  {
    id: 5,
    name: 'Vasallo de Revenue',
    role: 'Revenue Management',
    title: 'El Guardián del Margen',
    mount: 'Tortuga de Hierro (Iron Turtle)',
    power: 'Escudo Anti-Comisiones',
    imageStr: 'https://picsum.photos/seed/metrica-revenue-turtle/600/800'
  },
  {
    id: 6,
    name: 'Vasallo de IA',
    role: 'Automation & AI Dev',
    title: 'El Oráculo de la IA',
    mount: 'Golem de Silicio (Silicon Golem)',
    power: 'Automatización 24/7',
    imageStr: 'https://picsum.photos/seed/metrica-ai-oracle-golem/600/800'
  }
];

const MemberCard: React.FC<{ member: TeamMember; generatedImage?: string }> = ({ member, generatedImage }) => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  const displayImage = generatedImage || member.imageStr;

  return (
    <div className="group relative h-[400px] overflow-hidden border border-brand-border bg-brand-charcoal rounded-lg shadow-card">
      {/* Image with Error Handling and Loading State */}
      <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105 bg-brand-charcoal">
        {loading && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-black/50 backdrop-blur-sm z-20">
            <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {!imgError ? (
          <img 
            src={displayImage} 
            alt={member.mount} 
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onLoad={() => setLoading(false)}
            onError={() => {
              setImgError(true);
              setLoading(false);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-brand-white/20 p-4 text-center">
            <ShieldAlert size={48} className="mb-2 opacity-50" />
            <span className="font-mono text-xs uppercase tracking-widest">Falla de Enlace</span>
            <span className="text-[10px] text-brand-orange/50 mt-1">Reintentando Conexión...</span>
          </div>
        )}
        
        {/* Overlays - Soft Dark Mode Friendly */}
        <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        {/* Slate gradient at bottom for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent opacity-90 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-brand-orange font-mono text-xs uppercase tracking-wider mb-1">{member.role}</p>
        <h3 className="text-2xl font-bold text-brand-white mb-2">{member.title}</h3>
        
        <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-brand-orange/30 pt-4 mt-2">
          <p className="text-sm text-brand-white/80 mb-1"><span className="text-brand-cyan font-bold">Identidad:</span> {member.name}</p>
          <p className="text-sm text-brand-white/80 mb-1"><span className="text-brand-cyan font-bold">Montura:</span> {member.mount}</p>
          <p className="text-sm text-brand-white/80"><span className="text-brand-orange font-bold">Poder:</span> {member.power}</p>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const { images, loading: generating } = useTeamImages(teamMembers);

  const handleReset = () => {
    localStorage.removeItem('metrica_team_images');
    window.location.reload();
  };

  return (
    <section id="equipo" className="w-full py-20 px-6 bg-brand-charcoal border-t border-brand-border scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl font-black text-brand-white uppercase tracking-widest mb-2 hover-glow-brand cursor-default transition-all">
            El Gremio Turístico
          </h2>
          <p className="text-brand-orange font-mono">
            // LOS 6 VASALLOS - INGENIERÍA DE RESERVAS DIRECTAS
          </p>
          
          <button 
            onClick={handleReset}
            className="absolute top-0 right-0 p-2 text-brand-white/20 hover:text-brand-orange transition-colors"
            title="Regenerar Imágenes"
          >
            <RefreshCw size={16} className={generating ? 'animate-spin' : ''} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <MemberCard 
              key={member.id} 
              member={member} 
              generatedImage={images[member.id]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
