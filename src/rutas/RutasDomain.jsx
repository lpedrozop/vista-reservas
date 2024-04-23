import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../views/landing/Landing";
import Formulario from "../views/formulario/Formulario";
import Dashboard from "../views/reservas/Dashboard";

export const routes = [
  { path: "/", element: <Landing /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/form", element: <Formulario /> },
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
