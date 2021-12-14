import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACSXk9OkMO2wtwl4moriUccH3oSvsJ6DI",
  authDomain: "widd-flix.firebaseapp.com",
  projectId: "widd-flix",
  storageBucket: "widd-flix.appspot.com",
  messagingSenderId: "810636958238",
  appId: "1:810636958238:web:fb0abde50387c2bc5c6c0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
