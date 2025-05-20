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

  // Fonction pour télécharger le PDF
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/gaspillage_alimentaire.pdf";
    link.download = "guide_gaspillage_alimentaire.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="conseils"
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
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
            description="Élaborez un menu hebdomadaire et faites une liste de courses ciblée. Cela vous évite les achats inutiles et limite le gaspillage dès l’achat."
            delay={0}
          />
          <TipCard
            icon={<ShoppingCart size={24} />}
            title="Achetez avec bon sens"
            description="Privilégiez les fruits et légumes moches mais bons, et vérifiez bien les dates de péremption. Cela soutient les producteurs locaux et limite le gaspillage en amont."
            delay={200}
          />
          <TipCard
            icon={<RefrigeratorIcon size={24} />}
            title="Stockez intelligemment"
            description="Rangez correctement votre frigo, respectez la chaîne du froid et utilisez des boîtes hermétiques. Vous évitez ainsi les pertes liées au mauvais stockage."
            delay={400}
          />
          <TipCard
            icon={<Recycle size={24} />}
            title="Cuisine anti-gaspillage"
            description="Réalisez des plats créatifs avec les restes, congelez si besoin, ou compostez les déchets organiques. Rien ne se perd, tout se transforme !"
            delay={600}
          />
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleDownload}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Télécharger notre guide complet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tips;