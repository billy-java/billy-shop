import React from 'react';

interface HoookPoppup {
  message: string;
  setNachricht: () => void;
  farbe: string;
}

const Popup = ({ message, setNachricht, farbe }: HoookPoppup) => {
  setTimeout(() => {
    setNachricht();
  }, 8000);
  return (
    <div className={`${farbe} text-white  mb-5 p-3 text-center rounded-lg`}>
      {message}
    </div>
  );
};

export default Popup;
