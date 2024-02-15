import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../views/inicio/Principal";
import Calendario from "../views/calendario/Calendario";

export const routes = [
  { path: "/", element: <Principal /> },
  { path: "/aula-activa", element: <Calendario /> },
];

export function RutasDomain() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
