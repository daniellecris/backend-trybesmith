import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?)',
    [product.name, product.amount, product.orderId || null],
  );

  return result;
};

export default { getAllProducts, createProduct };