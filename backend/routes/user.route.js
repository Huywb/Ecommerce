import express from 'express';
import { AddUser, DeleteUserById, GetAllUsers, GetUserById, Login, Register, UpdateUserById } from '../controller/v1/User.controller.js';
import { validateAccessToken } from '../middleware/GenerationToken.js';
import upload from '../config/multer.js';


const router = express.Router();

router.post('/login', Login)
router.post('/register', Register)
router.get('/all', validateAccessToken, GetAllUsers)
router.get('/:id', validateAccessToken, GetUserById)
router.patch('/update/:id', validateAccessToken,upload.single('file'), UpdateUserById)
router.delete('/delete/:id', validateAccessToken, DeleteUserById)
router.post('/addUser',validateAccessToken,upload.single('file'),AddUser)

export default router;