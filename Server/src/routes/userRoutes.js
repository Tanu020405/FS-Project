import express from 'express';
import { registerUser, loginUser,} from '../controllers/authController.js';
import e from 'cors';

const router = express.Router();

// User registration route
router.post('/register', registerUser);
// User login route
router.post('/login', loginUser);

export default router;