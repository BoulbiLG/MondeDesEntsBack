const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentaire = new Schema({
  texte: { type: String, required: true },
  pseudo: { type: String, required: true },
  date: { type: Date, default: Date.now },
  id: { type: String, required: true },
});

const Commentaire = mongoose.model('commentaires', commentaire);

module.exports = Commentaire;
