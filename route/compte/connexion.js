const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const membres = require('../../model/compte/membre');

// Route pour la connexion d'un membre
router.post('/connexion', async (req, res) => {
  const { pseudo, mdp } = req.body;

  try {
    // Recherche du membre par son pseudo
    const existingMembre = await membres.findOne({ pseudo });

    // Vérification si le membre existe
    if (!existingMembre) {
      return res.status(404).json({ message: 'Pseudo incorrect.' });
    }

    // Vérification si le mot de passe correspond
    const passwordMatch = await bcrypt.compare(mdp, existingMembre.mdp);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    // Le pseudo et le mot de passe correspondent, connexion réussie
    res.status(200).json({ message: 'Connexion réussie.' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
