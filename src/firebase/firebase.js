import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7PkUxGFqPaE5hUoKW4hD2KoUt94T1i2g",
    authDomain: "tool-box-3e460.firebaseapp.com",
    databaseURL: "https://tool-box-3e460.firebaseio.com",
    projectId: "tool-box-3e460",
    storageBucket: "tool-box-3e460.appspot.com",
    messagingSenderId: "607212554173"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Nick Harris',
    age: 22,
    isSingle: false
});