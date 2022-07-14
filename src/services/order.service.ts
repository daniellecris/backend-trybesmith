import IOrder from '../interfaces/order.interface';
import Order from '../models/order.model';

const getAllOrders = async () => {
  const orders = await Order.orderWithProduct();

  return orders as IOrder[];
};

export default { getAllOrders }; 