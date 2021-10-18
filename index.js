// je déclare l utilisation des variables d environnement
require("dotenv").config();
const express = require("express");
const pool = require("./app/database");
// instancier un serveur Express.
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // <--- paramétrage du middleware afin de récupérer les valeurs postées par le req.body

const router = require("./app/router");

// app.use(express.static(path.join(__dirname)));
app.use(router);

// Ce serveur est ensuite démarré et attend les requêtes arrivant sur le port 3000. La fonction callback sert à afficher un message informatif lorsque le serveur est prêt à recevoir des requêtes.
app.listen(PORT, () => {
  console.log("Serveur démarré et à l'écoute sur (http://localhost:3000)");
});
