import { Request, Response } from 'express';
import userService from '../services/user.service';
import generateJWTToken from '../utils/jwt';

const userController = async (req: Request, res: Response): Promise<Response> => {
  await userService(req.body);
  const token = generateJWTToken(req.body);
  return res.status(201).json({ token });
};

export default userController; 