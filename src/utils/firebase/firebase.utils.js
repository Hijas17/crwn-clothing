import {initializeApp} from 'firebase/app'

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'



import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB7FDPQLVT7lyVdrBa_611M_AjR0YOCLF4",
    authDomain: "crwn-clothing-app-94065.firebaseapp.com",
    projectId: "crwn-clothing-app-94065",
    storageBucket: "crwn-clothing-app-94065.appspot.com",
    messagingSenderId: "92874466112",
    appId: "1:92874466112:web:9b05289d19dc3cea9f10a5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();

  provider.setCustomParameters(
    {
        prompt:'select_account',
    }
  );


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const db = getFirestore();

  export const createUserDocfromAuth = async ()=>{
    const userDocref = doc(db,'users',)
  }

