const { Pool } = require("pg");

const pool = new Pool({
  user: "oeplhvyr",
  host: "surus.db.elephantsql.com",
  database: "oeplhvyr",
  password: "i5VNsxF5aGKrkDcZ6ubwZnwihD6DaVJt",
  port: 5432,
});

console.log("Connexion réussie à la base de données");

const sql_create = `CREATE TABLE IF NOT EXISTS Livres (
  Livre_ID SERIAL PRIMARY KEY,
  Titre VARCHAR(100),
  Auteur VARCHAR(100),
  Commentaires TEXT
);`;

pool.query(sql_create, [], (err, result) => {
  if (err) {
    return console.error(err.message);
  }
});

// Alimentation de la table
const sql_insert = `INSERT INTO Livres (Livre_ID, Titre, Auteur, Commentaires) VALUES
 (1, 'Mrs. Bridge', 'Evan S. Connell', 'Premier de la série'),
 (2, 'Mr. Bridge', 'Evan S. Connell', 'Second de la série'),
 (3, 'L''ingénue libertine', 'Colette', 'Minne + Les égarements de Minne')
ON CONFLICT DO NOTHING;`;
pool.query(sql_insert, [], (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  const sql_sequence =
    "SELECT SETVAL('Livres_Livre_ID_Seq', MAX(Livre_ID)) FROM Livres;";
  pool.query(sql_sequence, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
  });
});

module.exports = pool;
