const router = require('express').Router()
const { WebinarController, AuthController } = require('../controllers')

// admin only
router.delete('/delete-webinar/:id', AuthController.authenticationJWT, WebinarController.deleteWebinar)
router.patch('/edit-webinar/:id', AuthController.authenticationJWT, WebinarController.updateWebinar)
router.post('/add-webinar', AuthController.authenticationJWT, WebinarController.postWebinar)

// admin, user, and non user
router.get('/:id', WebinarController.getWebinarById)
router.get('/', WebinarController.getWebinar)

module.exports = router