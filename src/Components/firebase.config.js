// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpAH5_qZZz5hFz55YYt2ThSqC4X7BRRPg",
  authDomain: "todo-list-ab004.firebaseapp.com",
  projectId: "todo-list-ab004",
  storageBucket: "todo-list-ab004.appspot.com",
  messagingSenderId: "213774496250",
  appId: "1:213774496250:web:1aa41ef5b72ad7fd8ff443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig