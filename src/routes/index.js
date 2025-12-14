import express from 'express';
import authRoutes from './auth.route.js';
import ConversationRoutes from './conversation.route.js';
import MessageRoutes from './message.route.js';
import userROutes from './user.route.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/conversation', ConversationRoutes);
router.use('/message', MessageRoutes);
router.use('/user', userROutes);


export default router;
