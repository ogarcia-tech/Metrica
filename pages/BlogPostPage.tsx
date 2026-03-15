
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Calendar, Share2, Download, Lock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center bg-brand-black min-h-screen">
        <h1 className="text-brand-white text-4xl font-bold mb-8 uppercase tracking-widest">Transmisión Perdida</h1>
        <Link to="/blog" className="text-brand-orange hover:text-brand-white transition-colors font-mono uppercase tracking-widest">
          Volver al Feed
        </Link>
      </div>
    );
  }

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setUnlocked(true);
    setEmail('');
  };

  return (
    <div className="bg-brand-black min-h-screen pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />

      {/* HERO POST */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full overflow-hidden text-center flex flex-col items-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-white transition-colors font-mono text-xs uppercase tracking-widest mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver al Feed
          </Link>
          <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-widest mb-6">
            <span className="bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-1 rounded">{post.category}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-white uppercase tracking-tighter leading-[0.9] mb-8 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange font-bold shrink-0">
              {post.author[0]}
            </div>
            <div className="text-left">
              <div className="text-brand-white font-bold uppercase tracking-widest text-sm truncate">{post.author}</div>
              <div className="text-brand-white/40 text-xs font-mono">Vasallo del Gremio</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 w-full overflow-hidden">
          {/* Main Article Image */}
          <div className="mb-12 rounded-sm overflow-hidden border border-brand-border shadow-card w-full">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div 
            className="prose prose-invert prose-orange max-w-none w-full
              prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-brand-orange prose-h2:pl-6
              prose-p:text-brand-white/70 prose-p:text-lg prose-p:leading-relaxed
              prose-blockquote:border-brand-orange prose-blockquote:bg-brand-charcoal/30 prose-blockquote:p-6 prose-blockquote:rounded-sm
              prose-strong:text-brand-orange prose-a:text-brand-cyan hover:prose-a:text-brand-orange transition-colors
              break-words"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* IN-ARTICLE LEAD MAGNET */}
          {post.resource && (
            <div className="mt-16 p-8 md:p-12 bg-brand-charcoal border border-brand-orange/30 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-3xl -z-10 group-hover:bg-brand-orange/10 transition-all"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-brand-orange/20 border border-brand-orange/30 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                  <Download size={32} />
                </div>
                <div className="flex-grow space-y-2 text-center md:text-left">
                  <div className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest">Recurso Gratuito Desbloqueable</div>
                  <h3 className="text-2xl font-bold text-brand-white">{post.resource.title}</h3>
                  <p className="text-brand-white/50 text-sm">{post.resource.description}</p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  {unlocked ? (
                    <button className="w-full md:w-auto bg-brand-cyan text-brand-black px-8 py-4 font-bold uppercase font-mono text-xs flex items-center justify-center gap-2">
                      <Download size={16} /> Descargar {post.resource.type}
                    </button>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <form onSubmit={handleUnlock} className="flex gap-2">
                        <input 
                          type="email" 
                          required
                          placeholder="TU@EMAIL.COM"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-brand-black border border-brand-border px-4 py-3 text-brand-white text-xs focus:outline-none focus:border-brand-orange transition-colors font-mono w-full md:w-48"
                        />
                        <button type="submit" className="bg-brand-orange text-brand-black px-4 py-3 font-bold uppercase font-mono text-xs hover:bg-brand-white transition-all flex items-center gap-2">
                          <Lock size={14} /> Desbloquear
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SHARE SECTION */}
          <div className="mt-16 pt-8 border-t border-brand-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-brand-white/30 uppercase tracking-widest">Compartir Transmisión:</span>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn'].map((social) => (
                  <button key={social} className="text-brand-white/60 hover:text-brand-cyan transition-colors text-xs font-bold uppercase tracking-widest">
                    {social}
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center gap-2 text-brand-white/40 hover:text-brand-orange transition-colors text-xs font-mono uppercase tracking-widest">
              <Share2 size={14} /> Copiar Link
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="sticky top-32 space-y-12">
            {/* Author Card */}
            <div className="bg-brand-charcoal/50 border border-brand-border p-8 rounded-sm">
              <h4 className="text-brand-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-brand-white/5 pb-4">Sobre el Autor</h4>
              <p className="text-brand-white/50 text-sm leading-relaxed italic">
                "La ingeniería del margen no es una opción, es la única forma de supervivencia en un ecosistema dominado por algoritmos extractivos."
              </p>
            </div>

            {/* Related Posts */}
            <div className="space-y-6">
              <h4 className="text-brand-white font-bold uppercase tracking-widest text-xs border-b border-brand-white/5 pb-4">Otras Transmisiones</h4>
              {blogPosts.filter(p => p.id !== id).slice(0, 3).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group block space-y-2">
                  <div className="text-[10px] font-mono text-brand-orange/50 uppercase tracking-widest">{p.category}</div>
                  <h5 className="text-brand-white font-bold group-hover:text-brand-orange transition-colors leading-tight">
                    {p.title}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
