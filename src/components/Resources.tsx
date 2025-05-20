import React, { useEffect, useRef } from 'react';

interface ResourceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ imageSrc, title, description, link, delay = 0 }) => {
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
      className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center transition-colors"
        >
          Visiter le site
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
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
      id="ressources" 
      className="py-20 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Ressources & Partenaires</h2>
          <p className="text-lg text-gray-600">
            Découvrez des organisations et des initiatives qui luttent activement contre le gaspillage alimentaire et qui proposent des solutions concrètes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard 
            imageSrc="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Too Good To Go"
            description="Application qui met en relation commerçants et consommateurs pour sauver les invendus alimentaires à prix réduits."
            link="https://toogoodtogo.fr"
            delay={0}
          />
          <ResourceCard 
            imageSrc="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Les Banques Alimentaires"
            description="Réseau d'aide alimentaire qui collecte, gère et partage des denrées alimentaires pour aider les personnes en situation de précarité."
            link="https://www.banquealimentaire.org"
            delay={200}
          />
          <ResourceCard 
            imageSrc="https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Phenix"
            description="Entreprise sociale qui développe des solutions innovantes et collaboratives pour réduire le gaspillage et créer de la valeur."
            link="https://wearephenix.com"
            delay={400}
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
            Voir tous les partenaires
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;