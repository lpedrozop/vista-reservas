import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import Principal from "./views/Principal";

function App() {
  return (
    <Router>
      <Principal />
    </Router>
  );
}

export default App;
