import React, { useEffect, useRef } from 'react';
import { CalendarClock, ShoppingCart, RefrigeratorIcon, Recycle } from 'lucide-react';

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const TipCard: React.FC<TipCardProps> = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-emerald-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <button className="mt-6 text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center transition-colors">
        En savoir plus
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

const Tips: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="conseils" 
      className="py-20 bg-white text-gray-800"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Conseils Pratiques</h2>
          <p className="text-lg text-gray-600">
            Découvrez des astuces simples et efficaces pour réduire le gaspillage alimentaire au quotidien. Chaque petit geste compte!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TipCard 
            icon={<CalendarClock size={24} />}
            title="Planifiez vos repas"
            description="Établissez un menu hebdomadaire et faites une liste de courses en fonction de vos besoins réels pour éviter les achats impulsifs."
            delay={0}
          />
          <TipCard 
            icon={<ShoppingCart size={24} />}
            title="Achetez malin"
            description="Privilégiez les produits locaux et de saison, vérifiez les dates de péremption et n'hésitez pas à prendre des fruits et légumes 'imparfaits'."
            delay={200}
          />
          <TipCard 
            icon={<RefrigeratorIcon size={24} />}
            title="Conservez correctement"
            description="Organisez votre réfrigérateur, respectez la chaîne du froid et utilisez des contenants hermétiques pour prolonger la durée de vie des aliments."
            delay={400}
          />
          <TipCard 
            icon={<Recycle size={24} />}
            title="Valorisez les restes"
            description="Transformez vos restes en nouveaux plats, congelez ce que vous ne consommerez pas immédiatement ou compostez les déchets organiques."
            delay={600}
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Télécharger notre guide complet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tips;