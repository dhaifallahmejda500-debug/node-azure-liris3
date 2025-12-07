 const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Azure fournit automatiquement le bon port

app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenue sur mon site Node.js hébergé sur Azure</h1>
    <p>Nom : yssine</p>
  `);
});

// ICI : écouter sur "port" et NON sur 4000
app.listen(port, () => {
  console.log(`Application en cours d'exécution sur le port ${port}`);
});

