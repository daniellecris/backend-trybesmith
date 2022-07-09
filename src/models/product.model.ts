import IProduct from '../interfaces/product.interface';
import connection from './connection';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

export default { getAllProducts };