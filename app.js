const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Importar las rutas desde userRoutes.js

app.use(express.json()); // Para poder leer el cuerpo de las solicitudes en formato JSON
app.use('/api', userRoutes); // Usar las rutas bajo el prefijo /api

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('API running on http://localhost:3000');
});