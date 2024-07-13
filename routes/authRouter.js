import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
const router = Router();

router.post('/signup', validateRegisterInput, register);
router.post('/signin', validateLoginInput, login);
router.get('/logout', logout);

export default router;
