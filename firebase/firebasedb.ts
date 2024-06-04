import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: process.env.,
  measurementId: process.env.
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
