const express = require('express');
const gameController = require('./gameControler/gameControler'); 
const configJogo = require('../config/configJogo');
const router = express.Router();

// Rota para obter todos os jogos
router.get('/configJogo', configJogo.getAllGames);

// Rota para obter um jogo por ID
router.get('/games/:id', gameController.getGameById);

// Rota para criar um novo jogo
router.post('/games', gameController.createGame);

// Rota para atualizar um jogo por ID
router.put('/games/:id', gameController.updateGame);

// Rota para excluir um jogo por ID
router.delete('/games/:id', gameController.deleteGame);

module.exports = router;
