import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProducts from '../middlewares/validateProducts';

const routerProduct = Router();

routerProduct.get('/products', productController.getController);
routerProduct.post('/products', validateProducts, productController.createController);

export default routerProduct; 
