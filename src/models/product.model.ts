import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

const createProduct = async (product: Omit<IProduct, 'orderId'>): Promise<ResultSetHeader> => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return result;
};

export default { getAllProducts, createProduct };