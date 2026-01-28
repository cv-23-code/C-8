
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/Auth";
// keep your credentials 
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;