import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8wMps1hF39xghEwzpZp3RWG6zndeyuho",
    authDomain: "slack-clone-2c9c6.firebaseapp.com",
    projectId: "slack-clone-2c9c6",
    storageBucket: "slack-clone-2c9c6.appspot.com",
    messagingSenderId: "23655727172",
    appId: "1:23655727172:web:63826821fbc7fe34c2fc11"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};