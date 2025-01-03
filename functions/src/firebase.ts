import { AppOptions, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const appOptions: AppOptions = {
  projectId: 'fir-test-04-2f5cd'
}

initializeApp(appOptions);

const firestoreDb = getFirestore();

export { firestoreDb };
