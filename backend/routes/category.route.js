import express from 'express'
import { validateAccessToken } from '../middleware/GenerationToken'
import { AddCategory, GetCategoryById, UpdateCategory } from '../controller/v1/Category.controller'


const router = express.Router()

router.get('/all',validateAccessToken,GetAllCategory)
router.get('/:id',validateAccessToken,GetCategoryById)
router.post('/create',validateAccessToken,AddCategory)
router.patch('/update/:id',validateAccessToken,UpdateCategory)
router.delete('/delete/:id',validateAccessToken,DeleteCategory)

export default router