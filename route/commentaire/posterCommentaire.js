const express = require('express');
const router = express.Router();
const Commentaire = require('../../model/commentaire/commentaire');

// Route pour poster un commentaire
router.post('/posterCommentaire', async (req, res) => {
  const { texte, pseudo, id } = req.body;

  try {
    // Récupération de la date actuelle sans formatage
    const date = new Date();

    // Création du nouveau commentaire à enregistrer
    const nouveauCommentaire = new Commentaire({
      texte,
      pseudo,
      date, // On passe directement l'objet Date
      id,
    });

    // Enregistrement du commentaire dans la base de données
    await nouveauCommentaire.save();

    res.status(201).json({ message: 'Commentaire ajouté avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du commentaire:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
