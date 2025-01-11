/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import {HttpsOptions, onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { addUser, getUserInfo, getUserList } from './controllers/user.controller'
import { addTodo, getTodo, getTodoList } from "./controllers/todo.controller";

const defaultHttpOptions: HttpsOptions = {
  region: 'asia-northeast1',
  cors: true,
}

export const helloWorld = onRequest(defaultHttpOptions, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// curl http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/users
export const users = onRequest(defaultHttpOptions, getUserList);

// curl http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/userinfo?id=
// curl http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/userinfo?email=
export const userinfo = onRequest(defaultHttpOptions, getUserInfo);

// curl -X POST -d {\"name\": \"kim\", \"email\": \"t1@example.com\"} http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/adduser
export const adduser = onRequest(defaultHttpOptions, addUser);

// curl http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/todos
export const todos = onRequest(defaultHttpOptions, getTodoList);

// curl http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/todo?id=
export const todo = onRequest(defaultHttpOptions, getTodo);

// curl -X POST -d {\"title\": \"new todo 1st\" } http://127.0.0.1:5001/fir-test-04-2f5cd/asia-northeast1/addtodo
export const addtodo = onRequest(defaultHttpOptions, addTodo);
