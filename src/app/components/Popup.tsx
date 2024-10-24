import React, { useEffect } from 'react';

interface HoookPopup {
  message: string;
  setNachricht: () => void;
  farbe: string;
}

const Popup = ({ message, setNachricht, farbe }: HoookPopup) => {
  // Ferme le popup après 8 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setNachricht();
    }, 8000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, [setNachricht]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 ${farbe} text-white mb-5 p-3 text-center rounded-lg flex items-center space-x-8`}>
      <p>{message}</p>
      <button
        onClick={setNachricht}
        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="Fermer le popup">
        <span className="text-xl">✖️</span>
      </button>
    </div>
  );
};

export default Popup;
