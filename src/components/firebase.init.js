import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAciod3VDb7f8KzSbNeuVhLwbQvQVGgl4E",
  authDomain: "awesome-project-auth-85983.firebaseapp.com",
  projectId: "awesome-project-auth-85983",
  storageBucket: "awesome-project-auth-85983.appspot.com",
  messagingSenderId: "890404224737",
  appId: "1:890404224737:web:57d7cead2ca530eca8c1a0",
  measurementId: "G-7JJ59JSRDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
