import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOJeOxqhQgas8lZxLnnvr5KbnuofGT9aY",
  authDomain: "montestage-327a0.firebaseapp.com",
  projectId: "montestage-327a0",
  storageBucket: "montestage-327a0.appspot.com",
  messagingSenderId: "412855518177",
  appId: "1:412855518177:web:1171dd799f1d050ca748a0",
};

// Initialize Firebase and Firestore
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
