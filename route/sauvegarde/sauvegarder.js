const express = require('express');
const router = express.Router();
const Sauvegarde = require('../../model/sauvegarde/sauvegarde');

router.post('/sauvegarder', async (req, res) => {
  const tableauSauvegarde = req.body;

  try {
    const nouvelleSauvegarde = new Sauvegarde(tableauSauvegarde);

    await nouvelleSauvegarde.save();

    console.log('Sauvegarde réussie:', nouvelleSauvegarde);
    res.status(200).json({ message: 'Sauvegarde réussie' });
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    res.status(500).json({ error: 'Erreur lors de la sauvegarde' });
  }
});

module.exports = router;
