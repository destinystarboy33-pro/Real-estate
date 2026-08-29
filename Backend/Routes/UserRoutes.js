import express from 'express'
import {register, login, forgotPassword, resetPassword, verifyEmail, verifyResetCode} from '../Controller/AuthController.js'

const Router = express.Router()
Router.post('/register', register)
Router.post('/login', login)
Router.post('/verify-email', verifyEmail)
Router.post('/forgot-password', forgotPassword)
Router.post('/verify-reset-code', verifyResetCode)
Router.post('/reset-password', resetPassword)

export default Router