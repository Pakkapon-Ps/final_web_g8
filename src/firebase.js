// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC44rNtr1JavKFjT7f3XfJDNzi1GMI81AM",
    authDomain: "final-web-g8.firebaseapp.com",
    projectId: "final-web-g8",
    storageBucket: "final-web-g8.firebasestorage.app",
    messagingSenderId: "15623497017",
    appId: "1:15623497017:web:3af8709cedf8e71031f4e8",
    measurementId: "G-XJT60FV3RZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
