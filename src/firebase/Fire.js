import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8YsB4jRMh0-SfmRnBEQXxzGlp7oniVLk",
    authDomain: "rhapsody-11fc8.firebaseapp.com",
    databaseURL: "https://rhapsody-11fc8.firebaseio.com",
    projectId: "rhapsody-11fc8",
    storageBucket: "rhapsody-11fc8.appspot.com",
    messagingSenderId: "123780196842",
    appId: "1:123780196842:web:9f41a2d6a54a011870aa93"
};

firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();

export default DB;