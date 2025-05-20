import React, { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageAfterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageAfter = imageAfterRef.current;
    if (!container || !imageAfter) return;

    let isInteracting = false;

    // Animation de vibration initiale
    imageAfter.style.clipPath = `inset(0 5% 0 0)`;
    imageAfter.style.animation = 'clipVibration 1.5s infinite ease-in-out';

    function updateClip(xClient: number) {
      const rect = container.getBoundingClientRect();
      let x = xClient - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;

      imageAfter.classList.add('no-transition');
      imageAfter.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;

      if (!isInteracting) {
        isInteracting = true;
        imageAfter.style.animation = 'none'; // Stop animation quand on interagit
      }
    }

    function revealFullBefore() {
      imageAfter.classList.remove('no-transition');
      imageAfter.style.clipPath = `inset(0 0% 0 0)`; // plein visible
      imageAfter.style.animation = 'none'; // pas d'animation quand on sort
      isInteracting = false;
    }

    container.addEventListener('mousemove', e => updateClip(e.clientX));
    container.addEventListener('mouseenter', () => {
      imageAfter.classList.remove('no-transition');
      imageAfter.style.animation = 'none'; // stop vibration dès entrée
      isInteracting = true;
    });
    container.addEventListener('mouseleave', () => {
      revealFullBefore();
    });

    container.addEventListener('touchmove', e => {
      if (e.touches.length > 0) updateClip(e.touches[0].clientX);
    }, { passive: true });
    container.addEventListener('touchend', () => revealFullBefore());
    container.addEventListener('touchcancel', () => revealFullBefore());

    return () => {
      container.removeEventListener('mousemove', e => updateClip(e.clientX));
      container.removeEventListener('mouseenter', () => {
        imageAfter.classList.remove('no-transition');
        imageAfter.style.animation = 'none';
        isInteracting = true;
      });
      container.removeEventListener('mouseleave', revealFullBefore);
      container.removeEventListener('touchmove', e => {
        if (e.touches.length > 0) updateClip(e.touches[0].clientX);
      });
      container.removeEventListener('touchend', revealFullBefore);
      container.removeEventListener('touchcancel', revealFullBefore);
    };
  }, []);


  return (
      <section id="accueil" className="relative py-16 bg-receipt-paper">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">

            <div className="font-receipt text-receipt-text">
              <p>================================</p>
              <h1 className="text-4xl md:text-5xl mb-4 mt-4">ALERTE GASPILLAGE</h1>
              <p>================================</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="font-receipt text-receipt-text flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                <p className="text-xl">URGENCE PLANETAIRE</p>
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="space-y-4 hero-section font-receipt text-receipt-text">
                <div
                    ref={containerRef}
                    id="comparison"
                    className="relative w-[600px] h-[300px]"
                >
                  <img
                      src="/avant.webp"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      alt="Avant"
                  />
                  <img
                      src="/apres.webp"
                      ref={imageAfterRef}
                      id="imageAfter"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-[clip-path] duration-500 ease"
                      style={{ clipPath: 'inset(0 95% 0 0)' }}
                      alt="Après"
                  />
                  <div className="absolute headings top-4 left-4 text-white z-10">
                    <h1>Gaspiller c'est tuer</h1>
                    <h2>Le gaspillage alimentaire a un coût...</h2>
                  </div>
                </div>

                <style jsx>{`
                .no-transition {
                  transition: none !important;
                }

                @keyframes clipVibration {
                  0%   { clip-path: inset(0 95% 0 0); }
                  25%  { clip-path: inset(0 93% 0 0); }
                  50%  { clip-path: inset(0 97% 0 0); }
                  75%  { clip-path: inset(0 93% 0 0); }
                  100% { clip-path: inset(0 95% 0 0); }
                }
              `}</style>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-4 bg-receipt-dots bg-dots-sm"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-receipt-dots bg-dots-sm"></div>
        </div>
      </section>
  );
};

export default Hero;
