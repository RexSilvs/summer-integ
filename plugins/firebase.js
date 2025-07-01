// plugins/firebase.js

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBz5Wn_EPIP_08_3NV_yO2fi7xOQ-O8O_g",
  authDomain: "bsit3a-login.firebaseapp.com",
  projectId: "bsit3a-login",
  storageBucket: "bsit3a-login.appspot.com",
  messagingSenderId: "939710766464",
  appId: "1:939710766464:web:0d0f9d92d6ce941e0bb565",
  measurementId: "G-4YRZ9NLK7C"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {
  auth,
  provider,
  signInWithPopup
}
