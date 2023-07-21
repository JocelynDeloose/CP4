import "../../utils.scss";
import "./Story.scss";

export default function Story() {
  return (
    <div className="storyGlobalContainer">
      <h1 className="storyMainTitle">Le Lore</h1>
      <div className="storyOriginContainer">
        <h3 className="storySecondTitle">
          * Les origines de Diablo et la création du Sanctuaire
        </h3>
        <p className="storyOriginText">
          Tout commence avec Anu, un être cristallin, et Tathamet, un dragon à
          sept têtes, dont le combat engendre l’apparition de trois mondes : les
          Cieux, les Enfers Ardents et le Pandémonium. Les Cieux sont peuplés
          d’anges, tandis que les Enfers Ardents abritent les démons. Au-dessus
          de ces deux mondes se trouve le Pandémonium, terrain d’affrontements
          entre les forces du Bien et du Mal. Pour se débarrasser de ses aspects
          maléfiques, Anu se sépare de ces derniers, qui forment Tathamet. Les
          deux entités s’affrontent sans relâche, mais aucune ne parvient à
          vaincre l’autre. De leur lutte naît l’univers, avec les trois mondes
          mentionnés précédemment. Suite à la disparition de la Pierre-Monde, un
          quatrième monde voit le jour : le Sanctuaire. Ce monde est créé par
          Inarius, un ange rebelle qui souhaite échapper à la guerre éternelle
          entre les anges et les démons. Inarius s’empare de la Pierre-Monde et
          la cache dans une dimension parallèle, permettant ainsi la naissance
          du Sanctuaire.
        </p>
      </div>
      <div className="storyFirstWar">
        <h3 className="storySecondTitle">
          * L’influence croissante des démons et la guerre du péché
        </h3>
        <p className="storyFirstWarText">
          Alors que le Sanctuaire semble vivre paisiblement, un mage parvient à
          invoquer un démon des Enfers Ardents. Cette invocation révèle la
          présence du Sanctuaire aux forces démoniaques, qui envoient leurs
          agents pour corrompre les humains. C’est ainsi que naît le Culte des
          Trois, une religion centrée autour des démons primordiaux Diablo,
          Mephisto et Baal.Face à cette menace, Inarius créé sa propre religion,
          la Cathédrale de la Lumière, dans l’espoir de contrer l’influence des
          démons. Cette situation déclenche la Guerre du Péché, une lutte
          psychologique entre les deux factions religieuses qui mine le moral
          des habitants du Sanctuaire.
        </p>
      </div>
    </div>
  );
}
