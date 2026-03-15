
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  return (
    <section id="blog-preview" className="w-full py-24 px-6 bg-brand-black border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange text-xs font-mono uppercase tracking-widest">
              <Zap size={14} /> Inteligencia de Campo
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-white uppercase tracking-tighter leading-none">
              Últimas <br/>
              <span className="text-brand-orange">Transmisiones</span>
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="group flex items-center gap-3 text-brand-white/60 hover:text-brand-orange transition-all font-mono text-xs uppercase tracking-widest border-b border-brand-white/10 pb-2"
          >
            Ver todo el archivo <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-brand-charcoal border border-brand-border rounded-sm overflow-hidden hover:border-brand-orange/50 transition-all duration-500 flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="relative aspect-video overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md border border-brand-white/10 px-2 py-1 text-[10px] font-mono font-bold text-brand-orange tracking-widest uppercase">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[10px] font-mono text-brand-white/30 mb-4 uppercase tracking-widest">
                  <Clock size={12} /> {post.readTime}
                  <span>/</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-brand-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest group/btn"
                >
                  Leer Más <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
