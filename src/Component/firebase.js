
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtvuNzK4T3BnJKbtJ2s3K690DyRPjntXk",
  authDomain: "react-hooks-blog-4382f.firebaseapp.com",
  projectId: "react-hooks-blog-4382f",
  storageBucket: "react-hooks-blog-4382f.appspot.com",
  messagingSenderId: "198483912941",
  appId: "1:198483912941:web:1d5d2ce6d02587fc3644e4"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();