import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCd2Nf2N-croe8VMWyA7_M7X04lVJYY_Ts",
    authDomain: "disney-plus-clone-57823.firebaseapp.com",
    projectId: "disney-plus-clone-57823",
    storageBucket: "disney-plus-clone-57823.appspot.com",
    messagingSenderId: "809396936325",
    appId: "1:809396936325:web:f75ea95ca41457bce653ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;