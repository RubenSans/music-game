import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return windowSize;
}

export default useWindowSize;
