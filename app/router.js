// importe le module Express.
const express = require("express");
const router = express.Router();

// Ensuite vient une fonction pour répondre aux requêtes GET pointant sur la racine du site.
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
