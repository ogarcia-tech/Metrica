
import React, { useState } from 'react';
import { BookOpen, Download, Zap, ArrowRight, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { resources } from '../data/resources';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'Todos' || 
                         (activeFilter === 'Guías' && res.category === 'Guía') ||
                         (activeFilter === 'Herramientas' && res.category === 'Herramienta') ||
                         (activeFilter === 'Casos' && res.category === 'Caso de Éxito');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-20 pb-20 px-6 bg-brand-black min-h-screen">
      <SEO 
        title="Recursos del Gremio" 
        description="Accede a guías, herramientas y casos de éxito exclusivos para profesionales del sector turístico. Optimiza tu venta directa y recupera tu margen."
        keywords="recursos marketing turistico, guias hoteles, herramientas revenue management, casos de exito turismo"
      />
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DISRUPTIVO */}
        <div className="mb-20 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange text-xs font-mono uppercase tracking-widest mb-6"
          >
            <BookOpen size={14} /> Biblioteca del Gremio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-brand-white uppercase tracking-tighter leading-none mb-8"
          >
            Recursos <br/>
            <span className="text-brand-orange">Sin Filtro</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-white/60 text-xl max-w-2xl leading-relaxed"
          >
            Tácticas, herramientas y casos reales que las OTAs preferirían que no leyeras. Conocimiento puro para el canal directo.
          </motion.p>
        </div>

        {/* FILTROS Y BUSQUEDA */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between border-b border-brand-border pb-8">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {['Todos', 'Guías', 'Herramientas', 'Casos'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 border text-xs font-bold uppercase tracking-widest transition-all rounded-full whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-brand-orange border-brand-orange text-brand-black' 
                    : 'bg-brand-charcoal border-brand-border text-brand-white/70 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-white/30" size={18} />
            <input 
              type="text" 
              placeholder="BUSCAR TÁCTICA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-charcoal border border-brand-border rounded-full py-3 pl-12 pr-6 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
            />
          </div>
        </div>

        {/* GRID DE RECURSOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div 
              key={resource.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-charcoal border border-brand-border rounded-xl overflow-hidden hover:border-brand-orange/50 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md border border-brand-white/10 px-3 py-1 rounded text-[10px] font-bold text-brand-orange uppercase tracking-widest">
                  {resource.category}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-[10px] font-mono text-brand-white/30 mb-2 uppercase tracking-widest">
                  {resource.date}
                </div>
                <h3 className="text-2xl font-bold text-brand-white mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                  {resource.title}
                </h3>
                <p className="text-brand-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {resource.description}
                </p>
                
                <button className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest group/btn">
                  Acceder Ahora <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
          
          {filteredResources.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-brand-white/40 font-mono italic">No se han encontrado recursos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>

        {/* SEO SECTION (HIDDEN BUT PRESENT) */}
        <div className="mt-32 p-12 bg-brand-charcoal/30 border border-brand-border rounded-2xl">
          <h2 className="text-brand-white font-bold mb-6 uppercase tracking-widest text-sm">Optimización de Canal Directo</h2>
          <p className="text-brand-white/40 text-xs leading-relaxed max-w-4xl">
            En Métrica.One entendemos que el SEO para hoteles no se trata solo de palabras clave. Se trata de intención de reserva. Nuestros recursos están diseñados para mejorar el E-E-A-T de tu dominio turístico, posicionando tu marca como la autoridad definitiva en tu destino. Cada guía aquí presente ha sido validada por los Vasallos del Gremio para asegurar un impacto directo en tu ADR y RevPAR.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;

