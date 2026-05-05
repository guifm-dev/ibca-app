// Export
import * as firebase from "firebase/compat";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: 'xxx',
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
});

// Export
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
