import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBNVPUncLLPe95GO61L7h2UYLIaNyecidk",
        authDomain: "digital-startup2-0.firebaseapp.com",
        databaseURL: "https://digital-startup2-0.firebaseio.com",
        projectId: "digital-startup2-0",
        storageBucket: "digital-startup2-0.appspot.com",
        messagingSenderId: "713443082025",
        appId: "1:713443082025:web:8955ac210a7c0e0ae78138",
        measurementId: "G-SKDB8S9X9F"
    })
    .firestore();

export const postRef = db.collection("users");