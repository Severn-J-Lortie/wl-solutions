// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyA-fd4zYwiLBWToynh6Y9mZlDcWqcnLGjY',
  authDomain: 'wl-solutions.firebaseapp.com',
  projectId: 'wl-solutions'
});

const db = getFirestore(firebaseApp);

// Export the db object
export { db }