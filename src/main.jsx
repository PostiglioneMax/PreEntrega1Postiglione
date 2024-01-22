import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//// TODO: Add SDKs for Firebase products that you want to use
//// https://firebase.google.com/docs/web/setup#available-libraries
//
//// Your web app's Firebase configuration
//const firebaseConfig = {
//    apiKey: "AIzaSyAJO9yMo3p_NwVI0wCeQpqGYpFQMXAZuP4",
//    authDomain: "my-project-test1-eac6a.firebaseapp.com",
//    projectId: "my-project-test1-eac6a",
//    storageBucket: "my-project-test1-eac6a.appspot.com",
//    messagingSenderId: "425310024030",
//    appId: "1:425310024030:web:3e219568c3d550ea1a1fcf",
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);
