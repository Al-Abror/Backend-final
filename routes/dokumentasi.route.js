const router = require('express').Router()
const { KategoriController, AuthController } = require('../controllers')

// admin only
router.patch('/edit-dokumentasi/:id', AuthController.authenticationJWT, KategoriController.updateKategori)
router.delete('/delete-dokumentasi/:id', AuthController.authenticationJWT, KategoriController.deleteKategori)
router.post('/add-dokumentasi',  AuthController.authenticationJWT, KategoriController.postKategori)

// admin, user, and non user
router.get('/:id', KategoriController.getKategoriById)
router.get('/', KategoriController.getKategori)

module.exports = router