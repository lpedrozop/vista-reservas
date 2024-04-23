import React, { useState } from "react";
import "../../styles/formulario/rightform.css";
import LogoUtb from "../../assets/logo_utb.png";
import { Button, message, Steps } from "antd";
import { steps } from "./Steps";

function RightForm() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="rg-form">
      <div className="cnt-form">
        <img src={LogoUtb} alt="Utb" className="img-lg-utb" />
        <Steps current={current} items={items} direction="horizontal" />
        <div className="content-form">{steps[current].content}</div>
        <div className="fto-step">
          {current < steps.length - 1 && (
            <button type="primary" className="btn-sgt" onClick={() => next()}>
              Siguiente
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              type="primary"
              className="btn-fn"
              onClick={() =>
                message.success("Reserva a espera de confirmacion")
              }
            >
              Finalizar
            </button>
          )}
          {current > 0 && (
            <button
              style={{
                margin: "0 8px",
              }}
              className="btn-ant"
              onClick={() => prev()}
            >
              Anterior
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightForm;
