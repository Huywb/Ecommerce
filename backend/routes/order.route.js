import express from 'express'
import { validateAccessToken } from '../middleware/GenerationToken'
import { AddOrder, DeleteOrderByid, GetAllOrder, GetOrderById, UpdateOrderById } from '../controller/v1/Order.controller'

const router = express.Router()

router.get('/all',validateAccessToken,GetAllOrder)
router.get('/:id',validateAccessToken,GetOrderById)
router.post('/create',validateAccessToken,AddOrder)
router.patch('/update/:id',validateAccessToken,UpdateOrderById)
router.delete('/delete/:id',validateAccessToken,DeleteOrderByid)

export default router