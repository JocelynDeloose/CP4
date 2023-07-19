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
      SELECT classrole.id, ?, ?, ?, ?, ?, ?
      FROM classrole
      WHERE classrole.name = ?;
    `,
      [
        characterfiche.lastname,
        characterfiche.firstname,
        characterfiche.age,
        characterfiche.sex,
        characterfiche.affinity,
        characterfiche.lore,
        characterfiche.classRole.name,
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
