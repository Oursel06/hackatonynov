import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageAfterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageAfter = imageAfterRef.current;

    if (!container || !imageAfter) return;

    function updateClip(xClient: number) {
      const rect = container.getBoundingClientRect();
      let x = xClient - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      imageAfter.classList.add('no-transition');
      imageAfter.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    }

    function revealFullBefore() {
      imageAfter.classList.remove('no-transition');
      imageAfter.style.clipPath = `inset(0 0% 0 0)`;
    }

    // Souris
    const handleMouseMove = (e: MouseEvent) => updateClip(e.clientX);
    const handleMouseEnter = () => imageAfter.classList.remove('no-transition');
    const handleMouseLeave = () => revealFullBefore();

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Tactile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateClip(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => revealFullBefore();
    const handleTouchCancel = () => revealFullBefore();

    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchCancel);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, []);

  return (
      <section
          id="accueil"
          className="relative w-full bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 overflow-hidden"
      >
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden"
        >
          <img
              src="/apres.webp"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              alt="Avant"
          />
          <img
              ref={imageAfterRef}
              src="/avant.webp"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-[clip-path] duration-500 ease"
              style={{ clipPath: 'inset(0 100% 0 0)' }}
              alt="Après"
          />
          <div className="absolute headings">
            <h1>Gaspiller c'est tuer</h1>
            <h2>Le gaspillage alimentaire a un coût...</h2>
          </div>

        </div>

        <style jsx>{`
          .no-transition {
            transition: none !important;
          }
        `}</style>
      </section>
  );
};

export default Hero;
