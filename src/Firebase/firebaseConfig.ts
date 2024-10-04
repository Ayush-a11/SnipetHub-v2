// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { loadEnvConfig } from '@next/env'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// console.log(process.env.NEXT_PUBLIC_API_KEY);
// console.log(process.env.NEXT_AUTH_DOMAIN);
// console.log(process.env.NEXT_PROJECT_ID)
// console.log(process.env.NEXT_STORAGE_BUCKET)
// console.log(process.env.NEXT_MESSAGING_SENDER_ID)
// console.log(process.env.NEXT_APP_ID)

export default firebaseConfig;