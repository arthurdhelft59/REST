import express from "express";

const app= express();
const port = 3000;
const produits = [
  {
    nom: "Ordinateur portable",
    description: "Ordinateur portable 15 pouces avec 16 Go de RAM",
    prix: 799.99,
    categorie: "Informatique"
  },
  {
    nom: "Smartphone",
    description: "Smartphone avec écran OLED et 128 Go de stockage",
    prix: 599.99,
    categorie: "Téléphonie"
  },
  {
    nom: "Casque Bluetooth",
    description: "Casque sans fil avec réduction de bruit",
    prix: 129.99,
    categorie: "Audio"
  },
  {
    nom: "Clavier mécanique",
    description: "Clavier mécanique RGB pour ordinateur",
    prix: 89.99,
    categorie: "Informatique"
  },
  {
    nom: "Souris sans fil",
    description: "Souris ergonomique sans fil",
    prix: 39.99,
    categorie: "Informatique"
  },
  {
    nom: "Montre connectée",
    description: "Montre connectée avec suivi de l'activité physique",
    prix: 199.99,
    categorie: "Accessoires"
  },
  {
    nom: "Enceinte Bluetooth",
    description: "Enceinte portable avec 12 heures d'autonomie",
    prix: 69.99,
    categorie: "Audio"
  },
  {
    nom: "Tablette",
    description: "Tablette 10 pouces avec 64 Go de stockage",
    prix: 299.99,
    categorie: "Informatique"
  },
  {
    nom: "Webcam HD",
    description: "Webcam Full HD avec microphone intégré",
    prix: 59.99,
    categorie: "Informatique"
  },
  {
    nom: "Batterie externe",
    description: "Batterie externe 20 000 mAh avec recharge rapide",
    prix: 34.99,
    categorie: "Accessoires"
  }
];

app.get("/products", (req, res) => {
  res.send("List of products");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});