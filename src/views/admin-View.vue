<template >
    <div>
        
    </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDeDWFUUpg3unJZ7cRzwYFpI1ZzGO9B37c",
  authDomain: "tjcafe-3e3ee.firebaseapp.com",
  projectId: "tjcafe-3e3ee",
  storageBucket: "tjcafe-3e3ee.appspot.com",
  messagingSenderId: "70970978260",
  appId: "1:70970978260:web:5003d6405a4dc8846cb041",
  measurementId: "G-9XVEZ51JN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default {
    
}
</script>
<style>
    
</style>