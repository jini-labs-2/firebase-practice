interface User {
  id: string,
  name: string,
  email: string,
}

const USER_LIST = [
  {id: '1', name: 'hoge 1', email: 'user1@example.com'},
  {id: '2', name: 'hoge 2', email: 'user2@example.com'},
  {id: '3', name: 'hoge 3', email: 'user3@example.com'}
] as User[];

export async function getAll() {

  return USER_LIST;  
}

export async function getById(id: string) {

  return USER_LIST.find(user => user.id === id);
}

export async function getByEmail(email: string) {

  return USER_LIST.find(user => user.email === email);
}