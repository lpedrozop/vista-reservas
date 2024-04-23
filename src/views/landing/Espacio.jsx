import "../../styles/landing/espacios.css";
import { Element } from "react-scroll";
import Aulas from "../../assets/aulas.webp";
import Auditorio from "../../assets/auditorio.webp";
import Salas from "../../assets/salas-de-estudio.webp";

function CardEspacio({ titulo, parrafo, imagen }) {
  return (
    <div className="card-espacio">
      <div
        className="img-card"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>
      <div className="info-card-reserva">
        <h6>{titulo}</h6>
        <p>{parrafo}</p>
      </div>
    </div>
  );
}

function EspacioComponent() {
  return (
    <Element name="espacios-utb">
      <section className="cnt-espacio">
        <div className="espacios-utb">
          <h5>Conoce nuestros espacios para reserva</h5>
          <div className="espacios-wrap">
            <CardEspacio
              imagen={Aulas}
              titulo="Aulas de clase"
              parrafo="Aula destinada a la enseñanza en la universidad. Equipado con asientos, pizarras y video-beam."
            />
            <CardEspacio
              imagen={Auditorio}
              titulo="Auditorio"
              parrafo="Espacio para eventos academicos y culturales, con asientos y tecnologia para presentaciones."
            />
            <CardEspacio
              imagen={Salas}
              titulo="Salas de reunion"
              parrafo="Equipada con pizarras y sillas, ideal para tutoria y estudio privado."
            />
          </div>
          <div className="cnt-btn-reservas">
            <button className="btn-formulario">
              Quiero reservar un espacio
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default EspacioComponent;
