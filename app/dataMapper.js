const pool = require("./database");

const dataMapper = {
  sqlRequest: (callback) => {
    const dbQuery = "SELECT * FROM Livres ORDER BY Titre";
    pool.query(dbQuery, callback);
  },
  sqlRequestModif: (idLivre, callback) => {
    const dbQuery = "SELECT * FROM Livres WHERE Livre_id = $1";
    pool.query(dbQuery, [idLivre], callback);
  },
  sqlRequestUpdate: (book, callback) => {
    const updateQuery =
      "UPDATE Livres SET Titre = $1, Auteur = $2, Commentaires = $3 WHERE (Livre_ID = $4);";
    pool.query(updateQuery, book, callback);
  },
};

module.exports = dataMapper;
