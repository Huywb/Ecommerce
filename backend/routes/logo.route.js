import express from 'express'
import { validateAccessToken } from '../middleware/GenerationToken'
import { ActiveLogo, AddLogo, DeleteLogo, GetAllLogo } from '../controller/v1/Logo.controller'

const router = express.Router()

router.get('/all',validateAccessToken,GetAllLogo)
router.post('/create',validateAccessToken,AddLogo)
router.delete('/delete/:id',validateAccessToken,DeleteLogo)
router.patch('/active/:id',validateAccessToken,ActiveLogo)
export default router