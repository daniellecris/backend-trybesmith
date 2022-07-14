import { ResultSetHeader } from 'mysql2';
import IUsers from '../interfaces/user.interface';
import connection from './connection';

const userCreateModel = async (user: IUsers): Promise<ResultSetHeader> => {
  const query = `INSERT INTO Trybesmith.Users (
         username,
         classe, 
         level, 
         password ) VALUES (?, ?, ?, ?)`;
  const [addUser] = await connection.execute<ResultSetHeader>(
    query,
    [user.username, user.classe, user.level, user.password],
  );
  return addUser;
};

// const user

export default userCreateModel; 