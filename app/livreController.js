const dataMapper = require("./dataMapper");

const livreController = {
  livreHandle: (req, res) => {
    dataMapper.sqlRequest((err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("livres", { model: result.rows });
    });
  },
};

module.exports = livreController;
