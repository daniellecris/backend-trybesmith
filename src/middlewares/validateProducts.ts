import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateProducts = async () => {
  const products = Joi.object().keys({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
    orderId: Joi.number().allow(null),
  });

  return products;
};

const validateProductMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const schema = await validateProducts();
  const { error, value } = schema.validate(req.body);
  
  if (!value.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!value.amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default validateProductMiddleware;