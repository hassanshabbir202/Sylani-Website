import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyCQHu2UmZgi7srK1YPGT1KktCEboj7yFX0",
    authDomain: "sylani-website-76805.firebaseapp.com",
    projectId: "sylani-website-76805",
    storageBucket: "sylani-website-76805.appspot.com",
    messagingSenderId: "837632821165",
    appId: "1:837632821165:web:10a704428b84d329998324",
    measurementId: "G-5X1Z3WV18N"
  };
        const app = initializeApp(firebaseConfig);
        return getDatabase(app)
}

export default StartFirebase;