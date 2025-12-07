const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Application Insights
const appInsights = require('applicationinsights');
if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
  appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();
}

// Modèle utilisateur
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String
}));

app.get('/', (req, res) => {
  res.send('<h1>TP Azure : CosmosDB (Mongo) + KeyVault + Insights</h1>');
});

// Ajouter un utilisateur
app.get('/add', async (req, res) => {
  const user = new User({
    name: "Test User",
    email: "test@example.com"
  });
  await user.save();
  res.send("Utilisateur ajouté !");
});

// Lister utilisateurs
app.get('/list', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Connexion à MongoDB (Cosmos)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connexion MongoDB OK"))
  .catch(err => console.error(err));

app.listen(port, () => console.log(`Écoute sur le port ${port}`));
