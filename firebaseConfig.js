import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBUMHPpNfbW_7UHWXlzhWd7tHQ79y-5Lmw',
  authDomain: 'quizdb-26ba3.firebaseapp.com',
  databaseURL: 'https://quizdb-26ba3.firebaseio.com',
  projectId: 'quizdb-26ba3',
  storageBucket: 'quizdb-26ba3.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:134219184844:android:79339bd10e1d68aea6a069',
  measurementId: 'G-measurement-id',
};

initializeApp(firebaseConfig);
