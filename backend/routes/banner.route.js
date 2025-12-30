import express from 'express'
import { AddBanner, DeleteBanner, GetAllBanner } from '../controller/v1/Banner.controller'
import { validateAccessToken } from '../middleware/GenerationToken'

const router = express.Router()

router.get('/all',validateAccessToken,GetAllBanner)
router.post('/create',validateAccessToken,AddBanner)
router.delete('/delete/:id',validateAccessToken,DeleteBanner)

export default router