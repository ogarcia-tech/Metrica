
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingAI from './components/FloatingAI';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <main className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-orange selection:text-brand-black">
          <ScrollProgress />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>

          <Footer />
          <FloatingAI />
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
