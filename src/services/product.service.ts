import modelsProduct from '../models/product.model';
import IProduct from '../interfaces/product.interface';

const getAllProducts = (): Promise<IProduct[]> => modelsProduct.getAllProducts();

const createProduct = async (product: Omit<IProduct, 'orderId'>): Promise<IProduct> => {
  const { insertId } = await modelsProduct.createProduct(product);
  
  const addProduct = product;
  addProduct.id = insertId;
  
  return addProduct as IProduct;
};
  
export default { getAllProducts, createProduct }; 