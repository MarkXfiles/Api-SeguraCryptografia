const express = require('express');
const router = express.Router();

let users = []; // Lista de usuarios (en memoria)

// Ruta para obtener todos los usuarios (GET)
router.get('/users', (req, res) => {
    res.json(users);
});

// Ruta para agregar un nuevo usuario (POST)
router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

module.exports = router;