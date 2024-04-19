const { Router } = require('express');
const { getFavoritos,novoFavorito,removeFavorito } = require('../controladores/favoritos')
const router = Router();

router.get('/', getFavoritos)
router.post('/:id', novoFavorito)
router.delete('/:id', removeFavorito)

module.exports = router