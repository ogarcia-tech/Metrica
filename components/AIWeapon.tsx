
import React from 'react';
import { Cpu, Database, ArrowRight, Zap, Code } from 'lucide-react';

const AIWeapon: React.FC = () => {
  return (
    <section id="ia" className="w-full py-20 px-6 bg-brand-charcoal border-b border-brand-border overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <div className="order-2 lg:order-1 space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded text-brand-cyan text-xs font-mono uppercase tracking-widest">
               <Cpu size={14} /> Intelligence Core
             </div>
             
             <h2 className="text-3xl md:text-5xl font-black text-brand-white leading-tight">
               Nuestra Arma Secreta: <br/>
               <span className="text-brand-cyan">Métrica IA</span>
             </h2>
             
             <p className="text-brand-white/70 text-lg leading-relaxed">
               Nuestra IA analiza terabytes en segundos. A veces alucina y ve patrones locos en los datos. <span className="text-brand-orange font-bold">Nosotros filtramos la locura y te damos la rentabilidad.</span>
             </p>
             
             <div className="flex flex-col gap-4">
               <div className="p-4 bg-brand-black border border-brand-border rounded-sm flex items-start gap-4 hover:border-brand-cyan/50 transition-colors">
                 <Database className="text-brand-cyan shrink-0 mt-1" size={24} />
                 <div>
                   <h4 className="text-brand-white font-bold mb-1">Ingesta Masiva</h4>
                   <p className="text-sm text-brand-white/50">Conectamos con tus APIs de Meta, Google y CRM para leer lo que nadie lee.</p>
                 </div>
               </div>
               
               <div className="p-4 bg-brand-black border border-brand-border rounded-sm flex items-start gap-4 hover:border-brand-orange/50 transition-colors">
                 <Code className="text-brand-orange shrink-0 mt-1" size={24} />
                 <div>
                   <h4 className="text-brand-white font-bold mb-1">Interpretación Humana</h4>
                   <p className="text-sm text-brand-white/50">Los Vasallos traducen "patrones algorítmicos" en "estrategias de venta".</p>
                 </div>
               </div>
             </div>
          </div>

          {/* RIGHT: VISUAL DASHBOARD */}
          <div className="order-1 lg:order-2 relative">
             <div className="relative bg-brand-black border border-brand-border rounded-lg p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Terminal Header */}
               <div className="flex items-center gap-2 px-4 py-2 border-b border-brand-border bg-brand-charcoal/50">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                 </div>
                 <div className="flex-1 text-center font-mono text-[10px] text-brand-white/30">metrica_kernel_v4.2.exe</div>
               </div>
               
               {/* Dashboard Content */}
               <div className="p-6 space-y-6 font-mono text-xs">
                 {/* Row 1: Processing */}
                 <div className="flex items-center justify-between border-b border-brand-border/30 pb-4">
                   <div className="flex flex-col gap-1">
                     <span className="text-brand-cyan font-bold">DATA_INPUT_STREAM</span>
                     <span className="text-brand-white/40">Reading 4.2TB/s...</span>
                   </div>
                   <div className="h-8 w-32 bg-brand-charcoal rounded overflow-hidden relative">
                     <div className="absolute inset-0 bg-brand-cyan/20 animate-pulse"></div>
                     <div className="absolute h-full w-[70%] bg-brand-cyan"></div>
                   </div>
                 </div>
                 
                 {/* Row 2: Code Snippet */}
                 <div className="bg-brand-charcoal/50 p-4 rounded border border-brand-border/30 text-brand-white/60">
                   <p className="text-purple-400">while <span className="text-brand-white">(</span><span className="text-blue-400">roas</span> &lt; <span className="text-yellow-400">4.0</span><span className="text-brand-white">)</span> {'{'}</p>
                   <p className="pl-4 text-brand-orange">optimize_bid_cap();</p>
                   <p className="pl-4 text-brand-orange">kill_ad_set(id);</p>
                   <p className="pl-4 text-green-400">// Human approval required</p>
                   <p>{'}'}</p>
                 </div>

                 {/* Row 3: Result */}
                 <div className="flex items-center gap-4 bg-brand-orange/10 border border-brand-orange/20 p-4 rounded">
                    <Zap className="text-brand-orange" size={24} />
                    <div>
                      <h5 className="font-bold text-brand-orange">OPPORTUNITY_DETECTED</h5>
                      <p className="text-brand-white/70">Scale Campaign #241 -&gt; Expected Lift: +34%</p>
                    </div>
                 </div>
               </div>
             </div>

             {/* Background Glow */}
             <div className="absolute -inset-4 bg-brand-cyan/10 blur-xl -z-10 rounded-full"></div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AIWeapon;
