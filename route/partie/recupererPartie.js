const express = require('express');
const router = express.Router();
const Partie = require('../../model/partie/partie');

// Route pour récupérer toutes les parties
router.get('/recupererPartie', async (req, res) => {
  try {
    // Récupérer toutes les parties
    const parties = await Partie.find();

    if (parties.length > 0) {
      res.status(200).json(parties);
    } else {
      res.status(404).json({ message: 'Aucune partie trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
