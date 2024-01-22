// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn1SNADWEvxDNnx1wGFv7JuayyKAVjeKU",
    authDomain: "testing2-ddfc5.firebaseapp.com",
    projectId: "testing2-ddfc5",
    storageBucket: "testing2-ddfc5.appspot.com",
    messagingSenderId: "344932600909",
    appId: "1:344932600909:web:90ec82c56f2632e0e22004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = getFirestore(app);
