import { initializeApp } from "firebase/app"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsRWcpgqhqjLbcAoS7wOpoy1B53e-PSec",
  authDomain: "notes-e3c78.firebaseapp.com",
  projectId: "notes-e3c78",
  storageBucket: "notes-e3c78.appspot.com",
  messagingSenderId: "437293665802",
  appId: "1:437293665802:web:6729ee21235a4c99f299f3",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth() // Initialize the auth object

const db = getFirestore()

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword }
