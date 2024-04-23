const express = require('express');
const router = express.Router();
const Partie = require('../../model/partie/partie');

// Route pour créer une nouvelle partie
router.post('/creerPartie', async (req, res) => {
  const { pseudo, nomPartie } = req.body;
  try {
    // Créez une nouvelle partie avec les données reçues
    const nouvellePartie = new Partie({
      pseudo,
      nomPartie,
      // Ajoutez d'autres champs nécessaires pour votre partie
    });

    // Enregistrez la nouvelle partie dans la base de données
    await nouvellePartie.save();

    res.status(201).json({ message: 'Partie créée avec succès.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;