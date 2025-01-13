import { firestoreDb } from '../firebase';

interface User {
  id: string,
  email: string,
}

// const USER_LIST = [
//   {id: '1', name: 'hoge 1', email: 'user1@example.com'},
//   {id: '2', name: 'hoge 2', email: 'user2@example.com'},
//   {id: '3', name: 'hoge 3', email: 'user3@example.com'}
// ] as User[];

export async function getAll() {
  const db = firestoreDb;
  const snapshot = await db.collection('users').get();

  const results = snapshot.docs.map(doc => {
    const user = doc.data();
    return {
      id: doc.id,
      emial: String(user.email)
    } ;
  });

  return results;
}

export async function getById(id: string) {
  const db = firestoreDb;
  const snapshot = await db.collection('users').doc(id).get();

  const result = snapshot.data();
  return result;
}

export async function getByEmail(email: string) {
  const db = firestoreDb;
  const snapshot = await db.collection('users').where('email', '==', email).get();

  const results = snapshot.docs.map(doc => {
    const user = doc.data();
    return {
      id: doc.id,
      emial: String(user.email)
    } ;
  });

  return results[0];
}

export async function createUser(id: string, user: Partial<User>) {
  const { email } = user;
  if (!id || !email)
    throw new Error('input user_id and email');

  const db = firestoreDb;

  const docRef = db.collection('users').doc(id)
  await docRef.set({
    email: user.email
  }, { merge: false });

  return { id, email }
}