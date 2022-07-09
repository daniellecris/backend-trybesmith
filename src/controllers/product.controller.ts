import { Request, Response } from 'express';
import productService from '../services/product.service';

const productController = async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

export default productController; 
