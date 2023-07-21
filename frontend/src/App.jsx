import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Class from "./pages/Class";
import Lore from "./pages/Lore";
import Personnage from "./pages/Personnage";
import NavBar from "./components/NavBar/NavBar";
import "./utils.scss";
import "./App.scss";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <div className="backgroundColorOrImage">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Mes personnages" element={<Class />} />
          <Route path="Fiche personnage" element={<Personnage />} />
          <Route path="lore" element={<Lore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
