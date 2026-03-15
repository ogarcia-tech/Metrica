import React from 'react';
import { Mail, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full bg-brand-black border-t border-brand-border pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Col 1: Marca */}
        <div className="lg:col-span-1 space-y-4">
          <Link to="/" className="text-2xl font-bold text-brand-white tracking-tighter hover-glow-brand cursor-pointer block">METRICA<span className="text-brand-orange">.ONE</span></Link>
          <p className="text-brand-white/50 text-xs leading-relaxed">
            Infraestructura de Crecimiento Turístico. Métrica procesa, los Vasallos ejecutan el margen.
          </p>
          <div className="flex gap-4 pt-2">
            <Linkedin size={18} className="text-brand-white/40 hover:text-brand-orange cursor-pointer transition-colors" />
            <Twitter size={18} className="text-brand-white/40 hover:text-brand-orange cursor-pointer transition-colors" />
            <Github size={18} className="text-brand-white/40 hover:text-brand-orange cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Col 2: Servicios */}
        <div className="space-y-4">
          <h5 className="font-bold text-brand-white font-mono uppercase text-xs tracking-widest text-brand-cyan hover-glow-cyan cursor-default">SERVICIOS</h5>
          <ul className="space-y-2 text-brand-white/60">
            <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">INFRAESTRUCTURA</a></li>
            <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">ACELERADOR</a></li>
            <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">ELITE</a></li>
            <li><a href="#metodologia" onClick={(e) => handleScroll(e, 'metodologia')} className="hover:text-brand-orange transition-colors">Metodología</a></li>
          </ul>
        </div>

        {/* Col 3: Empresa */}
        <div className="space-y-4">
          <h5 className="font-bold text-brand-white font-mono uppercase text-xs tracking-widest text-brand-cyan hover-glow-cyan cursor-default">EL GREMIO</h5>
          <ul className="space-y-2 text-brand-white/60">
            <li><a href="#equipo" onClick={(e) => handleScroll(e, 'equipo')} className="hover:text-brand-orange transition-colors">Sobre Nosotros</a></li>
            <li><a href="#manifiesto" onClick={(e) => handleScroll(e, 'manifiesto')} className="hover:text-brand-orange transition-colors">Manifiesto</a></li>
            <li><a href="#equipo" onClick={(e) => handleScroll(e, 'equipo')} className="hover:text-brand-orange transition-colors">Los Vasallos</a></li>
            <li><Link to="/blog" className="hover:text-brand-orange transition-colors">Blog Marginal</Link></li>
          </ul>
        </div>

        {/* Col 4: Recursos */}
        <div className="space-y-4">
          <h5 className="font-bold text-brand-white font-mono uppercase text-xs tracking-widest text-brand-cyan hover-glow-cyan cursor-default">RECURSOS</h5>
          <ul className="space-y-2 text-brand-white/60">
            <li><Link to="/recursos" className="hover:text-brand-orange transition-colors">Recursos Gratuitos</Link></li>
            <li><a href="#casos" onClick={(e) => handleScroll(e, 'casos')} className="hover:text-brand-orange transition-colors">Casos de Éxito</a></li>
            <li><Link to="/recursos" className="hover:text-brand-orange transition-colors">Calculadora de Margen</Link></li>
            <li><Link to="/blog" className="hover:text-brand-orange transition-colors">Inteligencia de Campo</Link></li>
          </ul>
        </div>

        {/* Col 5: Contacto */}
        <div className="space-y-4">
          <h5 className="font-bold text-brand-white font-mono uppercase text-xs tracking-widest text-brand-cyan hover-glow-cyan cursor-default">CONTACTO</h5>
          <ul className="space-y-2 text-brand-white/60">
            <li className="flex items-center gap-2"><Mail size={14}/> hola@metrica.one</li>
            <li className="flex items-center gap-2"><Globe size={14}/> metrica.one</li>
            <li className="pt-2">
               <a 
                 href="#cta-final" 
                 onClick={(e) => handleScroll(e, 'cta-final')}
                 className="inline-block bg-brand-charcoal border border-brand-orange text-brand-orange px-3 py-1 text-xs font-bold uppercase hover:bg-brand-orange hover:text-brand-black transition-colors"
               >
                 Agendar Sesión
               </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-white/30 font-mono gap-4">
        <div>
          © 2025 metrica.one. Todos los derechos reservados por la IA.
        </div>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-white">Privacidad</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-white">Cookies</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-white">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;