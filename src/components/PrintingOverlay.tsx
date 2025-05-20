import React, { useState, useEffect } from 'react';
import { Printer } from 'lucide-react';

const PrintingOverlay: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 300);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-receipt-paper p-6 rounded-lg shadow-xl receipt-texture">
        <Printer className="w-8 h-8 mx-auto mb-4 text-receipt-text animate-pulse" />
        <p className="font-receipt text-lg text-receipt-text">
          Impression en cours{dots}
        </p>
      </div>
    </div>
  );
};

export default PrintingOverlay;