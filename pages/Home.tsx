
import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemSolution from '../components/ProblemSolution';
import Verticals from '../components/Verticals';
import Services from '../components/Services';
import SocialProof from '../components/SocialProof';
import Methodology from '../components/Methodology';
import Resources from '../components/Resources';
import Manifesto from '../components/Manifesto';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Workflow from '../components/Workflow';
import WhyUs from '../components/WhyUs';
import BlogSection from '../components/BlogSection';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Inicio" 
        description="Métrica.One: Ingeniería del Margen para el sector turístico. Recupera tu canal directo y optimiza tu rentabilidad con tecnología de vanguardia."
        keywords="revenue management, marketing turistico, venta directa hoteles, optimizacion margen, gremio turistico"
      />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Verticals />
      <Services />
      <Workflow />
      <Methodology />
      <WhyUs />
      <Resources />
      <BlogSection />
      <SocialProof />
      <Manifesto />
      <Team />
      <CTA />
    </>
  );
};

export default Home;

