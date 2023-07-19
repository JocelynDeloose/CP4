-- database.sql

-- Création de la base de données
CREATE DATABASE diablo4;

-- Utilisation de la base de données
USE diablo4;

-- Création de la table "class"
CREATE TABLE classrole (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  primary_stat VARCHAR(20) NOT NULL,
  weapon VARCHAR(20) NOT NULL,
  `description` TEXT NOT NULL,
  skills TEXT NOT NULL
);

-- Insertion des données dans la table "class"
INSERT INTO classrole (id, name, primary_stat, weapon, `description`, skills)
VALUES
  (1, 'druide', 'volonté', 'baton', 'Le Druide est une classe très exotique, qui mélange les transformations animales, les invocations, et l\'utilisation de sorts naturels ou terrestres.', 'metamorphe (ours ou loup), frappe de la tempête, orage, appel de la nature'),
  (2, 'barbare', 'force', 'Hache a deux mains', 'Le Barbare a un énorme point fort : sa puissance inégalée au corps à corps. Parmi toutes les classes de personnages, le Barbare est la plus adaptée pour infliger des dégâts en mêlée, et il dispose de nombreux outils pour faire un carnage.', 'frappe atlas, appel des anciens, fureur du guerrier, cri de terreur, marteau des anciens'),
  (3, 'sorcier', 'intelligence', 'baguette', 'Fier utilisateur de la magie élémentaire, le sorcier se distingue des autres classes par sa capacité à déferler les éléments feu, glace et foudre sur ses ennemis.', 'boule de feu, nova de givre, blizzard, météore, chaine d\'éclairs, tonnerre, prison de glace, mur de feu, éclair paralisante'),
  (4, 'nécromancien', 'intelligence', 'faux', 'Le nécromancien s\'amuse avec la mort, il ramène des cadavres à la vie et les fait ses battres à sa place, sa magie noire et puissante.', 'malediction, guerrier squelette, mage squellette, explosion macabre, armée des morts'),
  (5, 'voleur', 'dextérité', 'dagues', 'Le voleur est aussi fourbe que dangereux, tapi dans l\'ombre il exécute ses adversaires sans laisser de trace. Si vous pensiez qu\'il vous laissera accès au butin, vous rêvez...', 'lame double, invisibilité, coup sournois, assassinat, larcin, duperie, tourbillon de lame');

-- Création de la table "characterfiche"
CREATE TABLE characterfiche (
  id INT AUTO_INCREMENT PRIMARY KEY,
  classrole_id INT NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  sex VARCHAR(10) NOT NULL,
  affinity VARCHAR(50) NOT NULL,
  lore TEXT NOT NULL,
  FOREIGN KEY (classrole_id) REFERENCES classrole (id)
);

-- Insertion des données dans la table "characterfiche"
-- Insertion des données dans la table "characterfiche"
INSERT INTO characterfiche (classrole_id, lastname, firstname, age, sex, affinity, lore)
VALUES
  (1, 'Lunacier', 'Eldoria', 185, 'Féminin', 'Nature', 'Eldoria Lunacier, une puissante druide, est née sous l''éclat de la lune. Elle communique avec les esprits de la nature et peut se métamorphoser en une créature majestueuse. Ses pouvoirs mystiques la guident pour protéger les forêts et la faune.'),
  (2, 'Rochefort', 'Grimbold', 250, 'Masculin', 'Fureur', 'Grimbold Rochefort, le barbare légendaire, est né dans les montagnes impitoyables. Sa hache à deux mains fend l''air et ses cris de terreur glacent le sang de ses ennemis. Entraîné par les anciens, il est déterminé à conquérir les terres sauvages.'),
  (3, 'Lysandria', 'Feuillevent', 120, 'Féminin', 'Feu', 'Lysandria Feuillevent, une sorcière prodigieuse, maîtrise la magie des éléments. Sa baguette invoque des boules de feu brûlantes et des blizzards glaciaux. Elle est la gardienne des secrets des anciens grimoires.'),
  (4, 'Nécrosombre', 'Samael', 500, 'Masculin', 'Nécromancie', 'Samael Nécrosombre, un sombre nécromancien, manie la magie noire avec maîtrise. Il lève une armée de morts-vivants, invoque des malédictions terrifiantes et se joue de la mort elle-même pour atteindre ses sombres desseins.'),
  (5, 'Silvandriel', 'Sylvari', 180, 'Féminin', 'Ombre', 'Silvandriel Sylvari, la voleuse énigmatique, se glisse dans l''obscurité comme une ombre silencieuse. Ses dagues acérées délivrent des coups sournois et ses talents de duperie la rendent insaisissable aux yeux des autres voleurs');
