import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Stats from './components/Stats';
import Tips from './components/Tips';
import Quiz from './components/Quiz';
import Associations from './components/Associations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrintSound from './components/PrintSound';
import PrintingOverlay from './components/PrintingOverlay';
import { Store } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Gestion du défilement pour l'effet de pliure
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <PrintingOverlay />
      <PrintSound />
      <div 
        className="max-w-3xl mx-auto bg-receipt-paper min-h-[90vh] relative receipt-shadow animate-receipt-print receipt-texture receipt-crumple animate-float coffee-stains worn-edges random-creases"
        style={{
          perspective: '1000px',
          transform: `rotateX(${Math.min(scrollProgress * 0.1, 10)}deg)`
        }}
      >
        {/* Effet de texture superposé */}
        <div className="absolute inset-0 bg-receipt-dots bg-dots-sm opacity-5 pointer-events-none"></div>

        {/* En-tête du ticket */}
        <div className="text-center pt-8 pb-4 border-b border-dashed border-receipt-border">
          <Store className="w-12 h-12 mx-auto mb-2 text-receipt-text" />
          <h1 className="font-receipt text-4xl text-receipt-text">ECO-NOURRIR</h1>
          <p className="font-receipt text-sm text-receipt-text">
            ================================
          </p>
          <p className="font-receipt text-receipt-text">
            Reçu pour un monde sans gaspillage
          </p>
          <p className="font-receipt text-xs text-receipt-text">
            {new Date().toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          
          {/* Code-barres décoratif */}
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-0.5 bg-receipt-text"
                style={{
                  opacity: Math.random() * 0.5 + 0.5,
                  height: `${Math.random() * 16 + 24}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* Contenu principal stylisé comme un ticket */}
        <div className="receipt-content relative">
          <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
          <main className="relative">
            <Hero />
            <Categories />
            <Stats />
            <Quiz />
            <Tips />
            <Associations />
          </main>
          <Footer />
        </div>

        {/* Pied de ticket avec effet déchiré */}
        <div className="text-center py-4 border-t border-dashed border-receipt-border receipt-tear">
          <p className="font-receipt text-sm text-receipt-text">
            ================================
          </p>
          <p className="font-receipt text-receipt-text">Merci de votre engagement</p>
          <p className="font-receipt text-xs text-receipt-text">
            www.econourrir.fr
          </p>
          
          {/* Code-barres de fin */}
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-0.5 bg-receipt-text"
                style={{
                  opacity: Math.random() * 0.5 + 0.5,
                  height: `${Math.random() * 20 + 20}px`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;