import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
   
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "3959769",
    appId: "",
    measurementId: "G-M0DL0DJRJG"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
 }

 export default StartFirebase;
