import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCUVORDOjqtlfvn6eD96qK-2K4WjnwhA8",
    authDomain: "tiktok-5fc7f.firebaseapp.com",
    databaseURL: "https://tiktok-5fc7f.firebaseio.com",
    projectId: "tiktok-5fc7f",
    storageBucket: "tiktok-5fc7f.appspot.com",
    messagingSenderId: "143420685528",
    appId: "1:143420685528:web:794791c1281782b641ebad",
    measurementId: "G-H1TXDHYQSC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;


