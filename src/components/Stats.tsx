import React, { useState } from 'react';
import { DollarSign, Trash2, Wind, Apple, X } from 'lucide-react';

const StatItem: React.FC<{
  label: string;
  value: string;
  sublabel?: string;
  icon: React.ReactNode;
}> = ({ label, value, sublabel, icon }) => {
  return (
    <div className="font-receipt text-receipt-text space-y-2">
      <div className="flex items-center justify-between border-b border-dashed border-receipt-border pb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            {icon}
          </div>
          <span>{label}</span>
        </div>
        <span className="text-xl">{value}</span>
      </div>
      {sublabel && (
        <p className="text-xl text-right pr-2">{sublabel}</p>
      )}
    </div>
  );
};

const Stats: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="statistiques" className="py-16 bg-receipt-paper">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center font-receipt text-receipt-text mb-12">
          <p>================================</p>
          <h2 className="text-3xl my-4">FACTURE DU GASPILLAGE</h2>
          <p>================================</p>
        </div>

        <div className="text-xl space-y-8">
          <StatItem
            icon={<Trash2 />}
            label="NOURRITURE GASPILLÉE"
            value="1,3 G"
            sublabel="(tonnes par an dans le monde)"
          />

          <StatItem
            icon={<DollarSign />}
            label="COÛT FINANCIER"
            value="20 Mrd€"
            sublabel="(pertes annuelles en France)"
          />

          <StatItem
            icon={<Wind />}
            label="ÉMISSIONS CO2"
            value="3,3 G"
            sublabel="(tonnes de CO2 par an)"
          />

          <StatItem
            icon={<Apple />}
            label="GASPILLAGE/PERS"
            value="20 kg"
            sublabel="(par an en France)"
          />
        </div>

        <div className="mt-12 bg-receipt-text/5 p-6 rounded-lg border-2 border-dashed border-receipt-border">
          <div className="font-receipt text-receipt-text text-center">
            <a
              href="/HACKATHON_VIDEO.mp4"
              className="text-2xl bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-8 py-3 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACTURE VISUELLE
            </a>

          </div>
        </div>

        {/* Bordures pointillées */}
        <div className="mt-8 font-receipt text-receipt-text text-center">
          <p>--------------------------------</p>
          <p className="text-xl my-2">FIN DU DÉTAIL</p>
          <p>--------------------------------</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;