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

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0 || id >= Products.length) {
    return res.status(404).json({
      message: "Produit introuvable"
    });
  }

  const produitSupprime = Products.splice(id, 1);

  res.status(200).json({
    message: "Produit supprimé",
    produit: produitSupprime[0]
  });
});


// ==============================
// LANCEMENT DU SERVEUR
// ==============================

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});