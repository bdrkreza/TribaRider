
import firebase from 'firebase/app';
import "firebase/auth";
const app = firebase.initializeApp({
    apiKey: "AIzaSyAevp21832yGcEqC4x6HMu7H_xYPbKj-pw",
    authDomain: "rksocial-app.firebaseapp.com",
    projectId: "rksocial-app",
    storageBucket: "rksocial-app.appspot.com",
    messagingSenderId: "627563316058",
    appId: "1:627563316058:web:0ab77438344c2828022963"
});


const auth = app.auth();
export { auth };
export default app;