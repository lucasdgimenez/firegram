 // Your web app's Firebase configuration
 import * as firebase from "firebase/app"
 import 'firebase/storage';
 import 'firebase/firestore'

 var firebaseConfig = {
  apiKey: "AIzaSyBN8JFVab7gGbQCG-8qCmzK4mqIDL4HGdY",
  authDomain: "firegram-c2b8b.firebaseapp.com",
  databaseURL: "https://firegram-c2b8b.firebaseio.com",
  projectId: "firegram-c2b8b",
  storageBucket: "firegram-c2b8b.appspot.com",
  messagingSenderId: "1092052706018",
  appId: "1:1092052706018:web:25aaf0cf9222aa9a07b4bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};