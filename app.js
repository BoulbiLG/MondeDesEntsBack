const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const inscription = require('./route/compte/inscription');
const connexion = require('./route/compte/connexion');
const posterCommentaire = require('./route/commentaire/posterCommentaire');
const recupererCommentaire = require('./route/commentaire/recupererCommentaire');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://Cazeneuve:VoRL8AkWCaI2EKHo@mongoprojet.i1jwgpa.mongodb.net/MondeDesEnts?retryWrites=true&w=majority&appName=MongoProjet', {
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
