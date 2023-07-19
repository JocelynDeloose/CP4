import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Class from "./pages/Class";
import Lore from "./pages/Lore";
import Personnage from "./pages/Personnage";
import NavBar from "./components/NavBar/NavBar";
import "./utils.scss";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
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
