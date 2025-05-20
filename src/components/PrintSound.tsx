import React, { useEffect, useRef } from 'react';

const PrintSound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Création d'un buffer AudioContext pour générer le son d'impression
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configuration du son
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);

    // Pattern d'impression
    const duration = 1.5; // Durée totale en secondes
    const interval = 0.1; // Intervalle entre chaque "point" d'impression
    
    for (let i = 0; i < duration; i += interval) {
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime + i);
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + i + interval / 2);
    }

    // Démarrage et arrêt
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);

    return () => {
      oscillator.disconnect();
      gainNode.disconnect();
    };
  }, []);

  return null;
};

export default PrintSound;