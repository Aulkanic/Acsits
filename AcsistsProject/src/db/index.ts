import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAznkmcA8el0J2RmIirOhhF4wrWlGCnhsQ",
  authDomain: "acsists.firebaseapp.com",
  projectId: "acsists",
  storageBucket: "acsists.appspot.com",
  messagingSenderId: "888762817637",
  appId: "1:888762817637:web:dde8f74e04c8c32fcafa8c",
  measurementId: "G-PM0BJNLXZZ"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

