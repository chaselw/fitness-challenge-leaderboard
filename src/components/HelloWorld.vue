<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Welcome to the fitness challenge leaderboard!</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-text-field
              v-model="newGoalTitle"
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
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row>
      <v-col>
        <h2 class="text-center">Goals</h2>
        <v-card
            v-for="(goal, index) in goals"
            :key="index"
            class="ma-1"
        >
          <v-card-title>
            {{ goal.title}}
          </v-card-title>
          <v-card-subtitle>
            {{ goal.description }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

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
