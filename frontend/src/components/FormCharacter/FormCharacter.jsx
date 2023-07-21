import "./FormCharacter.scss";
import { useState } from "react";
import axios from "axios";

export default function FormCharacter() {
  const [characterData, setCharacterData] = useState({
    className: "",
    lastName: "",
    firstName: "",
    age: "",
    sex: "",
    affinity: "",
    lore: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoi des données du formulaire au serveur via Axios
    axios
      .post("http://localhost:5000/characterfiche", characterData)
      .then(() => {
        // Réinitialiser les valeurs du formulaire après la soumission réussie (si nécessaire)
        setCharacterData({
          className: "",
          lastName: "",
          firstName: "",
          age: "",
          sex: "",
          affinity: "",
          lore: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'insertion du personnage :", error);
      });
  };

  return (
    <div className="formGlobalContainer">
      <h1 className="formMainTitle">Formulaire de création de personnage</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <label className="formLabel">
          <select
            className="formSelect"
            name="classrole_id"
            value={characterData.classrole_id}
            onChange={handleChange}
            required
          >
            <option className="formOption" value="">
              Veuillez choisir votre classe
            </option>
            <option className="formOption" value="1">
              Druide
            </option>
            <option className="formOption" value="sorcier">
              Sorcière
            </option>
            <option className="formOption" value="barbare">
              Barbare
            </option>
            <option className="formOption" value="nécromancien">
              Nécromancien
            </option>
            <option className="formOption" value="voleur">
              Voleuse
            </option>
            <option className="formOption" value="paladin">
              Paladin
            </option>
          </select>
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInput"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={characterData.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInput"
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={characterData.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInput"
            type="number"
            name="age"
            placeholder="Âge"
            value={characterData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInput"
            type="text"
            name="sex"
            placeholder="Sexe"
            value={characterData.sex}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInput"
            type="text"
            name="affinity"
            placeholder="Affinité"
            value={characterData.affinity}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="formLabel">
          <input
            className="formInputLore"
            type="text"
            name="lore"
            placeholder="Lore"
            value={characterData.lore}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit" className="formBtn">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
