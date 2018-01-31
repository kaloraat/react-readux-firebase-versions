import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: 'AIzaSyAlTYf7i9li8YAjZdAxES1jBz9msKjwGZI',
    authDomain: 'diary-10cb6.firebaseapp.com',
    databaseURL: 'https://diary-10cb6.firebaseio.com',
    projectId: 'diary-10cb6',
    storageBucket: '',
    messagingSenderId: '679835727466'
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
