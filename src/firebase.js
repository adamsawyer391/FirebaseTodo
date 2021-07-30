
/**
 *  1.  First, add an app to your firebase project
 *  2.  Make the firebase import
 *  3.  Initialize app
 *  4.  Get firebase firestore and firebase auth
 */


import firebase from 'firebase'


// const firebaseConfig = {
    
// };

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6eVuLRCV6ISy3v8L7YMg8gk68fZueXhI",
    authDomain: "socialape-8bd04.firebaseapp.com",
    projectId: "socialape-8bd04",
    storageBucket: "socialape-8bd04.appspot.com",
    messagingSenderId: "656397039777",
    appId: "1:656397039777:web:9a519806500cb2b51f98e0",
    measurementId: "G-H25NGWQBNV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;