import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC44rNtr1JavKFjT7f3XfJDNzi1GMI81AM",
    authDomain: "final-web-g8.firebaseapp.com",
    projectId: "final-web-g8",
    storageBucket: "final-web-g8.firebasestorage.app",
    messagingSenderId: "15623497017",
    appId: "1:15623497017:web:3af8709cedf8e71031f4e8",
    measurementId: "G-XJT60FV3RZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const firestore = firebaseApp.firestore();

export { auth, firestore };
