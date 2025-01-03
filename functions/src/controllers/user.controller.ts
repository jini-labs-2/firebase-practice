import { getAll, getById } from '../repositories/user.repository'

export const getUserList = async (req: any, res: any) => {
  const result = await getAll();
  res.send(result);
}

export const getUserInfo = async (req: any, res: any) => {
  console.log('query: ', req.query);

  const result = await getById(req.query.id);
  res.send(result);
}