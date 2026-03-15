
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-brand-charcoal">
      <div 
        className="h-full bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.7)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-2 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
