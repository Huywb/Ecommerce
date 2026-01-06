import express from 'express'
import { AddToCart } from '../controller/v1/Cart.controller'
import { validateAccessToken } from '../middleware/GenerationToken'

const router = express.Router()

router.post('/add',validateAccessToken,AddToCart)

export default router