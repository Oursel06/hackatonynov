import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="accueil" 
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/306801/pexels-photo-306801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundBlendMode: "overlay" 
        }}
      ></div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-20 text-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ensemble, Luttons Contre<br className="hidden md:block" /> le Gaspillage Alimentaire
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Chaque année, un tiers de la nourriture produite dans le monde est gaspillée. Il est temps d'agir et de changer nos habitudes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Découvrir Comment Agir
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300">
            En Savoir Plus
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#statistiques" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;