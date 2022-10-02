<template>
  <div>
    <v-btn @click="addGoal()">Add Goal</v-btn>
  </div>
</template>
<script>
import db from "@/FirebaseDb";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: 'WelcomePage',

  methods: {
    async addGoal () {
      const goal = {
        title: 'test New title',
        description: 'test Description',
        user: 'test user'
      }
      await addDoc(collection(db, 'goals'), goal).then(() => {
        alert("Goal added");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>
