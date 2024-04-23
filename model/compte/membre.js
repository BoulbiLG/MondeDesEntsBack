const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membre = new Schema({
  pseudo: { type: String, required: true, unique: true },
  mdp: { type: String, required: true },
});

const membres = mongoose.model('membres', membre);

module.exports = membres;
