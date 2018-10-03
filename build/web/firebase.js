
var app_firebase = {};

(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDqimShTJ0HOLkvIBmKRY4Cs2guI6XvTpo",
        authDomain: "pocket-doctor-73480.firebaseapp.com",
        databaseURL: "https://pocket-doctor-73480.firebaseio.com",
        projectId: "pocket-doctor-73480",
        storageBucket: "pocket-doctor-73480.appspot.com",
        messagingSenderId: "720610702013"
    };
    firebase.initializeApp(config);

    app_firebase = firebase;
})()
