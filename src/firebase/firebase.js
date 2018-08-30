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

database.ref('tools').update({
    t001: {
        name: 'Slack',
        url: 'https://slack.com/',
        imageUrl: 'https://i.pinimg.com/originals/2b/26/43/2b26437d72e949db88e62d251c736c45.gif',
        description: 'Team communication tool.'
    },
    t002: {
        name: 'Trello',
        url: 'https://trello.com/',
        imageUrl: 'https://cdn.dribbble.com/users/540920/screenshots/2355118/trello.png',
        description: 'Project management app.'
    },
    t003: {
        name: 'Firebase',
        url: 'https://firebase.google.com/',
        imageUrl: 'https://1.bp.blogspot.com/-zVNGq7J_pkI/V2zc3rYWySI/AAAAAAAAWsM/SxLC4c3n5_Q0DcQEbRE1oCbE20T4gHyuACKgB/s1600/firebase_logo_shot.png',
        description: 'Cloud based backend to get apps up and running fast.'
    }
});
