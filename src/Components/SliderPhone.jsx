import { useState, useEffect, useRef } from 'react';
import { API_HOST } from '../../utils/constants';


export function SliderPhone({imagenes}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {

      const scrollLeft = container.scrollLeft;
      const imageWidth = container.clientWidth;
      const currentIndex = Math.round(scrollLeft / imageWidth);

      setActiveIndex(currentIndex);
    }; 
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function onClick(index) {
    const container = containerRef.current;
    const imageWidth = container.clientWidth;
    container.scrollLeft = index * imageWidth; 
    setActiveIndex(index);
  }
  return (
    <div className='slider'>
      <div className='container' ref={containerRef}>
        {imagenes.map((imagen) => {
          return <img key={imagen.id} className='foto image' src={API_HOST + "/" + imagen.foto} alt='viaje' />
        })}
      </div>
      <div className='puntos'>
        {imagenes.map((imagen, index) => (
          <button
            key={index}
            className={`punto ${index === activeIndex ? 'mark' : ''}`}
            onClick={()=> onClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
