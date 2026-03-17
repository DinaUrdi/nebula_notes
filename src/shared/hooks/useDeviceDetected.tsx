import { useState, useEffect } from 'react';

// Хук useDeviceDetect освободит вас от забот по определению типа устройства
const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    // Отслеживаем изменение размера экрана здесь, моментально реагируя на любые его изменения
    const handleResize = () => setIsMobile(window.innerWidth < 760);
    window.addEventListener('resize', handleResize);
    // Непременно удаляем обработчик, чтобы предотвратить утечку памяти
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

export default useDeviceDetect;

