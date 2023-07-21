/* eslint-disable camelcase */
import photoBarbare from "../../assets/images/classbarbare.jpg";
import photoDruide from "../../assets/images/classdruide.jpg";
import photoSorcier from "../../assets/images/Diablo-4-Sorciere.jpg";
import photoNecro from "../../assets/images/classnecro.jpg";
import photoVoleur from "../../assets/images/voleuse.png";
import photoPaladin from "../../assets/images/classepaladin.jpeg";
import "./ShowClass.scss";

const classArray = [
  {
    id: 1,
    imagePp: `${photoDruide}`,
    name: "Druide",
    primary_stat: "Volonté",
    weapon: "Baton",
    description:
      "Le Druide est une classe très exotique, qui mélange les transformations animales, les invocations, et l'utilisation de sorts naturels ou terrestres.",
    skills:
      "Metamorphe (ours ou loup), frappe de la tempête, orage, appel de la nature",
  },
  {
    id: 2,
    imagePp: `${photoBarbare}`,
    name: "Barbare",
    primary_stat: "Force",
    weapon: "Hache a deux mains",
    description:
      "Le Barbare a un énorme point fort : sa puissance inégalée au corps à corps. Parmi toutes les classes de personnages, le Barbare est la plus adaptée pour infliger des dégâts en mêlée, et il dispose de nombreux outils pour faire un carnage.",
    skills:
      "Frappe atlas, appel des anciens, fureur du guerrier, cri de terreur, marteau des anciens",
  },
  {
    id: 3,
    imagePp: `${photoSorcier}`,
    name: "Sorcière",
    primary_stat: "Intelligence",
    weapon: "Baguette",
    description:
      "Fier utilisateur de la magie élémentaire, le sorcier se distingue des autres classes par sa capacité à déferler les éléments feu, glace et foudre sur ses ennemis.",
    skills:
      "Boule de feu, nova de givre, blizzard, météore, chaine d'éclairs, tonnerre, prison de glace, mur de feu, éclair paralisante",
  },
  {
    id: 4,
    imagePp: `${photoNecro}`,
    name: "Nécromancien",
    primary_stat: "Intelligence",
    weapon: "Faux",
    description:
      "Le nécromancien s'amuse avec la mort, il ramène des cadavres à la vie et les fait ses battres à sa place, sa magie noire et puissante.",
    skills:
      "Malediction, guerrier squelette, mage squellette, explosion macabre, armée des morts",
  },
  {
    id: 5,
    imagePp: `${photoVoleur}`,
    name: "Voleuse",
    primary_stat: "Dextérité",
    weapon: "Dagues",
    description:
      "Le voleur est aussi fourbe que dangereux, tapi dans l'ombre il exécute ses adversaires sans laisser de trace. Si vous pensiez qu'il vous laissera accès au butin, vous rêvez...",
    skills:
      "Lame double, invisibilité, coup sournois, assassinat, larcin, duperie, tourbillon de lame",
  },
  {
    id: 6,
    imagePp: `${photoPaladin}`,
    name: "Paladin",
    primary_stat: "force",
    weapon: "fléau",
    description:
      "Le Paladin est un champion de la Lumière et de la justice, prêt à affronter les ténèbres pour protéger les innocents et restaurer l'équilibre dans le monde tourmenté de Diablo",
    skills:
      "Lumière aveuglante, ameno, expiation, marteau béni, lois de la vaillance, justice",
  },
];

function ShowClass() {
  return (
    <div className="showClassSpace">
      <h1 className="showClassMainTitle">Présentation des classes</h1>
      <div className="showClassGlobalContainer">
        {classArray.map((item) => (
          <div className="showClassContainer" key={item.name}>
            <img className="showClassImg" src={item.imagePp} alt="describe" />
            <h2 className="showClassSecondTitle">
              Nom de la classe: {item.name}
            </h2>
            <span className="showClassPrimStat">
              {" "}
              - Statistique principale : {item.primary_stat}
            </span>
            <span className="showClassWeapon">
              - Arme de prédilection : {item.weapon}
            </span>
            {/* <p className="showClassDescribe">{item.description}</p> */}
            <p className="showClassSkills"> - Sorts : {item.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowClass;
