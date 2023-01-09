import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyA6nM46a3NZmrHHGwnVvM_1wd7KZLcRQI0",
    authDomain: "arab-mal.firebaseapp.com",
    projectId: "arab-mal",
    storageBucket: "arab-mal.appspot.com",
    messagingSenderId: "326914452714",
    appId: "1:326914452714:web:f9da74abeae13844c43b93",
    measurementId: "G-CV179FHHWZ"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);

