const dataMapper = require("./dataMapper");

const editController = {
  modif: (req, res) => {
    const idLivre = req.params.id;
    dataMapper.sqlRequestModif(idLivre, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("edit", { model: result.rows[0] });
    });
  },
  modifPost: (req, res) => {
    const id = req.params.id;
    const book = [req.body.titre, req.body.auteur, req.body.commentaires, id];
    dataMapper.sqlRequestUpdate(book, (err, res) => {
      if (err) {
        return console.error(err.message);
      }
      res.redirect("/livres");
    });
  },
};

module.exports = editController;
