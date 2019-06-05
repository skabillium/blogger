import express from 'express'

import checkAuth from '../middleware/check-auth'
import validateUser from '../middleware/validate-user'

import * as UserController from '../controllers/users'

const router  = express.Router();

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.delete('/:userId', checkAuth, validateUser, UserController._delete);

export default router