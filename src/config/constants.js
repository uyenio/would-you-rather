import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCJG4S0rosvyIvi0EHapxt_x_rCvL4ctk8",
    authDomain: "wouldyourather-4acb6.firebaseapp.com",
    databaseURL: "https://wouldyourather-4acb6.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;