import React, { useState } from 'react';
import { DollarSign, Trash2, Wind, Apple, X } from 'lucide-react';

const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black"
      style={{
        touchAction: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10000]"
        style={{ position: 'fixed' }}
      >
        <X size={32} />
      </button>
      <div className="fixed inset-0 flex items-center justify-center">
        <video
          className="max-w-[100vw] max-h-[100vh] w-auto h-auto"
          controls
          autoPlay
          src="/HACKATHON_VIDEO.mp4"
          onEnded={onClose}
        />
      </div>
    </div>
  );
};

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
            <button
              onClick={() => setIsVideoOpen(true)}
              className="text-2xl bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-8 py-3 rounded-lg transition-colors"
            >
              FACTURE VISUELLE
            </button>
          </div>
        </div>

        {/* Bordures pointillées */}
        <div className="mt-8 font-receipt text-receipt-text text-center">
          <p>--------------------------------</p>
          <p className="text-xl my-2">FIN DU DÉTAIL</p>
          <p>--------------------------------</p>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};

export default Stats;