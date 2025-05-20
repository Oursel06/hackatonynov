import React, { useEffect, useRef } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const statRef = useRef<HTMLDivElement>(null);
  
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
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={statRef} 
      className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center transform opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <span className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{value}</span>
      <span className="text-gray-600 text-center">{label}</span>
    </div>
  );
};

const Stats: React.FC = () => {
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
      id="statistiques" 
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">L'Ampleur du Problème</h2>
          <p className="text-lg text-gray-600">
            Le gaspillage alimentaire a des conséquences considérables sur notre planète, notre économie et notre société. Découvrez quelques chiffres alarmants qui illustrent l'urgence d'agir.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            value="1,3 G" 
            label="de tonnes de nourriture gaspillées chaque année dans le monde" 
            delay={0}
          />
          <StatItem 
            value="33%" 
            label="de la nourriture produite n'est jamais consommée" 
            delay={200}
          />
          <StatItem 
            value="3,3 G" 
            label="de tonnes de CO2 émises par le gaspillage alimentaire" 
            delay={400}
          />
          <StatItem 
            value="20 kg" 
            label="de nourriture gaspillée par personne et par an en France" 
            delay={600}
          />
        </div>
        
        <div className="mt-16 bg-amber-100 p-6 md:p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-amber-800 mb-3">Le saviez-vous?</h3>
          <p className="text-amber-900">
            Si le gaspillage alimentaire était un pays, il serait le 3ème plus grand émetteur de gaz à effet de serre après la Chine et les États-Unis. Réduire le gaspillage alimentaire est l'une des actions les plus efficaces pour lutter contre le changement climatique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;