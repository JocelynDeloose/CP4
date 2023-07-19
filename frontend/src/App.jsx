import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Class from "./pages/Class";
import Lore from "./pages/Lore";
import Personnage from "./pages/Personnage";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="classes">classes</Link>
            </li>
            <li>
              <Link to="personnage">Personnage</Link>
            </li>
            <li>
              <Link to="lore">Lore</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="classes" element={<Class />} />
          <Route path="personnage" element={<Personnage />} />
          <Route path="lore" element={<Lore />} />
        </Routes>
      </div>
    </Router>
  );
}
