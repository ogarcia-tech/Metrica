
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Hexagon, LogIn, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../src/context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, login, logout } = useAuth();

  const navLinks = [
    { name: 'EL GREMIO', href: '/#inicio' },
    { name: 'INFRAESTRUCTURA', href: '/#versiones' },
    { name: 'RECURSOS', href: '/recursos', isRoute: true },
    { name: 'BLOG', href: '/blog', isRoute: true },
    { name: 'LOS VASALLOS', href: '/#equipo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    if (isRoute) {
      setIsOpen(false);
      return; // Let react-router handle it
    }

    e.preventDefault();
    const [path, hash] = href.split('#');
    
    if (location.pathname !== path && path !== '/') {
      navigate(href);
      setIsOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate(href);
      setIsOpen(false);
      return;
    }

    const targetId = hash;
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    } else if (hash === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Handle hash scroll on page load/change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-40 w-full bg-brand-black/90 backdrop-blur-lg border-b border-brand-border h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={(e: any) => handleNavClick(e, '/#inicio')}
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center gap-2">
            <span className="text-4xl font-serif font-bold text-brand-orange leading-none">1</span>
            <div className="flex flex-col leading-none pt-1">
              <span className="text-xl font-bold text-brand-white tracking-tighter">
                metrica<span className="text-brand-orange">.one</span>
              </span>
              <span className="text-[9px] text-brand-white/50 group-hover:text-brand-cyan transition-colors uppercase tracking-widest font-mono">
                Ingenier<span className="text-brand-orange font-bold">IA</span> del crecimiento
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e: any) => handleNavClick(e, link.href, link.isRoute)}
              className={`text-[11px] font-mono font-bold transition-colors tracking-widest ${
                (location.pathname === link.href) 
                  ? 'text-brand-orange' 
                  : 'text-brand-white/60 hover:text-brand-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Auth Button */}
          {user ? (
            <div className="flex items-center gap-4 pl-4 border-l border-brand-white/10">
              <div className="flex items-center gap-2 group/user cursor-pointer relative">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-6 h-6 rounded-full border border-brand-orange/30" />
                ) : (
                  <UserIcon size={16} className="text-brand-orange" />
                )}
                <span className="text-[10px] font-mono text-brand-white/60 group-hover/user:text-brand-orange transition-colors truncate max-w-[80px]">
                  {user.displayName?.split(' ')[0].toUpperCase()}
                </span>
                
                {/* Logout Tooltip/Dropdown */}
                <button 
                  onClick={logout}
                  className="absolute -bottom-10 right-0 bg-brand-charcoal border border-brand-border p-2 rounded opacity-0 group-hover/user:opacity-100 transition-opacity hover:text-brand-orange"
                  title="Cerrar Sesión"
                >
                  <LogOut size={14} />
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center gap-2 text-[11px] font-mono font-bold text-brand-white/60 hover:text-brand-orange transition-colors tracking-widest pl-4 border-l border-brand-white/10"
            >
              <LogIn size={14} />
              ACCESO
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link 
            to="/#cta-final"
            onClick={(e: any) => handleNavClick(e, '/#cta-final')}
            className="flex items-center gap-2 bg-brand-white/5 border border-brand-orange/50 text-brand-orange px-5 py-2 font-mono text-xs font-bold uppercase hover:bg-brand-orange hover:text-brand-black transition-all clip-path-tech"
          >
            Auditoría Directa
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-white hover:text-brand-orange transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-charcoal border-b border-brand-border absolute w-full left-0 top-20 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={(e: any) => handleNavClick(e, link.href, link.isRoute)}
              className="block text-brand-white font-mono hover:text-brand-cyan py-3 border-b border-brand-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/#cta-final" 
            onClick={(e: any) => handleNavClick(e, '/#cta-final')}
            className="block w-full mt-6 bg-brand-orange text-brand-black py-4 font-bold uppercase text-center font-mono text-sm clip-path-tech"
          >
            Reserva sesión
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

