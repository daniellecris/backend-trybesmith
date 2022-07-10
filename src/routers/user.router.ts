import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUserMiddleware from '../middlewares/validateUser';

const userRouter = Router();

userRouter.post('/users', validateUserMiddleware, userController);

export default userRouter; 