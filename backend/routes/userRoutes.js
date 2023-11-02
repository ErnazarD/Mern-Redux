import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';
// I did this change from personal computer and personal account to remote repo
router.post('/auth', authUser);

export default router;