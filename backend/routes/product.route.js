import express from 'express';
import { CreateProduct, DeleteProductById, GetAllProducts, GetProductById, UpdateProductById } from '../controller/v1/Product.controller';
import { checkRole, validateAccessToken } from '../middleware/GenerationToken';

const router = express.Router();    

router.get('/all',validateAccessToken,checkRole('admin'),GetAllProducts)
router.get('/:id',validateAccessToken,checkRole('admin'),GetProductById)
router.post('/create',validateAccessToken,checkRole('admin'),CreateProduct)
router.patch('/update/:id',validateAccessToken,checkRole('admin'),UpdateProductById)
router.delete('/delete/:id',validateAccessToken,checkRole('admin'),DeleteProductById)

export default router;