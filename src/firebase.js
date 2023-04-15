// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC6ZtpBHIK2sKVnckMRIXebapTjB8piRq0',
  authDomain: 'e-learning-portal-2bc5c.firebaseapp.com',
  projectId: 'e-learning-portal-2bc5c',
  storageBucket: 'e-learning-portal-2bc5c.appspot.com',
  messagingSenderId: '798310334427',
  appId: '1:798310334427:web:c080073ddd6583ee5a31fe',
  measurementId: 'G-N5ZCGMFSNZ'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app
