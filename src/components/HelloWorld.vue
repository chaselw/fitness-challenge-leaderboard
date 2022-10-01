<template>
  <v-container>
    <h1 class="text-center">Welcome to the fitness challenge leaderboard!</h1>
    <v-form
        ref="form"
        lazy-validation
    >
      <v-text-field
          v-model="newGoalTitle"
          class="small"
          label="New Goal Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="newGoalDesc"
          label="Description"
          required
      ></v-text-field>

      <v-btn
          :disabled="!validInput"
          color="success"
          class="mr-4"
          @click="addNewRule"
      >
        Create Goal
      </v-btn>
    </v-form>
    <h2 class="text-center">Your Goals</h2>
    <goal-card
        v-for="(goal, index) in goals"
        :key="index"
        :goal="goal"
    />
  </v-container>
</template>

<script>
  import GoalCard from "@/components/GoalCard";
  export default {
    name: 'HelloWorld',

    components: { GoalCard },

    data: () => ({
      newGoalTitle: '',
      newGoalDesc: '',
      goals: []
    }),

    computed: {
      validInput () {
        return this.newGoalTitle && this.newGoalDesc
      }
    },

    methods: {
      addNewRule () {
        const newGoal = {
          title: this.newGoalTitle,
          description: this.newGoalDesc
        }
        this.goals.push(newGoal)
        this.resetInputs()
      },
      resetInputs () {
        this.newGoalTitle = ''
        this.newGoalDesc = ''
      }
    }
  }
</script>
