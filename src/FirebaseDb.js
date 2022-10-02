import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuiFQHJ4vxnkhGXV7g6T3NqiRw3uHS6KI",
  authDomain: "fitness-challenge-leaderboard.firebaseapp.com",
  projectId: "fitness-challenge-leaderboard",
  storageBucket: "fitness-challenge-leaderboard.appspot.com",
  messagingSenderId: "366052505706",
  appId: "1:366052505706:web:5ac0acb61ea4bc9f61b213",
  measurementId: "G-8W5EBC1NWZ"
};

// Initialize Firebase
// Initialize Cloud Firestore and get a reference to the service
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
