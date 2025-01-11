import { firestoreDb } from '../firebase';

interface Todo {
  id: string,
  title: string,
  completed: boolean
}

export async function getAll() {
  const db = firestoreDb;
  const snapshot = await db.collection('todos').get();

  const results = snapshot.docs.map(doc => {
    const todo = doc.data();
    return {
      id: doc.id,
      title: String(todo.title),
      completed: todo.completed
    } ;
  });

  return results;
}

export async function getById(id: string) {
  const db = firestoreDb;
  const snapshot = await db.collection('todos').doc(id).get();

  const result = snapshot.data();
  return result;
}

export async function createTodo(id: string, todo: Partial<Todo>) {
  const { title, completed } = todo;
  if (!title )
    throw new Error('input title!');

  const db = firestoreDb;

  const docRef = db.collection('todos').doc(id)
  await docRef.set({
    id,
    title: todo.title,
    completed: todo.completed ?? false
  }, { merge: false });

  return { id, title, completed }
}