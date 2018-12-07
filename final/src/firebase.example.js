import * as firebase from "firebase";
// Use your credentials below
var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxx.firebaseio.com",
    messagingSenderId: "xxxxxxxxxxx"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
