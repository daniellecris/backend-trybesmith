import { Router } from 'express';
import orderRouter from './order.router';
import routerProduct from './product.router';
import userRouter from './user.router';

const routers = Router();

routers.use(routerProduct);
routers.use(userRouter);
routers.use(orderRouter);

export default routers;