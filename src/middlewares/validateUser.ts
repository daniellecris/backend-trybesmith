import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateUser = async () => {
  const user = Joi.object().keys({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  return user;
};

const validateUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const user = await validateUser();
  const { error } = user.validate(req.body);

  if (error) {
    const { type, message } = error.details[0];
    const status = type === 'any.required' ? 400 : 422; 
    return res.status(status).json({ message });
  }
  next();
};

export default validateUserMiddleware; 