import { useState, useEffect, useRef } from 'react';
import { API_HOST } from '../../utils/constants';


export function SliderImg({imagenes}) {
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
  function back() {
    const newIndex = Math.max(0, activeIndex - 1);
    onClick(newIndex);
  }

  function next() {
    const newIndex = Math.min(imagenes.length - 1, activeIndex + 1);
    onClick(newIndex);
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
      <div className='div-small-img'>
        {imagenes.map((imagen, index) => (
          <button
            key={index}
            className={`small-img`}
            onClick={()=> onClick(index)}
          >
            <img className={` ${index === activeIndex ? 'mark' : ''}`} src={API_HOST + "/" + imagen.foto} alt='viaje miniatura'/>
          </button>
        ))}
      </div>
      <div className='flechas'>
        <button onClick={back}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left flecha" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
          </svg>
        </button>
        <button onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right flecha" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
