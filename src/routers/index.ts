import { Router } from 'express';
import routerProduct from './product.router';

const routers = Router();

routers.use(routerProduct);

export default routers;