const express = require('express');
const conectarDB = require('./config/db');

// Crear servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use( express.json({ extend: true }));


// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// Definir la página principal
app.get('/', (req, res) => {
    res.send('Servidor para MERNTask Project...')
});

// arrancar la app
app.listen(PORT, () => {
    console.log(`Servidor funcionando desde el puerto ${PORT}!!`);    
});

