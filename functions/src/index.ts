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
import { getUserInfo, getUserList } from './controllers/user.controller'

const defaultHttpOptions: HttpsOptions = {
  region: 'asia-northeast1',
  cors: true,
}

export const helloWorld = onRequest(defaultHttpOptions, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const users = onRequest(defaultHttpOptions, getUserList);
export const userinfo = onRequest(defaultHttpOptions, getUserInfo);
