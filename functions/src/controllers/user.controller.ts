import { createUser, getAll, getByEmail, getById } from '../repositories/user.repository'

export const getUserList = async (req: any, res: any) => {
  const result = await getAll();
  res.send(result);
}

export const getUserInfo = async (req: any, res: any) => {
  console.log('query: ', req.query);

  if (req.query.id) {
    const result = await getById(req.query.id);
    res.send(result);
  } else if (req.query.email) {
    const result = await getByEmail(req.query.email);
    res.send(result);
  } else {
    res.status(400).send({ message: 'input query argument.' });
  }
}

export const addUser = async (req: any, res: any) => {
  console.log('body: ', req.body);
  const {name, email} = req.body;

  const id = Math.random().toString().split('.')[1];
  const result = await createUser(id, {name, email});
  res.send(result);
}