const router = require('express').Router()
const { TestiPsikologController, AuthController } = require('../controllers')

// admin only
router.patch('/edit-testiPsikolog/:id', AuthController.authenticationJWT, TestiPsikologController.updateTestiPsikolog)
router.delete('/delete-testiPsikolog/:id', AuthController.authenticationJWT, TestiPsikologController.deleteTestiPsikolog)
router.post('/add-testiPsikolog',  AuthController.authenticationJWT, TestiPsikologController.postTestiPsikolog)

// admin, user, psikolog and non user
router.get('/:id', TestiPsikologController.getTestiPsikologById)
router.get('/', TestiPsikologController.getTestiPsikolog)

module.exports = router