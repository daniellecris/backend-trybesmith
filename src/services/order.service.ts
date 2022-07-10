import Order from '../models/order.model';

const getAllOrders = async () => {
  const orders = await Order.searchOrder();
  
  const orderProducts = orders
    .map((order) => ({ ...order, productsIds: [order.productIds], 
    }));

  return orderProducts;
};

export default { getAllOrders }; 