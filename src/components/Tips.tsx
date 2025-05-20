import React, { useEffect, useRef } from 'react';
import { CalendarClock, ShoppingCart, RefrigeratorIcon, Recycle, Scissors } from 'lucide-react';

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  couponCode: string;
}

// Fonction pour télécharger le PDF
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/doc/gaspillage_alimentaire.pdf";
  link.download = "guide_gaspillage_alimentaire.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const TipCard: React.FC<TipCardProps> = ({ icon, title, description, couponCode }) => {
  return (
    <div className="bg-receipt-paper border-2 border-dashed border-receipt-border p-6 relative">
      {/* Pointillés de découpe */}
      <div className="absolute -left-2 inset-y-0 w-4 flex items-center">
        <Scissors className="w-4 h-4 text-receipt-text/50" />
      </div>
      <div className="absolute -right-2 inset-y-0 w-4 flex items-center">
        <Scissors className="w-4 h-4 text-receipt-text/50" />
      </div>
      
      <div className="space-y-4">
        {/* En-tête du coupon */}
        <div className="text-center font-receipt text-receipt-text">
          <div className="w-12 h-12 mx-auto bg-receipt-text/5 rounded-full flex items-center justify-center mb-2">
            {icon}
          </div>
          <p>--------------------------------</p>
          <h3 className="text-xl my-2">{title}</h3>
          <p>--------------------------------</p>
        </div>

        {/* Description */}
        <p className="font-receipt text-receipt-text/80 text-center">
          {description}
        </p>

        {/* Code du coupon */}
        <div className="text-center space-y-2">
          <p className="font-receipt text-xs text-receipt-text/60">CODE CONSEIL</p>
          <p className="font-receipt text-lg text-receipt-text tracking-widest bg-receipt-text/5 py-1 rounded">
            {couponCode}
          </p>
        </div>
      </div>
    </div>
  );
};

const Tips: React.FC = () => {
  return (
    <section id="conseils" className="py-16 bg-receipt-paper">
      <div className="container mx-auto px-4">
        <div className="text-center font-receipt text-receipt-text mb-12">
          <p>================================</p>
          <h2 className="text-3xl my-4">COUPONS CONSEILS</h2>
          <p>DÉCOUPEZ ET CONSERVEZ</p>
          <p>================================</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <TipCard 
            icon={<CalendarClock className="w-6 h-6 text-receipt-text" />}
            title="PLANIFICATION"
            description="Établissez un menu hebdomadaire et une liste de courses précise pour éviter les achats impulsifs."
            couponCode="PLAN2025"
          />
          <TipCard 
            icon={<ShoppingCart className="w-6 h-6 text-receipt-text" />}
            title="ACHAT MALIN"
            description="Privilégiez les produits locaux et de saison. N'hésitez pas à prendre les fruits et légumes 'imparfaits'."
            couponCode="SMART25"
          />
          <TipCard 
            icon={<RefrigeratorIcon className="w-6 h-6 text-receipt-text" />}
            title="CONSERVATION"
            description="Organisez votre réfrigérateur et utilisez des contenants hermétiques pour prolonger la durée de vie des aliments."
            couponCode="FRESH25"
          />
          <TipCard 
            icon={<Recycle className="w-6 h-6 text-receipt-text" />}
            title="RECYCLAGE"
            description="Transformez vos restes en nouveaux plats ou compostez les déchets organiques."
            couponCode="CYCL25"
          />
        </div>
        
        <div className="mt-16 text-center font-receipt">
          <button
          onClick={handleDownload}
          className="bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-8 py-3 rounded-lg transition-colors">
            TÉLÉCHARGER LE GUIDE COMPLET
          </button>
          <p className="mt-4 text-xs text-receipt-text/60">
            * Ces conseils sont valables sans limitation de durée
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;