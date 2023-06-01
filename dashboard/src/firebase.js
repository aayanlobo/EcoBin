// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_noFRKbIrII_d_dlnZZaRSLWDSdIGcs",
  authDomain: "focus-app-f3bce.firebaseapp.com",
  projectId: "focus-app-f3bce",
  storageBucket: "focus-app-f3bce.appspot.com",
  messagingSenderId: "31927594652",
  appId: "1:31927594652:web:4a81267221b2c689bec759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
export { auth, storage };
export default app;
