import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi0FLuqO--8EkxI-vcGEolJYV6zRxYIkc",
  authDomain: "e-comerce-7cc29.firebaseapp.com",
  projectId: "e-comerce-7cc29",
  storageBucket: "e-comerce-7cc29.firebasestorage.app",
  messagingSenderId: "817557218909",
  appId: "1:817557218909:web:cd4b986804cd9367b10fb4",
  measurementId: "G-15FQN324WM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;