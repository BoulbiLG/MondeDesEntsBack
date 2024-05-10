const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const inscription = require('./route/compte/inscription');
const connexion = require('./route/compte/connexion');
const posterCommentaire = require('./route/commentaire/posterCommentaire');
const recupererCommentaire = require('./route/commentaire/recupererCommentaire');
const creerPartie = require('./route/partie/creerPartie');
const chargerPartie = require('./route/partie/chargerPartie');
const recupererPartie = require('./route/partie/recupererPartie');
const sauvegarder = require('./route/sauvegarde/sauvegarder');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://Cazeneuve:VoRL8AkWCaI2EKHo@mongoprojet.i1jwgpa.mongodb.net/?retryWrites=true&w=majority&appName=MongoProjet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Routes
app.use('/compte', inscription);
app.use('/compte', connexion);
app.use('/compte', posterCommentaire);
app.use('/compte', recupererCommentaire);
app.use('/compte', creerPartie);
app.use('/compte', chargerPartie);
app.use('/compte', recupererPartie);
app.use('/compte', sauvegarder);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
