<template >
    <div>
        <input  ref="newmessage" placeholder="new message ..." type="text">
        <button @click="addNewMessage">addNew</button>
    </div>
</template>
<script>
import {getFirestore,Onsnapshot,collection,doc,deleteDoc,setDoc,addDoc,OrderBy,query} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeDWFUUpg3unJZ7cRzwYFpI1ZzGO9B37c",
  authDomain: "tjcafe-3e3ee.firebaseapp.com",
  projectId: "tjcafe-3e3ee",
  storageBucket: "tjcafe-3e3ee.appspot.com",
  messagingSenderId: "70970978260",
  appId: "1:70970978260:web:838dd99792eddcd66cb041",
  measurementId: "G-88W2EZF3ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default {
    name:'admin',
    methods: {
        addNewMessage:function () {
          addDoc(colllection(''))
        } 
    },
}
</script>
<style>
    
</style>