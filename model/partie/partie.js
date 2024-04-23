const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partie = new Schema({
  pseudo: { type: String, required: true },
  nomPartie: { type: String, required: true },
}, { timestamps: true });

const Partie = mongoose.model('partie', partie);

module.exports = Partie;
