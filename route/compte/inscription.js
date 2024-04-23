const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Membre = require('../../model/compte/membre');

router.post('/inscription', async (req, res) => {
  const { pseudo, mdp } = req.body;

  try {
    // Vérifie si le membre existe déjà
    const existingMembre = await Membre.findOne({ pseudo });

    if (existingMembre) {
      return res.status(400).json({ message: 'Ce pseudo est déjà pris.' });
    }

    // Crypte le mot de passe
    const hashedPassword = await bcrypt.hash(mdp, 10);

    // Crée un nouveau membre avec le mot de passe crypté
    const newMembre = new Membre({
      pseudo,
      mdp: hashedPassword,
    });

    // Enregistre le membre dans la base de données
    await newMembre.save();

    res.status(201).json({ message: 'Membre créé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;