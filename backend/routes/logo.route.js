import express from 'express'
import { checkRole, validateAccessToken } from '../middleware/GenerationToken'
import { ActiveLogo, AddLogo, DeleteLogo, GetAllLogo } from '../controller/v1/Logo.controller'

const router = express.Router()

router.get('/all',checkRole('admin'),validateAccessToken,GetAllLogo)
router.post('/create',checkRole('admin'),validateAccessToken,AddLogo)
router.delete('/delete/:id',checkRole('admin'),validateAccessToken,DeleteLogo)
router.patch('/active/:id',checkRole('admin'),validateAccessToken,ActiveLogo)
export default router