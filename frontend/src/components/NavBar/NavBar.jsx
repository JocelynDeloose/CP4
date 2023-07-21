import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="navBarContainer">
      <ul className="navListContainer">
        <li className="navText">
          <NavLink to="/" className="navTextDecoration">
            Accueil
          </NavLink>
        </li>
        <li className="navText">
          <NavLink to="Mes personnages" className="navTextDecoration">
            Mes personnages
          </NavLink>
        </li>
        <li className="navText">
          <NavLink to="Fiche personnage" className="navTextDecoration">
            Personnage
          </NavLink>
        </li>
        <li className="navText">
          <NavLink to="lore" className="navTextDecoration">
            Lore
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
