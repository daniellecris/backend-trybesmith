import { sign, SignOptions } from 'jsonwebtoken';
import IUsers from '../interfaces/user.interface';

const TOKEN_SECRET = 'recomeço';

const jwtConfig: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateJWTToken = (user: Omit<IUsers, 'password'>) => {
  const token = sign({ user }, TOKEN_SECRET, jwtConfig);
  return token;
}; 

export default generateJWTToken;