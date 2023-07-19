const AbstractManager = require("./AbstractManager");

class CharacterficheManager extends AbstractManager {
  constructor() {
    super({ table: "characterfiche" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  add(characterfiche) {
    return this.database.query(
      `INSERT INTO characterfiche (classrole_id, lastname, firstname, age, sex, affinity, lore)
      VALUES
        ((SELECT id FROM classrole WHERE name = ?), ?, ?, ?, ?, ?, ?)`,
      [
        characterfiche.classrole,
        characterfiche.lastname,
        characterfiche.firstname,
        characterfiche.age,
        characterfiche.sex,
        characterfiche.affinity,
        characterfiche.lore,
      ]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = CharacterficheManager;
