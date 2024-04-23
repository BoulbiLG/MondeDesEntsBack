const express = require('express');
const router = express.Router();
const Partie = require('../../model/partie/partie');

// Route pour récupérer les parties par pseudo
router.get('/chargerPartie/:pseudo', async (req, res) => {
  const pseudo = req.params.pseudo;

  try {
    // Recherche des parties avec le pseudo donné
    const parties = await Partie.find({ pseudo });

    if (parties.length > 0) {
      res.status(200).json(parties);
    } else {
      res.status(404).json({ message: 'Aucune partie trouvée pour ce pseudo.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
