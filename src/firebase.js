import app from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidVDDXou2FCzaef-4MM5gI4x_1TTV02A",
  authDomain: "parcialcorte2-8482d.firebaseapp.com",
  projectId: "parcialcorte2-8482d",
  storageBucket: "parcialcorte2-8482d.appspot.com",
  messagingSenderId: "491414272005",
  appId: "1:491414272005:web:73250e9dda9435ab74046c"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore;