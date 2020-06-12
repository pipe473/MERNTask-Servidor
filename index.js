const express = require('express');
const conectarDB = require('./config/db');

// Crear servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la página principal
app.get('/', (req, res) => {
    res.send('Servidor para MERNTask Project...')
});

// arrancar la app
app.listen(PORT, () => {
    console.log(`Servidor funcionando desde el puerto ${PORT}!!`);    
});

