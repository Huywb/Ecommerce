import express from 'express'
import { AddBanner, DeleteBanner, GetAllBanner } from '../controller/v1/Banner.controller'
import { checkRole, validateAccessToken } from '../middleware/GenerationToken'

const router = express.Router()

router.get('/all',validateAccessToken,checkRole('admin'),GetAllBanner)
router.post('/create',validateAccessToken,checkRole('admin'),AddBanner)
router.delete('/delete/:id',validateAccessToken,checkRole('admin'),DeleteBanner)

export default router