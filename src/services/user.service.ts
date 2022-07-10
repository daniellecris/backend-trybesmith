import userCreate from '../models/user.model';
import IUsers from '../interfaces/user.interface';

const userCreateService = async (Users: IUsers): Promise<IUsers> => {
  const users = await userCreate(Users);
  const { insertId } = users;
  return { id: insertId, ...Users };
};
export default userCreateService; 