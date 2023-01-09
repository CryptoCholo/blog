/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const passport = require('passport');
const jwt = require('jsonwebtoken');

const AuthController = require('../controllers/auth.controllers');
const { signUpValidator, loginValidator } = require('../validators/user.validator');

const authRouter = express.Router();

authRouter.post('/signup', signUpValidator, passport.authenticate('signup', { session: false }), AuthController.signup)

authRouter.post('/login', loginValidator, async (req, res, next) => passport.authenticate('login', (err, user, info) => {
    AuthController.login(req, res, { err, user, info})
})(req, res, next))

module.exports = authRouter;