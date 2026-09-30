import express from "express";


const app= express();
const port = 3000;
const Products = [
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
// midleware pour parser le corps des requêtes en JSON
// https://expressjs.com/en/4x/api.html#express.json

app.use(express.json());



// ==============================
// 1. LISTER LES PRODUITS
// GET /products
// ==============================

app.get("/products", (req, res) => {
  res.status(200).json(Products);
});


// ==============================
// 2. CONSULTER UN PRODUIT
// GET /products/:id
// ==============================

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0 || id >= Products.length) {
    return res.status(404).json({
      message: "Produit introuvable"
    });
  }

  res.status(200).json(Products[id]);
});


// ==============================
// 3. AJOUTER UN PRODUIT
// POST /products
// ==============================
// Ajouter un nouveau produit à la liste
// Vérification des champs obligatoires
// Ajout du produit à la liste
// Réponse avec le produit ajouté
//== ==============================
app.post("/products", (req, res) => {
  const { nom, description, prix, categorie } = req.body;

  if (!nom || !description || prix === undefined || !categorie) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires"
    });
  }

  const nouveauProduit = {
    nom,
    description,
    prix,
    categorie
  };

  Products.push(nouveauProduit);

  res.status(201).json(nouveauProduit);
});


// ==============================
// 4. MODIFIER UN PRODUIT
// PATCH /products/:id
// ==============================
/**
 * Permet de modifier un produit existant en utilisant la méthode PATCH.
 * Les champs à modifier sont passés dans le corps de la requête.
 * Si un champ n'est pas fourni, il ne sera pas modifié.
 */
app.patch("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0 || id >= Products.length) {
    return res.status(404).json({
      message: "Produit introuvable"
    });
  }

  const produit = Products[id];

  if (req.body.nom !== undefined) {
    produit.nom = req.body.nom;
  }

  if (req.body.description !== undefined) {
    produit.description = req.body.description;
  }

  if (req.body.prix !== undefined) {
    produit.prix = req.body.prix;
  }

  if (req.body.categorie !== undefined) {
    produit.categorie = req.body.categorie;
  }

  res.status(200).json(produit);
});


// ==============================
// 5. REMPLACER UN PRODUIT
// PUT /products/:id
// ==============================
/** 
 * Permet de remplacer un produit existant en utilisant la méthode PUT.
 * Tous les champs du produit doivent être fournis dans le corps de la requête.
 * Si un champ est manquant, une erreur 400 sera renvoyée.

 */
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0 || id >= Products.length) {
    return res.status(404).json({
      message: "Produit introuvable"
    });
  }

  const { nom, description, prix, categorie } = req.body;

  if (!nom || !description || prix === undefined || !categorie) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires"
    });
  }

  Products[id] = {
    nom,
    description,
    prix,
    categorie
  };

  res.status(200).json(Products[id]);
});


// ==============================
// 6. SUPPRIMER UN PRODUIT
// DELETE /products/:id
// ==============================
/**
 * Permet de supprimer un produit existant en utilisant la méthode DELETE.
 * L'ID du produit à supprimer est passé dans l'URL.
 * Si le produit n'existe pas, une erreur 404 sera renvoyée.
 */

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
// Vérification de l'ID du produit à supprimer  
  if (id < 0 || id >= Products.length) {  
    return res.status(404).json({
      message: "Produit introuvable"
    });
  }
  // Suppression du produit de la liste
  const produitSupprime = Products.splice(id, 1);
// Réponse avec le produit supprimé
  res.status(200).json({
    message: "Produit supprimé",
    produit: produitSupprime[0]
  });
});


// ==============================
// LANCEMENT DU SERVEUR
// ==============================
// Démarrage du serveur sur le port spécifié 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/**
 * var : portée globale ou fonction (ne plus utilisée)
 *  let : portée bloc (si const fait planter le code, utiliser let)
 *  const : portée bloc et valeur constante (a utilser par defaut)
 * 
 */