import express from 'express'
import { checkRole, validateAccessToken } from '../middleware/GenerationToken'
import { AddCategory, DeleteCategory, GetAllCategory, GetCategoryById, UpdateCategory } from '../controller/v1/Category.controller'


const router = express.Router()

router.get('/all',validateAccessToken,checkRole('admin'),GetAllCategory)
router.get('/:id',validateAccessToken,checkRole('admin'),GetCategoryById)
router.post('/create',validateAccessToken,checkRole('admin'),AddCategory)
router.patch('/update/:id',validateAccessToken,checkRole('admin'),UpdateCategory)
router.delete('/delete/:id',validateAccessToken,checkRole('admin'),DeleteCategory)

export default router