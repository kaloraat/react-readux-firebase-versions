import * as firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDaylFhul2B1X7c9htD8S6UVqtg6R_hLUY",
    authDomain: "messageboard-bc10c.firebaseapp.com",
    databaseURL: "https://messageboard-bc10c.firebaseio.com",
    projectId: "messageboard-bc10c",
    storageBucket: "messageboard-bc10c.appspot.com",
    messagingSenderId: "1088631485119"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
