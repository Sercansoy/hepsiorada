import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqWX3NbVtbPRj03NM4Y54CRpeVopNEw8s",
  authDomain: "hepsiorada-e12ab.firebaseapp.com",
  projectId: "hepsiorada-e12ab",
  storageBucket: "hepsiorada-e12ab.appspot.com",
  messagingSenderId: "246858914977",
  appId: "1:246858914977:web:b75da8d7a8ca25e0ff64e0",
};
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

export { app, store };
