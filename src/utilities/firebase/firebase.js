import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGtOWPFTsqHTO97tswP5GhNrQ6Jik5BOs",
    authDomain: "ecommerce-db-8b31b.firebaseapp.com",
    databaseURL: "https://ecommerce-db-8b31b.firebaseio.com",
    projectId: "ecommerce-db-8b31b",
    storageBucket: "",
    messagingSenderId: "503227826209",
    appId: "1:503227826209:web:f33533624126da0d28a360",
    measurementId: "G-LRR14CS4HL"
}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => { auth.signInWithPopup(provider) };
export const signOutWithGoogle = () => { auth.signOutWithGoogle(provider) }

export default firebase;