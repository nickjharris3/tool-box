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

// child removed
database.ref('tools').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child changed
database.ref('tools').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child added
database.ref('tools').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('tools').push({
//     name: 'Slack',
//     url: 'https://slack.com/',
//     imageUrl: 'https://i.pinimg.com/originals/2b/26/43/2b26437d72e949db88e62d251c736c45.gif',
//     description: 'Team communication tool.'
// });

// database.ref('tools').push({
//     name: 'Trello',
//     url: 'https://trello.com/',
//     imageUrl: 'https://cdn.dribbble.com/users/540920/screenshots/2355118/trello.png',
//     description: 'Project management app.'
// });

// database.ref('tools').push({
//     name: 'Firebase',
//     url: 'https://firebase.google.com/',
//     imageUrl: 'https://1.bp.blogspot.com/-zVNGq7J_pkI/V2zc3rYWySI/AAAAAAAAWsM/SxLC4c3n5_Q0DcQEbRE1oCbE20T4gHyuACKgB/s1600/firebase_logo_shot.png',
//     description: 'Cloud based backend to get apps up and running fast.'
// });


// database.ref().remove();

// database.ref('tools')
//   .once('value')
//   .then((snapshot) => {
//       const tools = [];

//       snapshot.forEach((childSnapshot) => {
//         tools.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });
//       console.log(tools);
//   });

// subscribing to changes (fetching data anytime there's a change)
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

