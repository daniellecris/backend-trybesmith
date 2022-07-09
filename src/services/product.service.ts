import modelsProduct from '../models/product.model';
import IProduct from '../interfaces/product.interface';

const getAllProducts = (): Promise<IProduct[]> => modelsProduct.getAllProducts();

export default { getAllProducts }; 