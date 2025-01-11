import { createTodo, getAll, getById } from '../repositories/todo.repository';

export const getTodoList = async (req: any, res: any) => {
  const result = await getAll();
  res.send(result);
}

export const getTodo = async (req: any, res: any) => {
  console.log('query: ', req.query);

  if (req.query.id) {
    const result = await getById(req.query.id);
    res.send(result);
    res.status(400).send({ message: 'input query argument.' });
  }
}

export const addTodo = async (req: any, res: any) => {
  console.log('body: ', req.body);
  const { title } = req.body;

  const id = Math.random().toString().split('.')[1];
  const result = await createTodo(id, {title});
  res.send(result);
}