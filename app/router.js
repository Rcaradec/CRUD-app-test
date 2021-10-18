// importe le module Express.
const express = require("express");
const router = express.Router();
const livreController = require("./livreController");
const editController = require("./editController");

// Ensuite vient une fonction pour répondre aux requêtes GET pointant sur la racine du site.
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/data", (req, res) => {
  const test = {
    titre: "Test",
    items: ["un", "deux", "trois", "soleil"],
  };
  res.render("data", { model: test });
});
module.exports = router;

router.get("/livres", livreController.livreHandle);

router.get("/edit/:id", editController.modif);

router.post("/edit/:id", editController.modifPost);
