import { Router } from 'express';
import routerProduct from './product.router';
import userRouter from './user.router';

const routers = Router();

routers.use(routerProduct);
routers.use(userRouter);

export default routers;