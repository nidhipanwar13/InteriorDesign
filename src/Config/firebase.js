import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA59pxOhJ_Wz2Cq9Tr4OK5S8gr4of1ywfM",
    authDomain: "interior-desing.firebaseapp.com",
    projectId: "interior-desing",
    storageBucket: "interior-desing.appspot.com",
    messagingSenderId: "360652476396",
    appId: "1:360652476396:web:440442b663ba098b87fac9",
    measurementId: "G-JS48KSZ221"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 export const dataref = firebase.database().ref();
 export const BookingConsultationRef = dataref.child("BookingConsultation");
 export const ContactDetailsRef = dataref.child("ContactDetails");


//   firebase.analytics();

  export default firebase;