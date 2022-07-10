import { Request, Response } from 'express';
import productService from '../services/product.service';

const getController = async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

const createController = async (req: Request, res: Response): Promise<Response> => {
  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
};

export default {
  getController, 
  createController,
}; 
