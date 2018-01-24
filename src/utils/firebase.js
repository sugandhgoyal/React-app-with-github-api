import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDPcW0YZpKL8kV1r0BpkYVfMNXzm4B67Ag",
    authDomain: "sugandh-a1c0e.firebaseapp.com",
    databaseURL: "https://sugandh-a1c0e.firebaseio.com",
    projectId: "sugandh-a1c0e",
    storageBucket: "sugandh-a1c0e.appspot.com",
    messagingSenderId: "321799391681"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();