
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowRight, Zap, Clock, User, ChevronRight, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 pb-20 bg-brand-black min-h-screen">
      <SEO 
        title="Blog: Inteligencia del Margen" 
        description="Artículos técnicos, tácticas de guerrilla digital y estrategias de ingeniería para el sector turístico. El conocimiento que las OTAs no quieren que tengas."
      />

      {/* MARQUEE URGENCY */}
      <div className="w-full bg-brand-orange py-2 overflow-hidden whitespace-nowrap border-y border-brand-black">
        <div className="flex animate-marquee font-mono text-[10px] font-bold text-brand-black uppercase tracking-[0.2em]">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="mx-8">
              NUEVO RECURSO DESBLOQUEADO: GUÍA DE INDEPENDENCIA DE OTAS 2026 // ACTUALIZACIÓN DE ALGORITMO DETECTADA // ÚNETE AL GREMIO //
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* HERO BLOG */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="w-full overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded text-brand-cyan text-xs font-mono uppercase tracking-widest mb-6"
            >
              <Zap size={14} /> Transmisión de Datos
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-white uppercase tracking-tighter leading-[0.85] relative group break-words"
            >
              Blog <br/>
              <span className="text-brand-orange group-hover:animate-glitch-text">Marginal</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pb-2 space-y-6 w-full md:max-w-md"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-white/30" size={18} />
              <input 
                type="text" 
                placeholder="BUSCAR EN EL ARCHIVO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-charcoal border border-brand-border rounded-sm py-4 pl-12 pr-6 text-brand-white text-xs font-mono focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </motion.div>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post, index) => {
            const isLatest = index === 0 && searchTerm === '';
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group relative flex flex-col h-full border transition-all duration-500 overflow-hidden rounded-sm ${
                  isLatest 
                    ? 'bg-brand-orange/5 border-brand-orange shadow-[0_0_30px_rgba(249,115,22,0.1)]' 
                    : 'bg-brand-charcoal border-brand-border hover:border-brand-white/30'
                }`}
              >
                <Link to={`/blog/${post.id}`} className="relative aspect-video overflow-hidden block">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  {isLatest && (
                    <div className="absolute top-4 right-4 bg-brand-orange text-brand-black px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                      Última Transmisión
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md border border-brand-white/10 px-2 py-1 text-[10px] font-mono font-bold text-brand-cyan tracking-widest uppercase">
                    {post.category}
                  </div>
                </Link>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-brand-white/30 mb-4 uppercase tracking-widest">
                    <Clock size={12} /> {post.readTime}
                    <span>/</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 transition-colors leading-tight ${
                    isLatest ? 'text-brand-orange' : 'text-brand-white group-hover:text-brand-orange'
                  }`}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-brand-white/50 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className={`flex items-center gap-2 font-bold text-xs uppercase tracking-widest group/btn ${
                      isLatest ? 'text-brand-orange' : 'text-brand-white/60 group-hover:text-brand-orange'
                    }`}
                  >
                    Leer Transmisión <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-brand-border mb-20">
            <p className="text-brand-white/30 font-mono text-sm uppercase tracking-widest">Sin resultados en la frecuencia actual.</p>
          </div>
        )}

        {/* NEWSLETTER CAPTURE - FULL WIDTH */}
        <div className="bg-brand-charcoal border border-brand-orange/30 p-8 md:p-16 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 text-brand-orange">
                <Mail size={24} />
                <span className="font-mono text-sm font-bold uppercase tracking-widest">Protocolo de Alerta</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-brand-white leading-tight">
                No te pierdas la próxima <span className="text-brand-cyan">falla en el sistema</span>.
              </h4>
              <p className="text-brand-white/50 text-lg leading-relaxed">
                Suscríbete para recibir tácticas de ingeniería del margen directamente en tu terminal. Sin ruido, solo datos.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {subscribed ? (
                <div className="bg-brand-cyan/10 border border-brand-cyan/30 p-8 text-center rounded-sm animate-in fade-in zoom-in">
                  <p className="text-brand-cyan font-bold text-xl uppercase tracking-widest">Conexión Establecida</p>
                  <p className="text-brand-white/60 mt-2">Bienvenido al Gremio.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="email" 
                      required
                      placeholder="TU@EMAIL.COM"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-brand-black border border-brand-border px-6 py-4 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors font-mono"
                    />
                    <button 
                      type="submit"
                      className="bg-brand-orange text-brand-black px-8 py-4 font-bold uppercase font-mono text-sm hover:bg-brand-white transition-all"
                    >
                      SUSCRIBIRSE
                    </button>
                  </div>
                  <p className="text-[10px] text-brand-white/30 text-center md:text-left">
                    Respetamos tu privacidad. Solo ingeniería de valor.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
