const express = require('express');

// Crear servidor
const app = express();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola desde mi servidor...')
})

// arrancar la app
app.listen(PORT, () => {
    console.log(`Servidor funcionando desde el puerto ${PORT}!!`);    
})

