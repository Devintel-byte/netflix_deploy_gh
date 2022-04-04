// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { seedDatabase } from '../seed';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCNimkfTYGYHVREr90uSCnOEUcGcyrhz3k",
    authDomain: "netflix-simulation.firebaseapp.com",
    projectId: "netflix-simulation",
    storageBucket: "netflix-simulation.appspot.com",
    messagingSenderId: "494166177245",
    appId: "1:494166177245:web:0743573efcd6049ea1f234",
};

firebase.initializeApp(firebaseConfig);

export default firebase; 






// const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);

// const auth = getAuth(firebaseApp);

// const todoCol = collection(db, seedDatabase)

// getDocs(todoCol);

// Detect auth state
// onAuthStateChanged( auth, user => {
//     if (user != null) {
//         console.log('Logged in!');
//     } else {
//         console.log('no user');
//     }
// });

