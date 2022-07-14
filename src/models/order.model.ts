import IOrder from '../interfaces/order.interface';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

const searchOrder = async (): Promise<IOrder[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [orders] = await connection.execute(query);
  return orders as IOrder[];
};

const searchProduct = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

const orderWithProduct = async (): Promise<IOrder[]> => {
  const orders = await searchOrder();
  const products = await searchProduct();

  const allOrdersProduct = orders.map((order) => {
    const productsIds = products.filter((product) => order.id === product.orderId)
      .map((prodId) => prodId.id);

    return {
      ...order,
      productsIds,
    };
  });

  return allOrdersProduct as IOrder[];
};

export default {
  searchOrder,
  searchProduct,
  orderWithProduct,
}; 