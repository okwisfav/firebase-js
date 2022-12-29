import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
   
const firebaseConfig = {
    apiKey: "AIzaSyC1AzGhGjS5m0PrKpg_bz7wcb3-WpGzgzc",
    authDomain: "uneleap-9b858.firebaseapp.com",
    databaseURL: "https://uneleap-ambassadors.firebaseio.com/",
    projectId: "uneleap-9b858",
    storageBucket: "uneleap-9b858.appspot.com",
    messagingSenderId: "399698159769",
    appId: "1:399698159769:web:32628b69175e083542b008",
    measurementId: "G-M0DL0DJRJG"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
 }

 export default StartFirebase;