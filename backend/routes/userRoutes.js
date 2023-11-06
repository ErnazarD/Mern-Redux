import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';    
// I did this change from personal computer and personal account to remote repo
router.post('/', authUser);
router.post('/registerUser', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;