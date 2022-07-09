import { Router } from 'express';
import productController from '../controllers/product.controller';

const routers = Router();

routers.use('/products', productController);

export default routers;