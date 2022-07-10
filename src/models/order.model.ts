import IOrder from '../interfaces/order.interface';
import connection from './connection';

const searchOrder = async (): Promise<IOrder[]> => {
  const [orders] = await connection
    .execute(
      `SELECT o.id, o.userId, p.id AS productIds
       FROM Trybesmith.Orders AS o
       JOIN Trybesmith.Products AS p
       ON o.id = p.orderId`,
    );
  return orders as IOrder[];
};

export default { searchOrder }; 