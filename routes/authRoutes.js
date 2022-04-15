const { Router } = require('express')
const authRouter = Router()
const authController = require('../controllers/authController')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

authRouter.get('/signup', authController.signup_get)
authRouter.post('/signup', authController.signup_post)
authRouter.get('/login', authController.login_get)
authRouter.post('/login', authController.login_post)

module.exports = authRouter

