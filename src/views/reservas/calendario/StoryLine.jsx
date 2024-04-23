import { useState } from "react";
import "../../../styles/reservas/calendario/storyline.css";
import TimeLine from "./TimeLine";

function Storyline() {
  const [showAllAvatars, setShowAllAvatars] = useState(false);
  const inicialesUser = [
    {
      name: "Jose Mendoza",
    },
    {
      name: "Lucas Pedrozo",
    },
    {
      name: "Julian Camacho",
    },
    {
      name: "Michael Casadiegos",
    },
    {
      name: "Dilia Rosa",
    },
    {
      name: "Luis A",
    },
  ];

  const perfilAvatar = (users) => {
    const maxAvatars = 4;
    const usuariosAux = users.length - maxAvatars;

    const sortAux = [...users].sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div className="avatar-container">
        {sortAux.map((user, index) => (
          <div
            className={`avatar-profile ${
              !showAllAvatars && index >= maxAvatars ? "hidden-avatar" : ""
            }`}
            key={index}
            style={{ backgroundColor: colorAleatorio() }}
          >
            {obtenerIniciales(user.name)}
          </div>
        ))}
        {usuariosAux > 0 && (
          <div
            className="avatar-profile-more"
            onClick={() => setShowAllAvatars(!showAllAvatars)}
          >
            +{usuariosAux}
          </div>
        )}
      </div>
    );
  };

  const colorAleatorio = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const obtenerIniciales = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <div className="story-line">
      <div className="head-story">
        <h5>Calendario </h5>
        {perfilAvatar(inicialesUser)}
      </div>
      <TimeLine />
    </div>
  );
}

export default Storyline;
