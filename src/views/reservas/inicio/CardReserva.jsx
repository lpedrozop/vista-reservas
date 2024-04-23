import "../../../styles/reservas/Principal/card.css";
import { BiBookBookmark } from "react-icons/bi";

function CardReserva() {
  const cardsData = [];
  for (let i = 1; i <= 8; i++) {
    cardsData.push({
      id: i,
      imageUrl: "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg",
      name: "Jose Mendoza",
      title: `A2-501-${i}`,
      description: `09:00 - 0${i}:00`,
      estado: "Terminado",
    });
  }

  return (
    <div className="cards-reservas">
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
  );
}

export default CardReserva;
