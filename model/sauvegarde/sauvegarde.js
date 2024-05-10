const mongoose = require('mongoose');
/*
const sauvegarde = new mongoose.Schema({
  musique: [String],
  base: [String],
  ennemi: [String],
  onche: [String],
  cinematique: [String],
  combat: [String],
  deplacement: [String],
  miniMap: [String],
  parametre: [String],
  inventaire: [String],
  asterix: [String],
  blondin: [String],
  celestin: [String],
  chevalierMaudit: [String],
  cleamolette: [String],
  equipe: [String],
  franckDubosc: [String],
  jouhn_ingroum: [String],
  leoben: [String],
  moth: [String],
  obelix: [String],
  sneaky: [String],
  volutes: [String],
  zosterae: [String],
  foretENTstockage: [String],
  oncheStockage: [String],
  pseudo: String,
  nomPartie: String,
});
*/

const sauvegarde = new mongoose.Schema({
  musique: [String],
  base: [String],
  ennemi: [String],
  deplacement: [String],
  miniMap: [String],
  parametre: [String],
  pseudo: String,
  nomPartie: String,
});

const Sauvegarde = mongoose.model('sauvegarde', sauvegarde);

module.exports = Sauvegarde;
