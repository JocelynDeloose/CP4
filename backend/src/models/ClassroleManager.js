const AbstractManager = require("./AbstractManager");

class ClassManager extends AbstractManager {
  constructor() {
    super({ table: "classrole" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  add(classrole) {
    return this.database.query(
      `INSERT INTO classrole (name, primary_stat, weapon, description, skills)
    VALUES (?, ?, ?, ?, ?);
    `,
      [
        classrole.name,
        classrole.primary_stat,
        classrole.weapon,
        classrole.description,
        classrole.skills,
      ]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = ClassManager;
