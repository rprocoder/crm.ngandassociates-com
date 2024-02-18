import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlvLFsCeCsj9Ifj8qF1NYZKJ9zMQrWIxA",
  authDomain: "ng-associates-e8ccc.firebaseapp.com",
  projectId: "ng-associates-e8ccc",
  storageBucket: "ng-associates-e8ccc.appspot.com",
  messagingSenderId: "345767939688",
  appId: "1:345767939688:web:dc5c14e83b713e528ab5dd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
