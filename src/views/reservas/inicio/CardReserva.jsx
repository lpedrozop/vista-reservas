import "../../../styles/reservas/Principal/card.css";
import { BiBookBookmark, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import React, { useRef } from "react";

function CardReserva() {
  const cardsData = [];
  for (let i = 1; i <= 10; i++) {
    cardsData.push({
      id: i,
      name: "Jose Mendoza",
      title: `A2-501-${i}`,
      description: `09:00 - 0${i}:00`,
      estado: "Terminado",
    });
  }

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const currentPosition = scrollContainerRef.current.scrollLeft;
      const newPosition = currentPosition - 900;
      scrollToSmoothly(newPosition, 100);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const currentPosition = scrollContainerRef.current.scrollLeft;
      const newPosition = currentPosition + 900;
      scrollToSmoothly(newPosition, 100);
    }
  };

  const scrollToSmoothly = (position, duration) => {
    const startTime = performance.now();
    const start = scrollContainerRef.current.scrollLeft;
    const end = position;

    const animateScroll = (time) => {
      const elapsed = time - startTime;

      if (elapsed < duration) {
        scrollContainerRef.current.scrollLeft = easeInOut(
          elapsed,
          start,
          end - start,
          duration
        );
        requestAnimationFrame(animateScroll);
      } else {
        scrollContainerRef.current.scrollLeft = end;
      }
    };

    const easeInOut = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="cards-reservas-wrapper">
      <div className="scroll-buttons">
        <button id="boton-card-izquierda" onClick={scrollLeft}>
          <BiChevronLeft />
        </button>
        <button id="boton-card-derecha" onClick={scrollRight}>
          <BiChevronRight />
        </button>
      </div>
      <div className="cards-reservas" ref={scrollContainerRef}>
        {cardsData.map((card) => (
          <div key={card.id} className="card-container">
            <div className="card-content">
              <div className="header-card">
                <h3 className="card-title">{card.title}</h3>
                <BiBookBookmark />
              </div>
              <div className="foot-card">
                <p className="card-description">{card.description}</p>
                <div className="ft-crd">
                  <h5>{card.name}</h5>
                  <div className="estado-color">{card.estado}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardReserva;
