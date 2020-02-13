import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATShYWNogD0x7y2Reb6Fmx2X4OEXPE-Uo",
    authDomain: "sjitc-website.firebaseapp.com",
    databaseURL: "https://sjitc-website.firebaseio.com",
    projectId: "sjitc-website",
    storageBucket: "sjitc-website.appspot.com",
    messagingSenderId: "466005284445",
    appId: "1:466005284445:web:df636b0c291a9cde8b1fb4"
  };

  firebase.initializeApp(firebaseConfig);

 

 export{
     firebase
 }
