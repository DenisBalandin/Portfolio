import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjev16k10DNrJPvuzgAZ6XukLXJT_yoMU",
    authDomain: "portfolio-29663.firebaseapp.com",
    databaseURL: "https://portfolio-29663.firebaseio.com",
    projectId: "portfolio-29663",
    storageBucket: "portfolio-29663.appspot.com",
    messagingSenderId: "149677035898",
    appId: "1:149677035898:web:b8bd781008d2e194b086c3",
    measurementId: "G-XCQX1K1BLH"
});

const db = firebaseApp.firestore();

export {db};