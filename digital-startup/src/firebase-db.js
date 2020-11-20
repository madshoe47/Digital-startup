import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBsHfZTYVmof5cJlYXUx584Uqqtebq1JlQ",
        authDomain: "digital-startup-6d74c.firebaseapp.com",
        databaseURL: "https://digital-startup-6d74c.firebaseio.com",
        projectId: "digital-startup-6d74c",
        storageBucket: "digital-startup-6d74c.appspot.com",
        messagingSenderId: "888058004861",
        appId: "1:888058004861:web:fc64a19735e6657fb3b814",
        measurementId: "G-EBFE2M2JQS"
    })
    .firestore()

export const postRef = db.collection('posts')