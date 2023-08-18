const express = require('express');
const gameController = require('./gameControler/gameControler'); 
const configJogo = require('../config/configJogo');
const router = express.Router();


router.get('/configJogo', configJogo.getAllGames);


router.get('/games/:id', gameController.getGameById);


router.post('/games', gameController.createGame);


router.put('/games/:id', gameController.updateGame);


router.delete('/games/:id', gameController.deleteGame);

module.exports = router;
