import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH21wpMVzXC2kYGnD8x1tI6ru-zdWNAqs",
    authDomain: "test-4ba23.firebaseapp.com",
    databaseURL: "https://test-4ba23.firebaseio.com",
    projectId: "test-4ba23",
    storageBucket: "test-4ba23.appspot.com",
    messagingSenderId: "597606478464",
    appId: "1:597606478464:web:6e48455407186638df2c65",
    measurementId: "G-NDR2C185V9"
});

const db = firebaseApp.firestore();

export {db};