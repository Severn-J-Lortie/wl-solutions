// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
});

const db = getFirestore(firebaseApp);


// Function to get the current user (null if not signed in).
// Esentially, this function converts the onAuthStateChanged function into a Promise
// which can be awaited in other parts of the app later.
const getCurrentUser = () => {

  const auth = getAuth();
  return new Promise((resolve, reject) => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject();
      }
      unsubscribe();
    }, reject)

  })

}


// Export the db object
export { db, getCurrentUser }