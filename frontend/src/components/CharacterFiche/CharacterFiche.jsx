// A finir...

/* import { useState, useEffect } from "react";
import axios from "axios";
import "../../utils.scss";
import "./CharacterFiche.scss";
import PropTypes from "prop-types";

export default function CharacterFiche({
  character.className,
  character.lastname,
  character.firstname,
  character.age,
  character.sex,
  character.affinity,
  character.lore,
}) {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // Effectue la requête GET vers votre backend pour récupérer les données
    axios
      .get("http://localhost:5000/characterfiche")
      .then((response) => {
        // Met à jour le state avec les données récupérées
        setCharacterList(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);
  return {characterList && characterList.map((character) => (
    <div className="characterFicheGlobalContainer" key={character.id}>
      <div className="characterFicheMainTitleContainer">
        <h1 className="characterFicheMainTitle"> Votre Personnage</h1>
      </div>
      <div className="characterFicheContainer">
        <p className="characterFicheClassName">{character.className}</p>
        <p className="characterFicheLastname">{character.lastname}</p>
        <p className="characterFicheFirstname">{character.firstname}</p>
        <span className="characterFicheAge">{character.age}</span>
        <span className="characterFicheSex">{character.sex}</span>
        <span className="characterFicheAffinity">{character.affinity}</span>
        <p className="characterFicheLore">{character.lore}</p>
      </div>
    </div>
  ))}
  
};

CharacterFiche.propTypes = {
  className: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  affinity: PropTypes.string.isRequired,
  lore: PropTypes.string.isRequired,
};
 */
