const express = require('express');
const router = express.Router();
const Commentaire = require('../../model/commentaire/commentaire');

// Route pour récupérer les commentaires par ID
router.get('/recupererCommentaire/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Recherche de tous les commentaires avec l'ID spécifié
    const commentaires = await Commentaire.find({ id });

    res.status(200).json(commentaires);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
