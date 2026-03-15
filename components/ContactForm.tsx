import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../src/firebase';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    revenue: '',
    otaDependency: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'new',
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', project: '', revenue: '', otaDependency: '', message: '' });
    } catch (error) {
      console.error('Error saving lead:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-cyan/20 rounded-full mb-4">
          <CheckCircle className="text-brand-cyan" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-brand-white mb-2 uppercase tracking-tighter">Protocolo Iniciado</h3>
        <p className="text-brand-white/60 text-sm">Hemos recibido tus coordenadas. Un Vasallo analizará tu perfil y te contactará en breve para tu Auditoría de Reservas Directas.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-brand-orange text-xs font-mono uppercase tracking-widest hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">Identidad</label>
          <input 
            required
            type="text"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">Canal de Enlace</label>
          <input 
            required
            type="email"
            placeholder="email@empresa.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">Alojamiento / Experiencia</label>
        <input 
          required
          type="text"
          placeholder="Nombre de tu hotel, villa o empresa"
          value={formData.project}
          onChange={(e) => setFormData({...formData, project: e.target.value})}
          className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">Facturación Anual</label>
          <select 
            required
            value={formData.revenue}
            onChange={(e) => setFormData({...formData, revenue: e.target.value})}
            className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none"
          >
            <option value="" disabled>Selecciona rango</option>
            <option value="<500k">&lt; 500k €</option>
            <option value="500k-1M">500k € - 1M €</option>
            <option value="1M-5M">1M € - 5M €</option>
            <option value=">5M">&gt; 5M €</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">% Dependencia OTAs</label>
          <input 
            required
            type="text"
            placeholder="Ej: 70%"
            value={formData.otaDependency}
            onChange={(e) => setFormData({...formData, otaDependency: e.target.value})}
            className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest">Mensaje / Desafío</label>
        <textarea 
          required
          rows={2}
          placeholder="¿Cuál es tu mayor fuga de margen actual?"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-brand-black/50 border border-brand-border rounded px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
        />
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full group relative overflow-hidden rounded bg-brand-orange text-brand-black font-bold text-sm uppercase tracking-widest py-4 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Procesando...
            </>
          ) : (
            <>
              Iniciar Auditoría <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </span>
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-[10px] font-mono text-center uppercase tracking-widest animate-pulse">
          Error en el enlace. Reintenta la transmisión.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
