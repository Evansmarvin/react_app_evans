import firebase from 'firebase/compat/app';
//import firebase from firebase;
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIn28hHX9-Ffot6Pxg81Dhb9hi_mzsGS0",
    authDomain: "evans29-9747b.firebaseapp.com",
    projectId: "evans29-9747b",
    storageBucket: "evans29-9747b.appspot.com",
    messagingSenderId: "22270317092",
    appId: "1:22270317092:web:8df0b579bf9ad09098beb1",
    measurementId: "G-67FX5E97KV"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db , auth}