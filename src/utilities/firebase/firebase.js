import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from '../../firebase'


// Create user profile on firebase
export const createUserProfile = async (userAuth, otherInfo) => {
    if (!userAuth) return;
    const { displayName, email, uid } = userAuth;
    const userRef = firestore.doc(`/users/${uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...otherInfo
            })
        } catch (err) {
            console.log("An error occured", err)
        }
    }

    return userRef;
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