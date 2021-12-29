const router = require('express').Router()
const { ArtikelController, AuthController } = require('../controllers')

// admin only
router.patch('/edit-artikel/:id', AuthController.authenticationJWT, ArtikelController.updateArtikel)
router.delete('/delete-artikel/:id', AuthController.authenticationJWT, ArtikelController.deleteArtikel)
router.post('/add-artikel',  AuthController.authenticationJWT, ArtikelController.postArtikel)

// admin, user, and non user
router.get('/:id', ArtikelController.getArtikelById)
router.get('/', ArtikelController.getArtikel)

module.exports = router