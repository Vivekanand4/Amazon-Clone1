
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC_fDKtIhyOOkLjenkhfWX7-98nG-sFCwQ",
    authDomain: "clone-project-51d82.firebaseapp.com",
    projectId: "clone-project-51d82",
    storageBucket: "clone-project-51d82.appspot.com",
    messagingSenderId: "763798970481",
    appId: "1:763798970481:web:21b196ab604a824cc03bd0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};