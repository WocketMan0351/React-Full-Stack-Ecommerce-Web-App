import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBMWEwaAe6WUVBK3-NLws0kP6U8lqjeCRQ',
  authDomain: 'crwn-db-1b97c.firebaseapp.com',
  projectId: 'crwn-db-1b97c',
  storageBucket: 'crwn-db-1b97c.appspot.com',
  messagingSenderId: '725236030831',
  appId: '1:725236030831:web:0119f220d1eb7a69005c9a',
  measurementId: 'G-TS4XRPKFYS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
