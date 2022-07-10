import express from 'express';
import orderController from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.get('/orders', orderController.getOrderController);

export default orderRouter; 