import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../views/reservas/inicio/Principal";
import Calendario from "../views/reservas/calendario/Calendario";
import Landing from "../views/landing/Landing";

export const routes = [
  { path: "/", element: <Landing /> },
  { path: "/dashboard", element: <Principal /> },
  { path: "/dashboard/aula-activa", element: <Calendario /> },
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
