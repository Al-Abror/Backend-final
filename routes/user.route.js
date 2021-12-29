const router = require('express').Router()
const { UserController, AuthController } = require('../controllers')

// login
router.post('/login', AuthController.loginUser)

// user
router.post('/register', UserController.registerUser)
router.patch('/update-user/:id', AuthController.authenticationJWT, UserController.updateUser)

module.exports = router