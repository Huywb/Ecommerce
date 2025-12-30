import express from 'express';
import { DeleteUserById, GetAllUsers, GetUserById, Login, Register, UpdateUserById } from '../controller/v1/User.controller';
import { validateAccessToken } from '../middleware/GenerationToken';


const router = express.Router();

router.post('/login', Login)
router.post('/register', Register)
router.get('/all', validateAccessToken, GetAllUsers)
router.get('/:id', validateAccessToken, GetUserById)
router.patch('/update/:id', validateAccessToken, UpdateUserById)
router.delete('/delete/:id', validateAccessToken, DeleteUserById)

export default router;